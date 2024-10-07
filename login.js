import { database, ref, get, child } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";
import { database } from './firebaseConfig.js';

document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const password = document.getElementById('password').value;

  try {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, `passwords`));

    if (snapshot.exists()) {
      const passwords = snapshot.val();
      let validPassword = false;
      let redirectUrl = "";

      for (const game in passwords) {
        if (passwords[game] === password) {
          validPassword = true;
          redirectUrl = `${game}.html`; // Assuming each game has its own HTML file
          break;
        }
      }

      if (validPassword) {
        window.location.href = redirectUrl;
      } else {
        alert("Invalid password. Please try again.");
      }
    } else {
      alert("No passwords found in the database.");
    }
  } catch (error) {
    console.error("Error accessing database:", error);
    alert("An error occurred. Please try again later.");
  }
});
