let instructions = document.getElementById("instructions");

const nextBtn = document.getElementById("next-id");

const yesButton = document.getElementById("yes-id");

const noButton = document.getElementById("no-id");

let revealImg = document.getElementById("reveal-img");

const ringImg = "https://iili.io/sBlsrg.md.png";

const coinImg = "https://iili.io/sBY8ep.png";

const keyImg = "https://iili.io/sBlI5v.md.png";

const watchImg = "https://iili.io/sB0M3g.md.png";

const questions = [
  "Is the object you have in mind either the watch or the coin?",
  "Is the object you have in mind either the key or the watch?",
];

let theObjects = {
  ring: 0,
  coin: 3,
  key: 5,
  watch: 6,
};

const yesPoints = [1, 2, 4];

let questionCounter = 0;

let secretNum = 0;

let toldTruth = "";

let thoughtOfObject = "";

function hideYesNoButtonsAndContinue() {
  yesButton.style.display = "none";
  noButton.style.display = "none";
  nextBtn.style.display = "inline-block";
  //secretNum += yesPoints[questionCounter];
  instructions.innerText =
    "You're not giving up your thoughts easily. Your body language is subtle. I can't tell yet if you're being truthful. So let's try it again. I will ask you another question. If you answered truthfully the first time, then please answer this next question truthfully as well. If you lied the first time, then please lie again. Ready?";
}

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

function getValues() {
  let values = Object.values(theObjects);
  let hasValue = values.includes(secretNum);
  console.log(`Secret Num: ${secretNum}`);
  console.log(values);
  console.log(hasValue);
  if (hasValue == true) {
    toldTruth = "You told the truth";
    thoughtOfObject = getKeyByValue(theObjects, secretNum);
  } else {
    toldTruth = "You lied";
    let subtractedSecretNum = 7 - secretNum;
    console.log(`Subtracted Secret Num: ${subtractedSecretNum}`);
    thoughtOfObject = getKeyByValue(theObjects, subtractedSecretNum);
  }
}
function theReveal() {
  getValues();
  yesButton.style.display = "none";
  noButton.style.display = "none";
  nextBtn.style.display = "none";
  instructions.innerText = `${toldTruth} and you thought of the ${thoughtOfObject}.`;
  if (thoughtOfObject == "ring") {
    revealImg.src = ringImg;
  } else if (thoughtOfObject == "coin") {
    revealImg.src = coinImg;
  } else if (thoughtOfObject == "key") {
    revealImg.src = keyImg;
  } else {
    revealImg.src = watchImg;
  }
  revealImg.style.display = "block";
}

function yesBtn() {
  if (questionCounter === 0) {
    hideYesNoButtonsAndContinue();
    secretNum = secretNum + yesPoints[questionCounter];
    console.log(`Secret Num: ${secretNum}`);
    questionCounter++;
  } else if (questionCounter === 1) {
    secretNum = secretNum + yesPoints[questionCounter];
    instructions.innerText = questions[1];
    console.log(`Secret Num: ${secretNum}`);
    questionCounter++;
  } else {
    secretNum = secretNum + yesPoints[questionCounter];
    theReveal();
    console.log(`Secret Num: ${secretNum}`);
  }
}

function noBtn() {
  if (questionCounter === 0) {
    hideYesNoButtonsAndContinue();
    console.log(`Secret Num: ${secretNum}`);
    questionCounter++;
  } else if (questionCounter === 1) {
    instructions.innerText = questions[1];
    console.log(`Secret Num: ${secretNum}`);
    questionCounter++;
  } else {
    theReveal();
    console.log(`Secret Num: ${secretNum}`);
  }
}

function next() {
  instructions.innerText = questions[0];
  //questionCounter++;
  yesButton.style.display = "inline-block";
  noButton.style.display = "inline-block";
  nextBtn.style.display = "none";
}
