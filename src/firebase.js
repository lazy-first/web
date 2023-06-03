import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB0_RRqxUcjYxG9yQTdH1eXyLCw0JxIJRE",
    authDomain: "project-e846c.firebaseapp.com",
    projectId: "project-e846c",
    storageBucket: "project-e846c.appspot.com",
    messagingSenderId: "353971026226",
    appId: "1:353971026226:web:26fca71903b309447bff2b",
    measurementId: "G-VCRRPYS4LS"
  };

  export const app = initializeApp(firebaseConfig)
  // export const storage = getStorage(a)