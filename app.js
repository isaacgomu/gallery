const mainImage = document.getElementById("mainImage");
const thumbnails = document.getElementById("thumbnails");
const fwrd = document.getElementById("fwrd");
const elements = document.querySelectorAll("input, button, image, textarea, a");
const gallery = [
  {
    url: "./assets/chill blowfish.jpg",
    alt: "A pufferfish, very puffed up, held in the hand of someone.",
  },
  {
    url: "./assets/chill blowfish2.jpg",
    alt: "A pufferfish, deflated, held in the hand of someone.",
  },
  {
    url: "./assets/chill blowfish3.jpg",
    alt: "A puffed up pufferfish with its face towards the camera, giving a surprised expression.",
  },
  {
    url: "./assets/chill blowfish4.jpg",
    alt: "A spiky puffed up pufferfish swimming in the ocean.",
  },
];

function createThumbnails() {
  gallery.forEach(function (image, index) {
    const img = document.createElement("img");
    img.src = image.url;
    img.alt = image.alt;
    img.tabIndex = 0;
    thumbnails.appendChild(img);
    img.addEventListener("click", function () {
      indexNumber = index;
      createMainImage(image, index);
      console.log("Thumbnail image selected, image switched.");
      console.log(indexNumber);
    });
    img.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        indexNumber = index;
        createMainImage(image, index);
        console.log("Thumbnail image selected, image switched.");
        console.log(indexNumber);
      }
    });
  });
}

function createMainImage(image, index) {
  mainImage.innerHTML = "";
  const mainImageElement = document.createElement("img");

  mainImageElement.src = image.url;
  mainImageElement.alt = image.alt;

  mainImage.appendChild(mainImageElement);

  if (gallery.indexOf(image) == gallery.length - 1) {
    fwrd.disabled = true;
  } else {
    fwrd.disabled = false;
  }

  if (gallery.indexOf(image) === 0) {
    bwrd.disabled = true;
  } else {
    bwrd.disabled = false;
  }
}

let indexNumber = 0;

function imagebutton(index) {
  indexNumber += index;

  if (indexNumber >= gallery.length) indexNumber = 0;
  if (indexNumber < 0) indexNumber = gallery.length - 1;
  console.log(indexNumber);
  createMainImage(gallery[indexNumber]);
}
fwrd.addEventListener("click", function () {
  imagebutton(1);
  console.log("Right button clicked, image switched.");
});

bwrd.addEventListener("click", function () {
  imagebutton(-1);
  console.log("Left button clicked, image switched.");
});

document.addEventListener("keydown", function arrowkeyright(event) {
  if (event.key == "ArrowRight" && indexNumber < gallery.length - 1) {
    imagebutton(1);
    console.log("Right arrow key pressed, image switched.");
  }
});

document.addEventListener("keydown", function arrowkeyleft(event) {
  if (event.key == "ArrowLeft" && indexNumber > 0) {
    imagebutton(-1);
    console.log("Left arrow key pressed, image switched.");
  }
});

createThumbnails();
createMainImage(gallery[0]);
