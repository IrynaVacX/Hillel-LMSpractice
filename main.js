document.addEventListener("DOMContentLoaded", () => {
  const buttonsContainer = document.getElementById("container");
  buttonsContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON") {
      alert(e.target.name);
    }
  });
});
