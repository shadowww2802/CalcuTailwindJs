
// Global Variable
let input = "";
let numbers = [];

/**
 * A function that gets the current number value whenever an end user prompts to click a button number
 * @param {number} number 
 */
function clickedNumber(number) {

    if(numbers.length <= 11) {

        input = document.getElementById("numberInput");
        document.getElementById("numberInput").innerHTML = "";
    
        document.getElementById("numberInput").value = input.value + "" + number; 
    
        numbers.push(number);

    } else {
        console.log("CHARACTERS EXECEED LIMIT...");
    }

}

/**
 * A function that gets the current operation value whenever an end user prompts to click a operation
 * @param {string} op 
 */
function operation(op) {


    if(numbers.length <= 11) {


        switch(op) {

            case "+":
                input = document.getElementById("numberInput");
                document.getElementById("numberInput").innerHTML = "";
            
                document.getElementById("numberInput").value = input.value + "" + op; 
            
                numbers.push(op);
                break;

            case "-":
                input = document.getElementById("numberInput");
                document.getElementById("numberInput").innerHTML = "";
            
                document.getElementById("numberInput").value = input.value + "" + op; 
            
                numbers.push(op);
                break;

            case "*":
                input = document.getElementById("numberInput");
                document.getElementById("numberInput").innerHTML = "";
            
                document.getElementById("numberInput").value = input.value + "" + op; 
            
                numbers.push(op);
                break;

            case "/":
                input = document.getElementById("numberInput");
                document.getElementById("numberInput").innerHTML = "";
            
                document.getElementById("numberInput").value = input.value + "" + op; 
            
                numbers.push(op);
                break;
            default:
                console.log("OPERATIONT UNRECOGNIZED");    
        }

    }

}

/**
 * A function that clears all the prompted numbers in the calculator
 */
function clearAll() {

    document.getElementById("numberInput").value = "";
    
    for(let i = numbers.length - 1; i >= 0; i--) {
        numbers.pop();
    }

    /* console.log("CLEARED"); */

}

/**
 * A function that calculates all the numbers that is prompted
 */
function equal() {

    /* console.log(eval(numbers.join(""))); */
    document.getElementById("numberInput").value = eval(numbers.join(""));

    for(let i = numbers.length - 1; i >= 0; i--) {
        numbers.pop();
    }

    numbers.push(document.getElementById("numberInput").value);

    /* console.log(numbers); */

}