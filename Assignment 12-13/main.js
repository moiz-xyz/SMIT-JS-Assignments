// // task no 1
// let input = prompt("Enter what ever you want to write");
// input1 = Number(input);

// // if (typeof input1 === "number") {
// //     alert ("You have have written a number");
// // } else if(input === input.toUpperCase () ){
// //     alert("You have wriiten a upper case letter ")
// // };

// if (!isNaN(input)){
//     alert("This is a Number" )
// } else if(input === input.toUpperCase () ){
//    alert("This is upper case letter")
// } else if (input === input.toLowerCase () ){
//     alert("This is lower case character")
// };
// task no 2 
// let num1 = prompt("Enter your first number");
// let num2 = prompt("Enter your secod number");
// if (num1 >=num2){
//     alert("First enter number is greator than second number")
// } else if (num1 <= num2){
// alert("First Number is smaller than second number")
// };

// task no 3 
// let user = prompt("Enter any number postive or negative") ;
// user1 = Number(user);
//     if ( user1 === 0)  { 
//   alert("This is zero")
//  } else if ( user1 < 0){
//     alert(" This is an negative no")
// } else if (user1 > 0){
//  alert("This is an postive number")
// } else {
//     alert("Invalid Number")
// }

// task no 4

//  let one_charcter = prompt("To examine if you want to know vowels or not type any letter");
 
// if ( one_charcter === "a" ||one_charcter=== "e" ||one_charcter ==="i"|| one_charcter === "o" || one_charcter === "u" ){
//         alert("The given letter is vowel")
// } else {
//     alert("Please go and study class 2 again before learning Java script")
// };

// task no 5

// let user_pass = prompt("Enter your password Hint first 5 natural no");
// let password = "12345";

// if(user_pass === password){
// alert("Your Password is correct")
// } else{
//     alert("You have entered an wrong password")
// }

// task no 6
 let name = prompt ("What is your name?")
   let time = parseInt (prompt("What time is it in your country"));
   var condition = prompt("Is it Am or Pm").toLowerCase();
   if (time >=8 && time <= 11  && condition === "am"){
      document.write( name +" "+"<br>" +"Good morning" +"<br>" + "May your day be filled with sunshine and success!")
   } else if( time === 12 && condition === "pm" ){
      document.write( name +" "+"<br>"+"<br>"+"Good afternoon"+"<br>"
      + "Wishing you a wonderful afternoon filled with productivity and positivity!" )
   }else if ( time >= 1 && time <= 5 && condition ==="pm"){
      document.write( name +" "+"<br>"+"Good afternooon"+
          "Wishing you a wonderful afternoon filled with productivity and positivity!")
   }  else if ( time >= 5 && time <= 9 && condition === " pm"){   
    document.write ( name +" " +"<br>" +"Good evening"+"<br>" +"Have a lovely evening, filled with relaxation and joy!") 
} else if(time >=9 && time <= 12 &&  condition === "pm"){
         document.write (  name +" "+"<br>"+"Good night"+"<br>"+ "May you have sweet dreams and restful sleep!")
} else if( time === 12 && condition === "am" ){
   document.write( name +" "+"<br>"+"Go to sleep"+"<br>"+"Good night! May you have sweet dreams and restful sleep!")
}else if ( time >= 1 && time <= 7 && condition ==="am"){
   document.write( name +" "+"<br>"+"Go to sleep"+"<br>"+"Good night! May you have sweet dreams and restful sleep!")
}else {
   document.write ( name +"  " +"<br>"+"Invalid time try to use 12 h format")
}



