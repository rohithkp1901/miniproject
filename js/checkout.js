document.addEventListener("DOMContentLoaded", function () {
    const productDetails1 = JSON.parse(localStorage.getItem("selectedProduct")) || {};
    const productDetails2 = JSON.parse(localStorage.getItem("selectedProduct2")) || {};
    console.log(localStorage.getItem("selectedProduct"));
    console.log(localStorage.getItem("selectedProduct2"));

    const subtotal1 = productDetails1.subtotal || 0;
    const subtotal2 = productDetails2.subtotal || 0;
    const totalSubtotal = subtotal1 + subtotal2;

    const name1 = productDetails1.name || '';
    const name2 = productDetails2.name || '';

    document.getElementById("productSubtotal1").value = "₹" + subtotal1;
    document.getElementById("productSubtotal2").value = "₹" + subtotal2;
    document.getElementById("ct").value = "₹" + totalSubtotal;
    document.getElementById("productName1").value = name1;
    document.getElementById("productName2").value = name2;
});




$(document).ready(function(){
    $("#btn1").click(function(event) {
        event.preventDefault();
        var fn = $('#fn');
        var ln = $('#ln');
        var addr = $('#address');
        var c = $('#country');
        var ec = $('#ec');
        var pin = $('#pin');
        var city = $('#city');
        var num =$('#num');
        var mail = $('#mail');
        
        if (fn.val() == '') {
            fn.attr('placeholder', 'Enter First Name');
        } else if (ln.val() == '') 
        {
            ln.attr('placeholder', 'Enter Last Name');
        } 
        else if(c.val()=='')
        {
            ec.text("Select Country/Region");
        }
        else if(addr.val() == '')
        {
            addr.attr('placeholder', 'Enter Address');
        }
        else if(pin.val() == '')
        {
          pin.attr('placeholder', 'Enter Pincode/Zip' ) ; 
        }
        else if(city.val() =='')
        {
            city.attr('placeholder', 'Enter City/Town ' )  ;
        }
        else if(num.val()=='')
        {
            num.attr('placeholder', 'Enter Phone Number');
        }
        else if(mail.val()=='')
        {
            mail.attr('placeholder', 'Enter Email');
        }
        else
        {   
            $('#order').text('Order Placed');
            setTimeout(function(){
                $('#form').submit();
            },3000); 
            
        }
    });
});

