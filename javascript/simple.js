const body = $("body");
const button = $("#change-color");
const colorText = $("#color");

//array of colors 
const colorsArray = [
  '#F5D5AE',
  '#EF9A53',
  '#C539B4',
  '#852999'
];

const getRandomNumber = function() {
  return Math.floor(Math.random() * colorsArray.length);
}

//functionality
button.click(() => {
  const randomNumber = getRandomNumber();
  body.css('background-color', colorsArray[randomNumber]);
  colorText.text(colorsArray[randomNumber]);
})
