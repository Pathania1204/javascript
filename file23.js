// numbers = [5,3,6,1] 
// numbers.forEach(()=>{})
// we use forEach to shorten the for loop
// numbers.forEach((number)=>{
//     console.log(number);
// })
// numbers.map((number)=>{
//     console.log(number);
// })
 

// numbers.map(()=>{})
// tranform the array or create a new array
// const newArray = numbers.map((number)=>{
//     return number+1
// })
// console.log(newArray);


// numbers.filter(()=>{})
// filter() is used to get all elements that match a condition
// const evenNumbers = numbers.filter((number)=>{
//     return number%2===0    //it will only print those with true condition
// })
// console.log(evenNumbers);


// numbers.find(()=>{})
// find() is used to get the first element that matches a condition
// const result = numbers.find((number)=>{
//     return number > 3
// })
// console.log(result);


// numbers.reduce(()=>{})
// // reduce() is used to combine all array elements into a single value.
// const result = numbers.reduce((sum,number)=>{
//     return sum+number
// },0)
// console.log(result);

//numbers.some(()=>{})
//return true or false if any one matches result is true no match then false
// const result = numbers.some((number)=>{
//     return number > 1
// })
// console.log(result);
// let marks = [78,50,90,20]
// const result  = marks.some((score)=>{
//     return score > 50
// })
// if(result)
//     console.log("Pass");
// else
//     console.log("Fail");


//numbers.every(()=>{})
//return true or false if all matches result is true not a single match then false
// const result = numbers.some((number)=>{
//     return number > 1
// })
// console.log(result);
// let marks = [78,50,90,20]
// const result  = marks.every((score)=>{
//     return score > 2
// })
// console.log(result);

let marks = [78,50,90,20]
const result  = marks.every((score)=>{
    return score > 50
})
if(result)
    console.log("Pass");
else
    console.log("Fail");
