function addNumbers(num1, num2) {
   return num1 + num2;
}

function loadGuessNumber() {
   //Generate a number between 1 and 10
   let randomNumber = Math.floor(Math.random() * 10) + 1;
   console.log("Random Number:", randomNumber);

   let attempts = 0;
   // initializing the undefined guess variable
   let guess;
   
   let sum = addNumbers(3, 2);
   console.log('Sum at loadGuessNumner', sum);
   while (guess !== randomNumber) {

      //Prompting a user for a number
      guess = Number(prompt("Guess a number between 1 and 10:"))

      //incriment the attemps counter
      attempts ++

      //check if the guess is correct
      if (guess > randomNumber) {
         console.log("Too high! try again.");
      }
      else if (guess < randomNumber) {
         console.log("Too low! Try again.");
      }
      else {
         console.log(`Congratulations! You guessed the number in ${attempts} attempts. The number was ${randomNumber}.`)
      }
   }
}

document.addEventListener('DOMContentLoaded', function() {
   console.log("Hello from my About Me page!");

   //LOADS GUESS NUMBER GAME.
   //loadGuessNumber();

   let calButton = document.getElementById('calculate');

   if (calButton) {
      calButton.addEventListener('click', function(){
         //get values from the input fields
         let inputNum1 = document.getElementById('num1');
         console.log("inputNum1", inputNum1);
         let num1 = Number(inputNum1.value);

         let num2 = Number(document.getElementById('num2').value);
         let sum = addNumbers(num1, num2);

         let results = document.getElementById('result')
         console.log("results", results);
         results.innerHTML = "sum: " + sum;

         console.log("sum: ", sum);
      });
   }   
});
