const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, soy excited! <br> See you on the 8th :)";
  gif.src =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDc4c2ZiaGF1Yzdjejdzb2plMXpsa3VuM3Q5bGt3Y2F4OGxobThydSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/fBMfsjAl7l7RYGJSpk/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
