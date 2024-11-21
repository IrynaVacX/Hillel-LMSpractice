// VSCode : use "Live server" extension
import { fetchGet, closePopup, fetchPost } from "./services.js";

const openPopupButton = document.getElementById("openPopup");
const popupOverlay = document.getElementById("popupOverlay");
const cancelButton = document.getElementById("cancelButton");
const postForm = document.getElementById("postForm");

// Open/Close PopUp
openPopupButton.addEventListener("click", () => {
  popupOverlay.style.display = "flex";
});
popupOverlay.addEventListener("click", (e) => {
  if (e.target === popupOverlay) {
    closePopup();
  }
});
cancelButton.addEventListener("click", closePopup);

// POST new post
postForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchPost(e.target);
});

// GET the first 10 posts
fetchGet();
