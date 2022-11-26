// Code your solutions in this file

const arrayNames = ["Guadalupe", "Ollie", "Aki"];
const messages = [];
function writeCards(arrayNames){
  for(let counter = 0; counter < arrayNames.length; counter = counter+1){
    console.log(messages.push(`Thank you, ${arrayNames[counter]}, for the wonderful surprise gift!`))
  }
  return messages;
}

function countDown(){
    let number = 10;
    while(number > -1){
        console.log(number);  
        number = number-1;
    }
}