function Product_Details() {
    //declare simple variables
    let product_name="HP Laptop";
    let product_price=80000;
    let product_qty=3;
    //Calculations
    let totalAmount=product_price*product_qty;
    let gstAmmount=totalAmount*0.05;
    let serviceTaxAmount=totalAmount*0.02;
    let finalPayAmount=totalAmount+gstAmmount+serviceTaxAmount;

    //Print Output
    console.log("ProductName: "+product_name);
    console.log("ProductPrice: "+product_price.toFixed(2));
    console.log("Qty: "+product_qty);
console.log("5% GST Amount: "+gstAmmount.toFixed(2));
    console.log("2% Service Tax Amount: "+serviceTaxAmount.toFixed(2));
    console.log("Final Payable Amount: "+finalPayAmount.toFixed(2));
}

//call the function
Product_Details();
