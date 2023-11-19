 changeImage =(thumbnail) => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image');
    thumbnails.forEach(thumb => thumb.classList.remove('thumbnail-selected'));
    thumbnail.classList.add('thumbnail-selected');
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
    
}

document.getElementById("prod-addtocart").addEventListener("click", function () {
    const productName = "Dell Laptop";
    const productPrice = 45799.00;
    const productQuantity = parseInt(document.getElementById("quantity").value);
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

        
    document.getElementById("cartb").addEventListener("click", function () {
    const productName = "MSI Laptop";
    const productPrice = 45799.00;
    const productQuantity = 1;
    const productImage = "https://m.media-amazon.com/images/I/415bB9NY0LL._AC_SR320,320_.jpg"; 

    const subtotalPrice = productPrice * productQuantity;

    const productDetails = {
        name: productName,
        price: productPrice,
        quantity: productQuantity,
        subtotal: subtotalPrice,
        image: productImage,
    };
    localStorage.setItem("selectedProduct2", JSON.stringify(productDetails));

    window.location.href = "cart.html";//going to cart.html
});

document.getElementById("quantity").addEventListener("change", function () {
    const productDetails = JSON.parse(localStorage.getItem("selectedProduct2"));//retrive data

    productDetails.quantity = parseInt(this.value);

    productDetails.subtotal = productDetails.price * productDetails.quantity;

    localStorage.setItem("selectedProduct2", JSON.stringify(productDetails));
});

document.addEventListener("DOMContentLoaded", function () {
    const productDetails = JSON.parse(localStorage.getItem("selectedProduct2"));

    if (productDetails) {
        document.getElementById("quantity").value = productDetails.quantity;

        document.getElementById("product-image").src = productDetails.image;
    }
});

// amount field 
document.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.getElementById("quantity");
    const price = parseFloat(document.getElementById("p-price").innerText.replace(/,/g, '')); // Extracting price without commas

    // Function to update the amount field based on quantity
    function updateAmount() {
        const quantity = parseInt(quantityInput.value);
        const amount = price * quantity;
        document.getElementById("amount").innerText = "₹" + amount.toLocaleString(); // Display amount with commas
    }

    // Initial update when the page loads
    updateAmount();

    // Event listener for quantity change on input
    quantityInput.addEventListener("input", updateAmount);
});



