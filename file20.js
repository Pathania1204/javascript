const products = [
    {id:1,name:"Product 1",Discription: "This is Discription", price:30000,category:"Laptop"},
    {id:2,name:"Product 2",Desciption:"This is a Discription",price:20000,category:"Desktop"},
    {id:3,name:"Product 3",Desciption:"This is Discription",price:8000,category:"Laptop"},
    {id:4,name:"Product 4",Desciption:"This is Discription",price:9000,category:"Laptop"},
    {id:5,name:"Product 5",Desciption:"This is Discription",price:11000,category:"Desktop"},
    {id:6,name:"Product 6",Desciption:"This is Discription",price:6000,category:"Laptop"},
];

let search = "Laptop"
const resultArray = products.filter((product)=> product.category === search
);//if the product is returning true it will be pprinted
console.log(resultArray);