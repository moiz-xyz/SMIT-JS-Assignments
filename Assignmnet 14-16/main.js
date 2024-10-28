// // task no 1
// let name = prompt("What is your name");
// let students =[ "Hello" , name];
// alert(students);

// //  task no 2 
// let mobiles= ["Iphone", "Samsung","Tecno", "Infinix"] // string arraay 

// // task no 3
// let quantity = [10,3,3,3,3] // Number array

// // task no 4
// const availiblity = [true,false] ; // Bolean array 

// // task no 5
// let qulification=[ "Ssc"];
// document.write(qulification +"<br>");

// qulification.push("Hsc");
// document.write(qulification[1]+"<br>");

// qulification.push("BCS");
// document.write(qulification [2] +"<br>");

// qulification.push("BS");
// document.write(qulification [3] +"<br>");

// qulification.push("BCOM");
// document.write(qulification [4] +"<br>");

// qulification.push("MS");
// document.write(qulification [5] +"<br>");

// qulification.push("M.Phill");
// document.write(qulification [6] +"<br>");

// qulification.push("PhD");
// document.write(qulification [7] +"<br>");

// // task no 6
let first_student =  prompt("What is the name of first student");
let second_student =  prompt("What is the name of second student");
let third_student =  prompt("What is the name of third student");

let marks1 = parseInt( prompt("Enter the marks of first student out of 500"));
let marks2 = parseInt(prompt("Enter the marks of second student out of 500"));
let marks3 = parseInt(prompt("Enter the marks of third student out of 500"));

let total_marks = 500;
let percent1 = (marks1 / total_marks) *100;
let percent2 = ( marks2 / total_marks ) *100;
let percent3 =( marks3 / total_marks ) *100;

let student_name = [first_student ,second_student , third_student];
let students_marks = [ marks1 , marks2 ,marks3 ];
let student_perecntage=[percent1 ,percent2 ,percent3]

document.write( "Score of " + student_name [0] +" is "  + students_marks [0]  + " with percentage "+ student_perecntage[0]+" %<br>");
document.write( "Score of " + student_name [1] + " is " + students_marks [1]  + " with percentage "+ student_perecntage[1] +" %<br>");
document.write( "Score of " + student_name [2] + " is " + students_marks [2]  + " with percentage "+ student_perecntage[2] +" %<br>");

// task no 7

// let colour = [ "Red","Orange","Yellow"]
// let input1 = prompt("Which  color you want to add at last Red,Orange,Yellow, are already added");
// colour.push(input1);
// alert(colour);
// let input2 = prompt("Which  color you want to add at beginning"+" " +colour +" "+ "are already added");
// colour.unshift(input2 );  
// alert(colour+input2+" "+" is added");
// let input3 = prompt(" Add two more colour which  you want to add at beginning" +" " + colour +" "+"are already added");
// colour.splice([0],[0],input3);
// alert(colour,+input3+" "+" is added");
// let input4 = parseInt( prompt( "At which index do you want to add color index start from 0" +" " +colour) );
// colour.splice( input4 ,1);
// alert(colour+" "+input4+" "+" is added");

// let input6 = parseInt( prompt( "At which index do you want to add or removed color index start from 0" +" " +colour) );
// colour.splice( input6 ,1);
// alert(colour+" "+input4+" "+" is removed");









