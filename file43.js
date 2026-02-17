function f1() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("This is f1 function")
        resolve()
    },3000)
  });
}
function f2() {
  console.log("This is f2 function");
}
async function main(){
    await f1() //await means f2 will run after f1 will be completed
    f2()
}
main();
