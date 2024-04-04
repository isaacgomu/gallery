const mainImage = document.getElementById("mainimage");
const thumbnails = document.getElementById("thumbnails");

const gallery = [
  {
    url: "./assets/chillblowfish.jpg",
    alt: "A pufferfish, very puffed up, held in the hand of someone.",
  },
  {
    url: "./assets/chillblowfish2.jpg",
    alt: "A pufferfish, deflated, held in the hand of someone.",
  },
];

function createThumbnails() {
  gallery.forEach(function (image) {
    const img = document.createElement("img");
    img.src = image.url;
    img.alt = image.alt;
    thumbnails.appendChild(img);
    img.addEventListener("click", function () {
      createMainImage(image);
    });
  });
}

function createMainImage(image) {
  mainImage.innerHTML = "";
  const mainImageElement = document.createElement("img");

  mainImageElement.src = image.url;
  mainImageElement.alt = image.alt;

  mainImage.appendChild(mainImageElement);
}

createThumbnails();
createMainImage(gallery[0]);
