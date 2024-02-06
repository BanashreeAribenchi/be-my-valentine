const container = document.querySelector(".container");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay. . . now take me to the dinner!!!";
  gif.src = "hungrytweety.png";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * 400) + 1;
  const randomY = Math.floor(Math.random() * 400) + 1;

  noBtn.style.right = randomX + "px";
  noBtn.style.bottom = randomY + "px";

  //   const { width: containerWidth, height: containerHeight } =
  //     container.getBoundingClientRect();
  //   const { width: noBtnWidth, height: noBtnHeight } =
  //     noBtn.getBoundingClientRect();
  //   const i = Math.floor(Math.random() * 300) + 1;
  //   const j = Math.floor(Math.random() * 300) + 1;

  //   noBtn.style.right = i + "px";
  //   noBtn.style.bottom = j + "px";

  //   let i = Math.abs(Math.floor(Math.random() * window.innerWidth - 55));
  //   let j = Math.abs(Math.floor(Math.random() * window.innerHeight - 21));
  //   console.log("here", i, j, noBtn.style.left, noBtn.style.top);
  //   noBtn.style.left = i + "px";
  //   noBtn.style.top = j + "px";
});
