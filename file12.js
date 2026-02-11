const student = {
    name: "John",
    age: 21
}
// console.log(student)
// console.log(student.name)
// student.city = "NYC"
// console.log(student)

// student.city = "Miami" //this will overwrite it //wont create new key
// console.log(student)

//SPREAD OPERATOR
const obj = {...student,city:"NYC"}
console.log(obj);