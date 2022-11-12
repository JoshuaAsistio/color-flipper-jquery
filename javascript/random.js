const body = $("body");
const button = $("#change-color");
const colorText = $("#color");

//array of hex value characters 
const hexValueChars = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];

const getRandomNumber = function() {
  return Math.floor(Math.random() * hexValueChars.length);
}

//functionality
button.click(() => {
  let hexValue = '#';
  
  for(let i = 0; i <= 5; i++) {
    const randomNumber = getRandomNumber();
    hexValue += hexValueChars[randomNumber];
  }
  
  body.css('background-color', hexValue);
  colorText.text(hexValue);
})
