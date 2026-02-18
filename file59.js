// student={
//     name:"Nikhil",
//     display:function(){
//         console.log(this.name)
//     }
// }
// student.display()


student={
    name:"Nikhil",
    display:()=>{
        console.log(this.name)
    }
}
student.display()  //will throw error because in arrow function we can not write this