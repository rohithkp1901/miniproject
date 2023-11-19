document.addEventListener("DOMContentLoaded", function () {
    initializeProduct("selectedProduct", "quantity", "productName", "productPrice", "subtotalPrice", "productImage", "removeButton");
    initializeProduct("selectedProduct2", "quantity2", "productName2", "productPrice2", "subtotalPrice2", "productImage2", "removeButton2");
    calculateTotalSubtotal();

    function initializeProduct(storageKey, quantityId, nameId, priceId, subtotalId, imageId, removeButtonId) {
        const productDetails = JSON.parse(localStorage.getItem(storageKey));
        if (productDetails) {
            document.getElementById(quantityId).value = productDetails.quantity;
            document.getElementById(nameId).value = productDetails.name;
            document.getElementById(priceId).value = "₹" + productDetails.price;
            document.getElementById(subtotalId).value = "₹" + productDetails.subtotal;
            const productImage = document.getElementById(imageId);
            productImage.src = productDetails.image;
            productImage.alt = productDetails.name + " Image";
            productImage.width=80;
            productImage.height=80;
            const removeButton = document.getElementById(removeButtonId);
            removeButton.addEventListener("click", function () {
                localStorage.removeItem(storageKey);
                
                document.getElementById(quantityId).remove();
                document.getElementById(nameId).remove();
                document.getElementById(priceId).remove();
                document.getElementById(subtotalId).remove();
                productImage.remove();
                removeButton.remove();
                calculateTotalSubtotal();
            });
        }

        document.getElementById(quantityId).addEventListener("input", function () {
            productDetails.quantity = parseInt(this.value);
            productDetails.subtotal = productDetails.price * productDetails.quantity;
            localStorage.setItem(storageKey, JSON.stringify(productDetails));
            document.getElementById(subtotalId).value = "₹" + productDetails.subtotal;
            calculateTotalSubtotal();
        });
    }
});

function calculateTotalSubtotal() {
    const productDetails1 = JSON.parse(localStorage.getItem("selectedProduct"));
    const productDetails2 = JSON.parse(localStorage.getItem("selectedProduct2"));

    const subt1 = productDetails1 ? productDetails1.subtotal : 0;
    const subt2 = productDetails2 ? productDetails2.subtotal : 0;

    const totalSubtotal = subt1 + subt2;
    document.getElementById("st").textContent = "₹" + totalSubtotal;
    document.getElementById("t").textContent = "₹" + totalSubtotal;
}

function gotocheckout() {
    const productDetails1 = JSON.parse(localStorage.getItem("selectedProduct"));
    const productDetails2 = JSON.parse(localStorage.getItem("selectedProduct2"));

    const name1 = productDetails1 ? productDetails1.name : '';
    const name2 = productDetails2 ? productDetails2.name : '';

    const subt1 = productDetails1 ? productDetails1.subtotal : 0;
    const subt2 = productDetails2 ? productDetails2.subtotal : 0;

    const totalSubtotal = subt1 + subt2;

    window.location.href = "checkout.html";
}
