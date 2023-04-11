//**********************  Assignment No 2 ************************ */

// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

// function add(num1){
//       return function (num2) {
//             console.log("Here is the addition of two Numbers are "+(num1+num2));
//       }
// }
// let addition=add(5);
// addition(10);


// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

// let arrays=['first','second','third'];
// function recursion(arrays,name){
//       if(name==arrays[0]){
//             console.log(true);
//       }
//       else{
//       recursion(arrays.slice(1),name);
//       console.log("false")
//       }
      
// }
// recursion(arrays,"first")




// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

// let para=document.getElementById("para");
// function add(content){
// para.innerHTML=content;
// }

// add("Second Paragraph by using Function")



// 4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

// let li=document.getElementById("li");
// function addList(content){
//       li.innerHTML=content;
// }
// addList("fourth")



// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.

// function changeColor(elementName,background_Color){
//       let tag=document.getElementById(elementName);
//       tag.style.backgroundColor=background_Color;
// }
// changeColor("li4","red")





// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.
// let objectName={
//       firstName:"Shoaib",
//       lastName:"Akhter",
// }
// function store(keys,values){
//  localStorage.setItem(keys,JSON.stringify(values))
// }
// store("objectKey",objectName)





// 7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

// function getObject(key){
//     console.log(localStorage.getItem(key))  
// }
// getObject("objectKey")




// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.


let objectName={
      firstName:"Shoaib",
      lastName:"Akhter",
}
function saveDatainLocalStorage(names){
      for(let key in objectName){
            console.log(key)
             localStorage.setItem(key,objectName[key])
      }

      let newObject={};
      for(let i=1;i<=localStorage.length;i++){
            let keyValue=localStorage.key(i);
            let ValuesofKeys=localStorage.getItem(keyValue);
            newObject[keyValue]=ValuesofKeys;
      }
      console.log(newObject);

}
saveDatainLocalStorage(objectName)

    













































































































































































































































//**********************  Assignment No 1 ************************ */

// 1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

// ----------------------------------------Source Code-----------------------------------------------------------
// let num1=+prompt("Enter first Number");
// let num2=+prompt("Enter second Number");
// if(num1>num2){
//       console.log(num1);
// }
// else{
//       console.log(num2);
// }



// 2. Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.
// Sample: 3
// Output : The sign is +
// Sample: -5
// Output : The sign is -

// ----------------------------------------Source Code-----------------------------------------------------------
// let num=+prompt("Enter any Number with sign or not");
// if(num>0){
//       alert("+");
// }
// else{
//       alert("-");
// }


// 3. Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.

// ----------------------------------------Source Code-----------------------------------------------------------
// let num1=+prompt("Enter first Number");
// let num2=+prompt("Enter second Number");
// let num3=+prompt("Enter third Number");
// let num4=+prompt("Enter fourth Number");
// let num5=+prompt("Enter fifth Number");
// if(num1>num2 && num1>num3 && num1>num4 && num1>num5 ){
//       console.log("The Larger Number is "+num1);
// }
// else if(num2>num1 && num2>num3 && num2>num4 && num2>num5){
//       console.log("The Larger Number is "+num2);
// }
// else if(num3>num1 && num3>num2 && num3>num4 && num3>num5){
//       console.log("The Larger Number is "+num3);
// }
// else if(num4>num1 && num4>num2 && num4>num3 && num4>num5){
//       console.log("The Larger Number is "+num4);
// }
// else{
//       console.log("The Larger Number is "+num5);
// }



// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
// ----------
// ----------
// ----------------------------------------Source Code-----------------------------------------------------------
// for(i=0;i<=15;i++){
//       if(i%2==0){
//             console.log(i+" is even");
//       }
//       else{
//             console.log(i+" is odd");
//       }
// }


// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.
// The grades are computed as follows :
// Range Grade
// <60 F
// <70 D
// <80 C
// <90 B
// <100 A
// ----------------------------------------Source Code-----------------------------------------------------------
// let avg=+prompt("Enter average marks");
// if(avg<60){
//       alert("F");
//       console.log("F");
// }
// else if(avg>60 && avg<70){
//       alert("D");
//       console.log("D");
// }
// else if(avg>70 && avg<80){
//       alert("C");
//       console.log("C");
// }
// else if(avg>80 && avg<90){
//       alert("B");
//       console.log("B");
// }
// else if(avg>90 && avg<=100){
//       alert("A");
//       console.log("A");
// }

// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

// ----------------------------------------Source Code-----------------------------------------------------------
// for(i=1;i<=100;i++){
//       if(i%3==0){
//             console.log("Fizz");
//       }
//       else if(i%5==0){
//             console.log("Buzz");
//       }
//       else if(i%3==0 && i%5==0){
//             console.log("FizzBuzz");
//       }
//       else{
//             console.log(i);
//       }
// }

// 7. Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

// ----------------------------------------Source Code-----------------------------------------------------------
// for(i=1;i<=5;i++){
//       for(j=i;j<=i;j++){
//       console.log("*");
//       }
// }
