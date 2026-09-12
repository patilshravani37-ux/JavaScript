//Create one array of numbers with 5 elements.
//  Perform the multiplication
const num=[1,2,3,4,5];
const m=num.reduce((result,n) => {
    return result*n;
},1);
console.log("Multiplication=",m);

//this is given array calculate total revenue of all orders
const orders=[
        {product:'Laptop',price:2000,quantity:2},
        {product:'Mouse',price:200,quantity:5},
        {product:'Keyboard',price:75,quantity:3},
   ];
  
const totalRevenue=orders.reduce((result,ord) => {
    return result+(ord.price*ord.quantity);

},0);
console.log("Total Revenue=",totalRevenue);
