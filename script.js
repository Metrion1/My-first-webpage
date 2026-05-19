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

const checkRequired = element => element?.required && element?.value.trim() !== "";

const showError = (errorElementId, message) => {
   const errorElement = document.getElementById(errorElementId);
   if (errorElement) {
      errorElement.textContent = message;
   }
};


/*function checkRequired(element) {
   return element.required && element.value.trim() !== "";
}*/

document.addEventListener('DOMContentLoaded', function () {
//for contact form click event//
const contactForm = document.getElementById("contact-form");
if (contactForm) {
   contactForm.addEventListener("submit", function (event) {
      event.preventDefault();//prevents the webpage from reloading when the form is submitted.
      const name = document.getElementById("Name");
      const email = document.getElementById("Email");
      const message = document.getElementById("Message");


      const namevalue = name.value.trim();
      const emailvalue = email.value.trim();

      let isValid = true;

         if (!checkRequired(name)) {
            showError("name-error", "Name is required.");
            isValid = false;
         }

         if (!checkRequired(message)) {
            showError("message-error", "Message is required.");
            isValid = false;
         }

         if (!checkRequired(email)) {
            showError("email-error", "Email is required.");
            isValid = false;
         } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
            showError("email-error", "Please enter a valid email address.");
            isValid = false;
         }
         if (isValid) {
            //clear error messages
            showError("name-error", "");
            showError("email-error", "");
            showError("message-error", "");

            const subject = encodeURIComponent(`Contact Form Submission from ${namevalue}`);

            const bodyLines = [
               `Name: ${namevalue}`,
               `Email: ${emailvalue}`,
               "",
               `Message: ${message.value.trim()}`
            ];

            const body = encodeURIComponent(bodyLines.join("\r\n"));
            const recipientEmail = "your@email.com"; // Replace with your email address
            const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

            try {
               //open the user's default email client with the pre-filled email
               window.location.href = mailtoLink;

               //clear the form fields after attempting to open the email client
               name.value = "";
               email.value = "";
               message.value = "";

            } catch (error) {
                  console.error("Error opening email client:", error);
                  alert("An error occurred while trying to open your email client. Please try again.");
               }
   }
});
}
//console.log("Form submitted!", event);
   //************ /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ********//regex for email validation


   console.log("Hello from my About Me page!");

   //display nav in mobile view
   const burger = document.querySelector(".burger");

   if(burger) {
      burger.addEventListener("click", function () {
         const nav = document.querySelector("nav");
         nav.classList.toggle("open");
      });
   }

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
