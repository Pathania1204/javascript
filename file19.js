const products = [
    {id:1,name:"Laptop",Discription: "This is Laptop", Price:30000},
    {id:2,name:"Desktop",Desciption:"This is a Desktop",Price:20000},
    {id:3,name:"Headphone",Desciption:"This is Headphone",Price:8000}

];
// let cart = [];
// products.map((product)=>{
//     const obj = {
//         ...product,
//         quantity: 1,  
//     };
//    cart = [...cart,obj]
// });
// console.log(cart);


// const cart = products.map((product)=>{
//     const obj = {
//         ...product,
//         quantity: 1,  
//     };
//    return obj
// });
// console.log(cart);


products.map((product)=>{
    const obj = {
        ...product,
        quantity: 1,  
    };
   console.log(obj);
});
// console.log(cart);