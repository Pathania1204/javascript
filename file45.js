function getStudentInfo() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const userObj={
            name: "Garima",
            email: "garima@gmail.com",
            age: 21
        }
        resolve(userObj)
    },2000)
  });
}

function displayInfo({name,age}){
    console.log(name);
}

async function main(){
    const result = await getStudentInfo()
    displayInfo(result);
    console.log("Program Completed Successfully"); 
}
main();



