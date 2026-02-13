// function add(a,b){
//     console.log(a);
//     console.log(b);
// }
// add(4,5)

// function add(){
//     console.log(arguments)
//     console.log(arguments.length)
//     console.log(arguments[0]);
// }
// add(7,5,8,9)

// function add(a,b){
//     return a+b
// }
// const result = add(7,5)
// console.log(result);

// function add(...arr){
//     console.log(arr)
// }
// add(7,5,8,9)

// function add(...arr){
//     let sum = 0;
//     for(let i =0;i<arr.length;i++) {
//         sum += arr[i]
//     }
//     return sum
// }
// const result = add(7,5,8,9)
// console.log(result);

// function add(...arr){
//     let sum = arr.reduce((total,num)=>{
//         return total + num
//     },0)
//     return sum
// }
// const result = add(7,5,8,9)
// console.log(result);

// const add = (...arr ) => {
//     return arr.reduce((sum,num) => sum+num,0)
// }
// console.log(add(4,5,8));

const add = (...args) => {
    let sum = args.reduce((total,num)=>total+num,0)
    return sum

}
const result = add(7,9,8,2)
console.log(result);