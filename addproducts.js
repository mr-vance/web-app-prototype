// addproduct.js
document.addEventListener("DOMContentLoaded", function() {
    var investButton = document.querySelector(".button-round-primary");
  
    investButton.addEventListener("click", function(event) {
      event.preventDefault();
  
      // Get the product details from the product description page
      var productName = document.querySelector(".charity-detail-container h3").textContent;
      var productPrice = document.querySelector(".fund-detail .fund-content").textContent;
  
      // Create a new row in the cart table
      var tableBody = document.querySelector(".cart-section table tbody");
      var newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td class="">
          <button class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
          <span class="cartImage"><img src="assets/images/sthembiso.png" alt="image"></span>
        </td>
        <td data-column="Product Name"><strong>${productName}</strong></td>
        <td data-column="Price">${productPrice}</td>
        <td data-column="Quantity" class="count-input">
            <div>
               <a class="minus-btn" href="#"><i class="fa fa-minus"></i></a>
               <input class="quantity" type="text" value="1">
               <a class="plus-btn" href="#"><i class="fa fa-plus"></i></a>
            </div>
        </td>
        <td data-column="Sub Total"><strong>${productPrice}</strong></td>
      `;
  
      // Append the new row to the table
      tableBody.appendChild(newRow);
    });
  });
  