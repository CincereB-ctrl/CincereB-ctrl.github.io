/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: 
      Date:   

      Filename: project02-04.js
 */

      const CHICKEN_COST = 10.95;
      const HALIBUT_COST = 13.95;
      const BURGER_COST = 9.95;
      const SALMON_COST = 18.95;
      const SALAD_COST = 7.95;
      const SALEX_TAX = 0.07

   

// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

   document.getElementById("chicken").addEventListener("click", calcTotal)
   document.getElementById("halibut").addEventListener("click", calcTotal)
   document.getElementById("burger").addEventListener("click", calcTotal)
   document.getElementById("salmon").addEventListener("click", calcTotal)
   document.getElementById("salad").addEventListener("click", calcTotal)

 function calcTotal() {
   let cost = 0;
   let buyChicken = document.getElementById("chicken").checked
   let buyHalibut = document.getElementById("halibut").checked
   let buyBurger = document.getElementById("burger").checked
   let buySalmon = document.getElementById("salmon").checked
   let buySalad = document.getElementById("salad").checked

   cost += buyChicken ? CHICKEN_COST : 0;
   cost += buyHalibut ? HALIBUT_COST : 0;
   cost += buyBurger ? BURGER_COST : 0;
   cost += buySalmon ? SALMON_COST : 0;
   cost += buySalad ? SALAD_COST : 0;

   let tax = 0;
   let totalCost = 0;
   

   document.getElementById("foodTotal").innerHTML = formatCurrency(cost);
   tax = cost * SALEX_TAX;
   document.getElementById("foodTax").innerHTML = formatCurrency(tax);
   totalCost = cost + tax;
   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);

 }