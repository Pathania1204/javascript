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
function getAttendanceInfo() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Attendance info resolved.")
    },2000)
  });
}
function getExamInfo() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Exam info resolved.")
    },3000)
  });
}
function displayInfo({name}){
    console.log(name);
}

async function main(){
    // const result = await getStudentInfo()
    const result = await Promise.all([
        getStudentInfo(),
        getExamInfo(),
        getAttendanceInfo()
    ])
    console.log(result);
    console.log("Student has been promotted."); 
}
main();