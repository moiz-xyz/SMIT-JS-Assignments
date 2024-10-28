// TASSK NO 1
// let user1 = prompt("What is your  first name");
// let usee2 = prompt("What is your second name");
// alert(user1+" "+usee2);

// // TASK NO 2
//  let user_input = prompt("Which Brand of mobile is your favorite");
//  let length= user_input.length;
//  alert("Your favorite  is "+ user_input + "\n"+ "The length of you favoroite phone is "+ length)
// // alert(length);

// // task no 3
// let word ="Pakistani";
// let position = word.indexOf("n");
// alert(position);

// task no 4
// let senteence = "Hello World ";
// let index = senteence.lastIndexOf("");
// alert(index);

// task no 5

// let word ="Pakistani";
// let char = word.charAt(3);
// alert("The word at index 3 in Pakistani is "+char);

// task no 6 

// let user1 = prompt("What is your  first name");
// let usee2 = prompt("What is your second name");
// alert(user1+" "+usee2);

// hydearabad
//islamabad
// task no 7
// let cityofPak = prompt("Enter any city that belongs from pakistan ");
// for (i = 0; i <cityofPak.length ;i++){
// if (cityofPak.slice(i, i+ 20) === "Hyderabad"){
//  cityofPak = cityofPak.slice(0,i) + "Islamabad"+ cityofPak.slice(i+20);
// break;
// }
// }
// alert(cityofPak);

// task  no 8
// let message = "Ali and Sam are best friends. They play cricket and football together.";
// let index = message.indexOf("and");

// if (index !== -1) {
//     message = message.slice(0, index) + "&" + message.slice(index + 3); // Adjusting slice to replace "and" with "&"
// }
// alert(message);

//  secoond method where both and are removed;
// let message = "Ali and Sam are best friends. They play cricket and football together.";
// let replace = message.replace(/ and /g," &")
// alert(replace);

//  task no  09

// let string = "473";
// let no = Number(string);
// alert(  "String "+ string+ "\n"+ "Number convert "+no);

// task no 10
// let input = prompt("Do you wana see js magic then write everthing in lowercase js will auto convert in upper case");
// let captilize = input.toUpperCase();
// alert(captilize);

// // task no 11
// let input = prompt("Do you wana see js magic then write everthing in UPPERCASE js will auto convert in lowerc case");
// let samll = input.toLowerCase();
// alert(samll);

// task no 12
// let num = 35.36*100;
// let str = String(num);
// alert(str);

// task no 13 
    // let user_input = prompt("Enter a user name");
    // let found = false;

    // for(i = 0 ; i < user_input.length; i++){
    //     if (user_input [i] === "@"){
    // alert("Please enter a correct user name")
    //      found=true              
    //    break;               
    // }else if ( user_input[i] ===","){
    //             alert("Please enter a correct user name");
    //             found= true;
    //             break;
    // }else if (user_input[i] ==="."){
    //         alert("Please enter a correct user name");
    //         found=true;
    //         break;
    
    //     } else if (user_input[i]  ==="!"){
    //             alert("Please enter a correct user name");
    //         found = true;
    //           break;
    // } 
    // }
    // if (!found){
    //     alert("You  are succesfully login")
    // };
    
    // task no 14

// let user = prompt("Enter what do you want").toLowerCase();
//     let my_array = ["cake" , "applie pie" ,"chips", "cokie" ,"paties"]
//     let case_sensitive = my_array.map(str => str.toLowerCase());
//     for (let i = 0; i < case_sensitive.length;i++ ){
//         if (user === case_sensitive[i]){
//             alert(user+" is avaiblabe in our store") ;
//             break;
//         } else{
//             alert(user+" is not available in our store") ;
//             break;
//         }
//     }
//  task no 15
let passwod_prompt = prompt("Enter a passowrd to login");
let found = false;
let special_character = "@,!.";
// let num = parseInt("0123456789");
for (let i = 0; i< passwod_prompt.length; i++){
    // if ( passwod_prompt [i] === special_character || passwod_prompt[i] === num ){
    //     alert("The passsword must begin with letter");
    //     // found = true;/
    //     break;
    // }
    if (!isNaN(passwod_prompt[0]) || special_character.includes(passwod_prompt[0])) {
        alert("The password must begin with a letter.");
        found = true;
        break;
    } if (passwod_prompt.length<6){
        alert("Passord length cannot be smaller than 6");
        found =  true;
        break
    } 
    
}
if (!found){
    alert("You have sucesfuuly login");
}