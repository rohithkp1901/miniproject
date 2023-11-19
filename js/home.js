    //    home  
document.getElementById("h-addtocart").addEventListener("click", function () {
    const productName = "Dell Laptop";
    const productPrice = 45799.00;
    const productQuantity = 1;
    const productImage = "https://m.media-amazon.com/images/I/51jUcRK69ML._SL1080_.jpg"; 
    
    const subtotalPrice = productPrice * productQuantity;
    
    const productDetails = {
        name: productName,
        price: productPrice,
        quantity: productQuantity,
        subtotal: subtotalPrice,
        image: productImage,
    };
    localStorage.setItem("selectedProduct", JSON.stringify(productDetails));
    
    window.location.href = "cart.html";//going to cart.html
    });
    
    document.getElementById("quantity").addEventListener("change", function () {
    const productDetails = JSON.parse(localStorage.getItem("selectedProduct"));//retrive data
    
    productDetails.quantity = parseInt(this.value);
    
    productDetails.subtotal = productDetails.price * productDetails.quantity;
    
    localStorage.setItem("selectedProduct", JSON.stringify(productDetails));
    });
    
    document.addEventListener("DOMContentLoaded", function () {
    const productDetails = JSON.parse(localStorage.getItem("selectedProduct"));
    
    if (productDetails) {
        document.getElementById("quantity").value = productDetails.quantity;
    
        document.getElementById("product-image").src = productDetails.image;
    }
    });

    function gotoprod() {
        window.location.href = 'product.html';
      }
