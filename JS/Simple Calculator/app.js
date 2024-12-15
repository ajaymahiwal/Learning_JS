
const calculate_btn = document.querySelector("button");
const num_1 = document.querySelector("input[name='num_1']");
const num_2 = document.querySelector("input[name='num_2']");
const operation = document.querySelector("select[name='operation']");

const heading = document.querySelector("h1");


calculate_btn.addEventListener(("click"), (e)=>{
    result = "Please Enter Some Value :)"
    if(num_1.value && num_2.value){

        result = calculateResult(parseFloat(num_1.value), parseFloat(num_2.value), operation.value);
    }

    heading.innerText = `Result: ${result}`;
});



function calculateResult(num_1, num_2, op){
    let result;
    switch(op){
        case "+":
            result = num_1 + num_2;
            break;

        case "-":
            result = num_1 - num_2;
            break;

        case "*":
            result = num_1 * num_2;
            break;

        case "/":
            if(num_2 == 0){
                result = "Can't Divide By Zero Soory Bhai Jii"
            }else{
                result = num_1 / num_2;
            }
            break;
        default:
            result = "Invalid Operation"
    }

    return result;
}