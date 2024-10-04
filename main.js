document.addEventListener("DOMContentLoaded", () => {
    getRandomImage();
});

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * 9) + 1;
    const image = document.createElement('img');
    image.src = './memes/' + randomIndex + ".jpg";
    image.style.width = '484px';
    document.body.appendChild(image);
}