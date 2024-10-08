 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey:"AIzaSyBr36uGN7tGmFqPpZsq7JVpE91uvJM1y7s",
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
