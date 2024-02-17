import { firestoreDb } from "../../firebase";
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

class UserService {
  createUser = async (userData) => {
    try {
      const collectionRef = collection(firestoreDb, "Users");

      // check if the user already exist
      const queryString = query(
        collectionRef,
        where("email", "==", userData.email)
      );
      // get the document with given email
      const querySnap = await getDocs(queryString);

      let result = [];
      querySnap.forEach((item) => {
        result.push(item.data());
      });

      if (result.length === 0) {
        // add this user to firestore
        addDoc(collectionRef, {
          email: userData.email,
          displayName: userData.displayName,
          photoUrl: userData.photoURL ? userData.photoURL : "#default",
        });
      }
    } catch (error) {
      console.log("ERROR", error);
      throw new Error("Error while creating user in firestore", error);
    }
  };
}

export default new UserService();
