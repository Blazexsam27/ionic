import { getDoc, getDocs, query } from "firebase/firestore";
import { firestoreDb, firebaseApp } from "../../firebase";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import userService from "../user/user.service";
import cookiesUtils from "@/utils/CookiesUtils";

class AuthService {
  provider = new GoogleAuthProvider();
  auth = getAuth(firebaseApp);

  signInUser = async () => {
    return signInWithPopup(this.auth, this.provider)
      .then((result) => {
        const credentials = GoogleAuthProvider.credentialFromResult(result);
        const token = credentials.accessToken;

        // Signedin user info
        const user = result.user;
        console.log("Creds", user);

        // save the user information in database if not already saved.
        return user;
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        // The email of the user's account used.
        const email = err.customData.email;
        throw new Error(
          "Error while initiating authentication",
          errorCode,
          errorMessage,
          email
        );
      });
  };

  logout = async () => {
    try {
      localStorage.clear();
      cookiesUtils.deleteCookie("accessToken");
      return { response: "success" };
    } catch (error) {
      throw new Error("Error while logout", error);
    }
  };
}

export default new AuthService();
