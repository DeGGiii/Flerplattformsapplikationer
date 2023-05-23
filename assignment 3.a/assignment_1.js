$(document).ready(function() {
    $("#number-2, #number-1").keyup(function() {
        let number1 = $("#number-1").val(); // get value from input 1
        let number2 = $("#number-2").val(); // get value from input 2
        
        if (number1 && number2) { //If sats to check if both values have an input
            let result = multiplication(number1, number2);
            console.log(result);
            $("#result-box").val(result); //output for value
        } 
        else {
            $("#result-box").val(""); //resets result value if either input-value is false
        }
    })

    function multiplication(number1, number2) { //Multiply both values
        let num1 = parseInt(number1);
        let num2 = parseInt(number2);
        return num1 * num2;
    }
});