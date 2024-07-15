import { firestoreDb } from "../../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  collection,
  addDoc,
  getDocs,
  where,
  startAt,
  orderBy,
  limit,
  endBefore,
  query,
} from "firebase/firestore";
import dateTimeUtils from "@/utils/DateTimeUtils";

class CatalogService {
  /**
   *
   * @param {string} type
   * @param {File} file
   * @param {Object} fileData
   * @returns {string} fileUrl
   */

  // website_assets refers to the required images, thumbnails of the website.
  uploadToBucket = async (type = "website_assets", files, fileData) => {
    try {
      const { webFile, thumbnails } = files;
      const date = dateTimeUtils.getUnixTimeStamp();
      const storage = getStorage();
      const storageRef = ref(storage, `${date}_${webFile.name}`);

      // uploading the web files first
      const response = await uploadBytes(storageRef, webFile);
      const webfileUrl = await getDownloadURL(response.ref);

      // upload the thumbnails of the website, (folder name: <date_file>.<file_name>_thumbnails)
      let thumbnailUrls = [];
      for (let thumbnail of thumbnails) {
        const thumbnailStorageRef = ref(
          storage,
          `${date}_${webFile.name}_thumbnails/${thumbnail.name}`
        );
        const thumbnailUploadResponse = await uploadBytes(
          thumbnailStorageRef,
          thumbnail
        );

        const url = await getDownloadURL(thumbnailUploadResponse.ref);
        thumbnailUrls.push(url);
      }

      console.log("thumbnail---", thumbnailUrls);

      if (type === "website_assets") {
        this.saveFileUrlToFirestore(
          "WebsiteAssets",
          { webfileUrl, thumbnailUrls },
          fileData
        );
      }
      return { webfileUrl, thumbnailUrls };
    } catch (error) {
      console.error("Error while uploading to bucket", error);
      throw new Error("Error while uploading to bucket", error);
    }
  };

  /**
   *
   * @param {string} collectionName
   * @param {string} fileUrl
   * @param {Object} fileData
   */

  // Once the website assets are saved to firebase databse, its generated url will be stored to desired
  // firestore object.
  saveFileUrlToFirestore = async (collectionName, filesUrl, fileData) => {
    try {
      const collectionRef = collection(firestoreDb, collectionName);
      const unixTimeStamp = dateTimeUtils.getUnixTimeStamp();

      addDoc(collectionRef, { filesUrl, fileData, unixTimeStamp });
    } catch (error) {
      console.error("Error occured while saving url to firestore", error);
      throw new Error("Error occured while saving url to firestore", error);
    }
  };

  /**
   *
   * @param {string} filter
   * @param {string} sort
   * @param {number} pageSize
   * @param {number} pageNo
   * @returns { result, totalPages }
   */

  // Catalog refers to the complete zip file of the project along with essential data like
  // filename, thumbnail urls, file urls, file description etc.
  getWebsites = async (
    filter = "All",
    sort = "unixTimeStamp",
    itemsPerPage = 5,
    pageSize = 20,
    pageNo = 1
  ) => {
    try {
      const collectionRef = collection(firestoreDb, "WebsiteAssets");

      const queryConstraints = [];
      if (filter !== "All")
        queryConstraints.push(where("fileData.category", "==", filter));

      const startIndex = (pageNo - 1) * itemsPerPage;

      // prepare query
      const q = query(
        collectionRef,
        ...queryConstraints,
        orderBy(sort),
        limit(pageSize),
        startAt(startIndex)
      );

      console.log("query", q);
      // Make firestore call
      const querySnapshot = await getDocs(q);
      let result = [];
      querySnapshot.forEach((item) => {
        result.push(item.data());
      });
      const totalSize = querySnapshot.size;
      const totalPages = totalSize / pageSize;

      return { result, totalPages };
    } catch (error) {
      console.error("Error occured while retreiving catalog", error);
      throw new Error("Error occured while retreiving catalog", error);
    }
  };
}

export default new CatalogService();
