const container = document.querySelector(".container");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

//display new button called cuisine
const cuisineBtn = document.createElement("cuisineBtn");

cuisineBtn.className = "cuisine-btn";
cuisineBtn.innerHTML = "random select cuisine";
cuisineBtn.style.display = "none";

container.appendChild(cuisineBtn);

const cuisines = [
  "Indian",
  "Italian",
  "Spanish",
  "Japanese",
  "Chinese",
  "Thai",
  "American",
  "Greek",
  "Mexico",
  "Vietnamese",
];

yesBtn.addEventListener("click", () => {
  //text and image change after yes button is clciked
  question.innerHTML = "Yay. . . take me for the dinner!!!";
  gif.src = "hungrytweety.png";

  //hides yes and no button after yes button is clicked
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  cuisineBtn.style.display = "block";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * 400) + 1;
  const randomY = Math.floor(Math.random() * 400) + 1;

  noBtn.style.right = randomX + "px";
  noBtn.style.bottom = randomY + "px";
});

cuisineBtn.addEventListener("click", () => {
  const randomCuisine = Math.floor(Math.random() * cuisines.length);
  const selectedCuisine = cuisines[randomCuisine];

  //   alert(`Let's eat ${selectedCuisine} food!!!`);

  cuisineBtn.innerHTML = `Let's eat ${selectedCuisine} food!!!`;
});
