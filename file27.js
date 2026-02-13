// let score = 90
// if(score>50){
//     console.log("Pass");
// }
// else{
//     console.log("Fail");
// }

// let score = 90
// let result
// if(score>50){
//     result = "Pass";
// }
// else{
//     result = "Fail";
// }
// console.log(result);

// Terniary Operator
// let score = 90
// let result = score > 50 ? "Pass" : "Fail"
// console.log(result);

// Ignoring else part
// let score = 9
// let result = score > 50 && "Pass" 
// console.log(result);

// if score has value result will be 10 and if score is empty result will be 30
// let score = 10
// let result = score || 30
// console.log(result); //10 is result
// let score
// let result = score || 30
// console.log(result); //30 is result

// let score = 15
// switch(true){
//     case (score<=50 && score>=10):{
//         console.log("Grade C")
//         break
//     }
//     case (score<=80 && score>51):{
//         console.log("Grade B");
//         break
//     }
//     case (score<=100 && score>81):{
//         console.log("Grade A");
//         break
//     }
//     default:
//         console.log("Failed");
// }

// let subject = "HTML"
// switch(subject){
//     case "HTML":{
//         console.log("HyperText Markup Language");
//         break
//     }
//     case "CSS":{
//         console.log("Cascading Style Sheet");
//     }
//     default:{
//         console.log("unknown");
//     }
// }

let subject = "1"
switch(subject){ //checks value and datatype 
    case "1":{
        console.log("HyperText Markup Language");
        break
    }
    case "2":{
        console.log("Cascading Style Sheet");
    }
    default:{
        console.log("unknown");
    }
}
