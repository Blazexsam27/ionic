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
  uploadToBucket = async (type = "website_assets", file, fileData) => {
    try {
      const date = dateTimeUtils.getUnixTimeStamp();
      const storage = getStorage();
      const storageRef = ref(storage, `${date}_${file.name}`);

      // uploading logic
      const response = await uploadBytes(storageRef, file);
      const fileUrl = await getDownloadURL(response.ref);
      if (type === "website_assets") {
        this.saveFileUrlToFirestore("WebsiteAssets", fileUrl, fileData);
      }
      return fileUrl;
    } catch (error) {
      console.error("Error while uploading to bucket", error);
      throw new Error("Error while uploading to bucket", error);
    }
  };

  saveFileUrlToFirestore = async (collectionName, fileUrl, fileData) => {
    try {
      const collectionRef = collection(firestoreDb, collectionName);
      const unixTimeStamp = dateTimeUtils.getUnixTimeStamp();

      addDoc(collectionRef, { fileUrl, fileData, unixTimeStamp });
    } catch (error) {
      console.error("Error occured while saving url to firestore", error);
      throw new Error("Error occured while saving url to firestore", error);
    }
  };

  getCatalog = async (
    filter = "All",
    sort = "mostDownloads",
    pageSize = 20,
    pageNo = 1
  ) => {
    try {
      const collectionRef = collection(firestoreDb, "Catalog");

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
