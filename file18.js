// const products = ["product1","product2","product3"]
const products = [
    {id:1,name:"Laptop",Discription: "This is Laptop", Price:30000},
    {id:2,name:"Desktop",Desciption:"This is a Desktop",Price:20000},
    {id:3,name:"Headphone",Desciption:"This is Headphone",Price:8000}

];
let cart = []
// products.forEach((a)=>console.log(a));
products.forEach((product) => {
    // product.quantity = 1
    // product.total = product.Price * product.quantity
    // cart.push(product);
    const obj = {
        ...product,
        quantity: 1
}
    cart = [...cart,obj]
});
console.log(cart)
