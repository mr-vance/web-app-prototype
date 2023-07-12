// updatecart.js
document.addEventListener("DOMContentLoaded", function() {
    var minusButtons = document.querySelectorAll(".minus-btn");
    var plusButtons = document.querySelectorAll(".plus-btn");
    var quantityInputs = document.querySelectorAll(".quantity");
    var subTotalElements = document.querySelectorAll(".cart-section table tbody td[data-column='Sub Total'] strong");
    var grandTotalElement = document.querySelector(".totalAmountArea .grandTotal");
  
    // Update subtotals and grand total
    function updateTotals() {
      var subTotal = 0;
  
      for (var i = 0; i < quantityInputs.length; i++) {
        var quantity = parseInt(quantityInputs[i].value);
        var price = parseFloat(subTotalElements[i].textContent.replace("$", ""));
        var subTotalValue = quantity * price;
  
        subTotalElements[i].textContent = "$ " + subTotalValue.toFixed(2);
        subTotal += subTotalValue;
      }
  
      var vat = subTotal * 0.02;
      var grandTotal = subTotal + vat;
  
      grandTotalElement.textContent = "$ " + grandTotal.toFixed(2);
    }
  
    // Event listeners for minus buttons
    for (var i = 0; i < minusButtons.length; i++) {
      minusButtons[i].addEventListener("click", function(event) {
        event.preventDefault();
        var input = this.nextElementSibling;
        var value = parseInt(input.value);
  
        if (value > 1) {
          input.value = value - 1;
          updateTotals();
        }
      });
    }
  
    // Event listeners for plus buttons
    for (var i = 0; i < plusButtons.length; i++) {
      plusButtons[i].addEventListener("click", function(event) {
        event.preventDefault();
        var input = this.previousElementSibling;
        var value = parseInt(input.value);
  
        input.value = value + 1;
        updateTotals();
      });
    }
  
    // Event listener for quantity inputs
    for (var i = 0; i < quantityInputs.length; i++) {
      quantityInputs[i].addEventListener("change", function() {
        updateTotals();
      });
    }
  });
  