"use strict"

var teacher = "Sanket Singh";

function fun(){
    var teacher = "Anurag";
    content = "JS";
    console.log("Hello", teacher);
}

function gun(){
    var student = "Karan";
    console.log(`${teacher} says, "How are you, ${student}?`);
}

// console.log(teacher, content);

fun();
gun();

console.log(teacher, content);