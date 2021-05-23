const body = document.querySelector("body");
const myName = document.querySelector("#name");
var rand;

const changeColor = () => {
  const hue_percentage = Math.floor(Math.random() * 360);
  body.style.filter = `hue-rotate(${hue_percentage}deg)`;
};

const clickHandler = () => {
  myName.removeEventListener("click", clickHandler);
  rand = animate_classes[Math.floor(Math.random() * animate_classes.length)];
  myName.classList.add(rand);
  changeColor();
  myName.addEventListener("animationend", () => {
    myName.classList.remove(rand);
    myName.addEventListener("click", clickHandler);
  });
};

const animate_classes = [
  "animate__bounce",
  "animate__flash",
  "animate__pulse",
  "animate__rubberBand",
  "animate__shakeX",
  "animate__shakeY",
  "animate__headShake",
  "animate__swing",
  "animate__tada",
  "animate__wobble",
  "animate__jello",
  "animate__heartBeat",
];

changeColor();
rand = animate_classes[Math.floor(Math.random() * animate_classes.length)];
myName.classList.add(rand);
myName.addEventListener("animationend", () => {
  myName.classList.remove(rand);
});

myName.addEventListener("click", clickHandler);
