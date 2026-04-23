function addNumbers(num1, num2) {
   console.log(num1, num2);
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
      attempts++

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
};

const calculateTip = (billAmount, tipPercentage) => {
   if (typeof billAmount !== "number" ||
      typeof tipPercentage !== "number" ||
      billAmount < 0 ||
      tipPercentage < 0) {
      return "invalid input. Please enter numbers for bill amount and tip percentage.";
   }

   return (billAmount + (billAmount * (tipPercentage / 100))).toFixed(2);
};

document.addEventListener('DOMContentLoaded', function () {
   console.log("Hello from my About Me page!");

   //LOADS GUESS NUMBER GAME.
   //loadGuessNumber();
   let results = document.getElementById('results')
   let calButton = document.getElementById('calculate');
   let tipForm = document.getElementById("tip-form");

   if (tipForm) {
      tipForm.addEventListener("submit", (event) => {
         // to prevent the page from reloading.
         event.preventDefault();

         let billAmount = Number(document.getElementById("billAmount").value);
         let TipPercentage = Number(document.getElementById("TipPercentage").value);
         results.innerHTML = calculateTip(billAmount, TipPercentage);
      });
   }

   if (calButton) {
      calButton.addEventListener('click', function (event) {
         console.log(event);
         //get values from the input fields
         let inputNum1 = document.getElementById('num1');
         console.log("inputNum1", inputNum1.value);
         let num1 = Number(inputNum1.value);

         let num2 = Number(document.getElementById('num2').value);
         let sum = addNumbers(num1, num2);


         console.log("results", results);
         results.innerHTML = "sum: " + sum;

         console.log("sum: ", sum);
      });
   }
});
