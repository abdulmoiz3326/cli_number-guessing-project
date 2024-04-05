import inquirer from "inquirer";

const randomNumber =(2);
const answers = await inquirer.prompt([
  {
    name: "userguessednumber",
    type: "number",
    message: "please guess a number: ",
  },
]);
const { userguessednumber } = answers;
console.log( userguessednumber , "userguessednumber" , randomNumber)
 if (userguessednumber === randomNumber){

 console.log( "Your answer is correct \n You Win ");
    
 } else{
    console.log( "Please Try Again Better Luck Next Time ")
 }

 