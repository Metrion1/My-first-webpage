document.addEventListener('DOMContentLoaded', function() {
   console.log("Hello from my About Me page!");
   
   
document.getElementById('calculate').addEventListener('click', function() {
   
   //get values from the input fields
   let inputNum1 = document.getElementById('num1').value;
   console.log("inputNum1", inputNum1);
   let num1 = Number(inputNum1.value);

   let num2 = Number(document.getElementById('num2').value);
   let sum = num1 + num2;

   let results = document.getElementById('result')
   console.log("results", results);
   results.innerHTML = "sum: " + sum;

   console.log("sum: ", sum);
});
});