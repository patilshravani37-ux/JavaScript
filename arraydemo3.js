//Perform the summation of all the numbers present inside the array

const numbers=[10,20,30,40,50];

const sum=numbers.reduce((result,num)=>{
    return result+num;
},0);

console.log(sum);

// Count the occurances of particular element inside the array

const data=['Samsung','Apple','Vivo','Oppo','Samsung','Apple','Vivo','Apple'];

const brandCount=data.reduce((result,brand)=>{
    //If brand exists in result, increment; otherwise set to 1
    result[brand]=(result[brand]||0)+1;
    return result;
},{});

console.log(brandCount);

// Create a flat array from the nested arrays

const nested=[[1,2],[3,4],[5,6]];

const flatArray=nested.reduce((result,subArray)=>{
    return result.concat(subArray);
},[]);

console.log(flatArray);

// Find maximum value from the array

const scores=[45,67,55,94,23,39]

const maxScore=scores.reduce((result,score)=>{
    return score>result?score:result;
    //67>94?67:94;
},scores[0]);//start with first element
console.log(maxScore);


