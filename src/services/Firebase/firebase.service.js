import firebaseDb from "../../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  collection,
  addDoc,
  getDocs,
  where,
  startAfter,
  orderBy,
  limit,
  endBefore,
  query,
  offset,
} from "firebase/firestore";
import dateTimeUtils from "@/utils/DateTimeUtils";

class FirebaseService {
  uploadToBucket = async (type = "website_assets", file, fileData) => {
    try {
      const date = dateTimeUtils.getUnixTimeStamp();
      const storage = getStorage();
      const storageRef = ref(storage, `${date}_${file.name}`);

      // uploading logic
      const response = await uploadBytes(storageRef, file);
      const fileUrl = await getDownloadURL(response.url);

      if (type === "website_assets") {
        this.saveFileUrlToFirestore("WebsiteAssets", fileUrl, fileData);
      }
      return fileUrl;
    } catch (error) {
      throw new Error("Error while uploading to bucket", error);
    }
  };

  saveFileUrlToFirestore = async (collectionName, fileUrl, fileData) => {
    try {
      const collectionRef = collection(firebaseDb, collectionName);
      const unixTimeStamp = dateTimeUtils.getUnixTimeStamp();

      addDoc(collectionRef, { fileUrl, fileData, unixTimeStamp });
    } catch (error) {
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
      const collectionRef = collection(firebaseDb, "Catalog");

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
        offset(startIndex)
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
      throw new Error("Error occured while retreiving catalog", error);
    }
  };
}

export default new FirebaseService();
