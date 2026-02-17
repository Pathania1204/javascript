const students = [
    {id:1, name: "Vansh", s1:true, s2:true, s3:false},
    {id:2, name: "Vaishnav", s1:true, s2:true, s3:true},
    {id:3, name: "Nikhil" ,s1:false, s2:true, s3:true}
];
function getStudent(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const found = students.find(s => s.id === id);
            if(found){
                resolve(found);
            } else {
                reject("Student not found.");
            }
        },1000);
    });
}
function checkS1(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const found = students.find(s => s.id === id && s.s1 === true);
            if(found){
                resolve("S1 Present");
            } else {
                reject("S1 Absent");
            }
        },1000);
    });
}
function checkS2(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const found = students.find(s => s.id === id && s.s2 === true);
            if(found){
                resolve("S2 Present");
            } else {
                reject("S2 Absent");
            }
        },1000);
    });
}
function checkS3(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const found = students.find(s => s.id === id && s.s3 === true);
            if(found){
                resolve("S3 Present");
            } else {
                reject("S3 Absent");
            }
        },1000);
    });
}
async function main(){
    try{
        const studentId = 2;
        const [student] = await Promise.all([
            getStudent(studentId),
            checkS1(studentId),
            checkS2(studentId),
            checkS3(studentId)
        ]);
        console.log(`${student.name} is Present`);
    }
    catch(err){
        console.log(err);
        console.log("Student is Absent");
    }
}
main();