import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

export class Firebase {
  constructor() {
    this.firebaseConfig = {
      apiKey: "AIzaSyCV86ra9pM3LFir0-ICzFL_tEpBbhl2_Rc",
      authDomain: "todayfriday-d1f37.firebaseapp.com",
      projectId: "todayfriday-d1f37",
      storageBucket: "todayfriday-d1f37.appspot.com",
      messagingSenderId: "40416185860",
      appId: "1:40416185860:web:0a847bcd2ec1e9dd836f51",
      measurementId: "G-2MFQGL4LWT",
    };

    this.app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(this.app);
  }

  async login(email, password) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async register(email, password) {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }

  async update(displayName) {
    return await updateProfile(this.auth.currentUser, {
      displayName,
    });
  }

  async logout() {
    return await signOut(this.auth);
  }
}
