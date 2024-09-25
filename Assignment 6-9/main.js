 
 // task 1
 document.write("<h1> Results </h1> ");
 let a =10;
 document.write("The value a is"+ a +"<br>" +"<br>");
 ++a;
 document.write("The value of ++a is " +a+"<br>");
 document.write(" Now the value of a is " +a+"<br>"+"<br>");
 a++;
 document.write("The value of a++ is"+ a+"<br>");
 document.write("The value of a is " +a +"<br>"+"<br>")
 --a;
 document.write("The value of --a is" +a+"<br>");
 document.write("The value of a is " +a +"<br>"+"<br>")
 a--;
 document.write("The value of a-- is " +a +"<br>");
 document.write("The value of a is " +a +"<br>"+"<br>")

 // task no 2
 let c= 2;
 let d = 1 ;
 let c1 = --c
 let e = c1 - --d;
 let f = e + ++d;
 let result= e + d--;
 document.write("<h3>"+"Let c ="+" "+c +"<br>");
 document.write( "Let d ="+d +"<br>"+"</h3>");
  document.write("The output of --c is" +" " + c1 +"<br>");
 document.write("The output of --c - --d is" +" "+ e +"<br>");
 document.write("The output of --c - --d + ++d is" +" "+ f +"<br>");
 document.write("The output of --c - --d + ++d + d--is"+" " + result +"<br>");

 // task no 3
  
 let user = prompt("What is your name");
document.write("<h2>"+ user +" "+"Have good day"+"</h2>");

// task no 4

let table = prompt("Enter the no");
document.write(table + " * 1 = " + table * 1 + "<br>");
document.write(table + " * 2 = " + table * 2 + "<br>");
document.write(table + " * 3 = " + table * 3 + "<br>");
document.write(table + " * 4 = " + table * 4 + "<br>");
document.write(table + " * 5 = " + table * 5 + "<br>");
document.write(table + " * 6 = " +  table * 6 + "<br>");
document.write(table + " * 7 = " +  table * 7 + "<br>");
document.write(table + " * 8 = " +  table * 8 + "<br>");
document.write(table + " * 9 = " + table * 9 + "<br>");
document.write(table + " * 10 = " + table * 10 + "<br>");

 // task  no 5(Perceatage calculator )

// taking input suject
let subject  = prompt("Enter your First Subjects");
let subject2 = prompt("Enter your Second Subjects") ;
let subject3 = prompt("Enter your Third Subjects");
// Total mark 1 subj
let mark=100
// Total Marks of 3 subjects
let marks=100*3;
// Taking input of obtained marks
let marks_obtained = prompt("Enter your obtained marks in First subject ");
let marks_obtained1 = prompt("Enter your obtained marks in Second subject ");
let marks_obtained2 = prompt("Enter your obtained marks in Third subject ");
// calculating total marks

let totalMarks = marks_obtained + marks_obtained1 + marks_obtained2
document.write("<h3>"+"Subjects"+" "+" Total Marks"+" "+ "Obtained Marks"+" "+"Percentage"+"</h3>");
document.write( subject  +" " + mark +"     " + marks_obtained +"     " + marks_obtained/marks*100 +"<br>");
document.write( subject2 +"   " +mark+"     "+ marks_obtained1+"     " + marks_obtained/marks*100 +"<br>");
document.write( subject2 + "    " + mark+"    " + marks_obtained2 + marks_obtained/marks*100 +"<br>");
document.write("Your Total % is "+totalMarks/marks*100); 


