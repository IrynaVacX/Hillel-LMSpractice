promptButton.addEventListener("click", () => {
  const link = prompt("Enter a link : ");
  if (link) {
    localStorage.setItem("redirectLink", link);
  }
});

redirectionButton.addEventListener("click", () => {
  const savedLink = localStorage.getItem("redirectLink");
  if (savedLink) {
    window.location.href = savedLink;
  }
  else {
    alert("no link");
  }
});
