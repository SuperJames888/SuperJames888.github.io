import { initializeApp } from "./node_modules/@firebase/app";
import { getDatabase } from "./node_modules/@firebase/database";
import { getAnalytics } from "./node_modules/@firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC6B7BmKFpAEOw_ffJjo9aTQN961KzD1O0",
  authDomain: "super-james-888-github-site.firebaseapp.com",
  databaseURL: "https://super-james-888-github-site-default-rtdb.firebaseio.com",
  projectId: "super-james-888-github-site",
  storageBucket: "super-james-888-github-site.appspot.com",
  messagingSenderId: "508751000584",
  appId: "1:508751000584:web:13b0695fae30862ede0dbd",
  measurementId: "G-39251VY1Y8"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export { database };
