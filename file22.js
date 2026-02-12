const products = [{
    id:1,
    name:"Product 1",
    Discription: "This is Discription", 
    price:30000,
    category:"Laptop"
},{
    id:2,
    name:"Product 2",
    Desciption:"This is a Discription",
    price:20000,
    category:"Desktop"
},{
    id:3,
    name:"Product 3",
    Desciption:"This is Discription",
    price:8000,
    category:"Laptop"
},{
    id:4,
    name:"Product 4",
    Desciption:"This is Discription",
    price:9000,
    category:"Laptop"
},{
    id:5,
    name:"Product 5",
    Desciption:"This is Discription",
    price:11000,
    category:"Desktop"
},{
    id:6,
    name:"Product 6",
    Desciption:"This is Discription",
    price:6000,
    category:"Laptop"
},
];
const cart = []
function addToCart(productId){
    const product = products.find((product) => product.id === productId)
    cart.push({...product,quantity:1})
    // console.log(product);
}
function increment(productId) {
    const item = cart.find(product => product.id === productId)
    item.quantity++
}
function decrement(productId){
    const item = cart.find(product => product.id === productId)
    item.quantity--
}

function placeOrder(email) {

    const itemsWithTotal = cart.map(item => {
        return {
            ...item,
            total: item.price * item.quantity
        };
    });

    const total = itemsWithTotal.reduce((sum, item) => {
        return sum + item.total;
    }, 0);

    const order = {
        email: email,
        items: itemsWithTotal,
        orderValue: total,
        orderDate: new Date()
    };

    console.log("Order placed successfully", order);
    return order;
}

addToCart(1)
addToCart(3)
addToCart(5)
// console.log(cart);
increment(1)
increment(5)
// console.log(cart)
decrement(1)
// console.log(cart)
// const order = {
//     email:"john@gmail.com",
//     items:cart,
//     orderValue:
// }
placeOrder()
