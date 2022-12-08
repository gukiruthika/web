function add(num1, num2) {
    var result = 0;
    result += num1;
    result += num2;
    alert(result);
}
function subtraction(num1, num2){
    var result = num1 - num2;
    alert(result);
}
function multiply(num1, num2) {
    var result = num1 * num2;
    alert(result);
}
function divide(num1, num2) {
    var result = num1 / num2;
    alert(result);
}
function main() {
    var num1 = parseInt(prompt("Enter the first Number:"));
    var num2 = parseInt(prompt("Enter the second Number: "));
    var operation = prompt("Enter the operation: ");
    (operation == '+') && add(num1, num2);
    (operation == '-') && subtraction(num1, num2);
    (operation == '*') && multiply(num1, num2);
    (operation == '/') && divide(num1, num2);
}
setTimeout(function(){
    main();
}, 1000);

document.write("<form><div class='MCQ'><div class='question'>1. Which of the below are reserved keyword in Java?</div>");
document.write("<div class='option'><div class='w'><input type='radio' name='q1' class='wrong' value=0> array</div>");
document.write("<div class='w'><input type='radio' name='q1' class='wrong' value=0> goto</div>");
document.write("<div class='w'><input type='radio' name='q1' class='right' value=0> goto</div>");
document.write("<div class='w'><input type='radio' name='q1' class='wrong' value=0> goto</div>");