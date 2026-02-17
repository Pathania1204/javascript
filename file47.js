const students = [
    {id:1,name:"Vansh",attendance:90,score:90},
    {id:2,name:"Vaishnav",attendance:50,score: 50}
];
function getStudentInfo(id) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const found = students.find((s) => s.id === id);
        if(found){ resolve("Student Info.") }
        else{ reject("Student does not exist.")}
    },2000)
  });
};
function getAttendanceInfo(id) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const found = students.find((s) => s.id === id && s.attendance > 75);
        if(found){
        resolve("Attendance Info resolved.")
        }
        else{
            reject("Attendance too low.")
        }
    },2000)
  });
};
function getExamInfo(id) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const found = students.find((s) => s.id === id && s.score > 80);
        if(found){
        resolve("Exam Info resolved.")
        } else {
            reject("Not Promotted.")
        }
    },3000)
  });
};
function displayInfo({name}){
    console.log(name);
}
async function main(){
    try{
    const studentId = 1;
    const result = await Promise.all([
        getStudentInfo(studentId),
        getExamInfo(studentId),
        getAttendanceInfo(studentId)
    ])
    console.log("Student has been promotted."); 
    } 
    catch(err){
    console.log(err);
    }
}
main();