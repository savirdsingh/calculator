const container = document.querySelector(".container")
const body = document.querySelector("body")
const output = document.createElement("h1")
output.textContent = "hi"
let equalBool = false;

body.appendChild(output)
body.appendChild(container)

const numbers = document.querySelector(".numbers")
const functions = document.querySelector(".functions") 
let array = [];
container.appendChild(numbers)
container.appendChild(functions)
let tempNum = ""
let tempNum2 = ""
let currentOperator = ""
let clicked = false;
for (let i = 1; i <= 9; i++) {
    const number = document.createElement("button");
    number.classList.add("numbers");
    number.id = i;
    number.textContent = i;
    number.style.width = "100px";
    number.style.height = "100px"
    number.style.fontSize = "50px"
    numbers.appendChild(number)
    number.addEventListener("click", () => {
       
        
        if (array[0] != undefined) {
            tempNum = array[0]
        }
       
            if (!clicked) {
                equalBool = true
                tempNum += `${number.id}`
                output.textContent = tempNum
        
            }  
            else {
                equalBool = true
                
                
                tempNum2 += `${number.id}`
                output.textContent = tempNum2
                
        }
        
            
       
        
    
        

        
    })
}
let result = 0;
const zero = document.createElement("button");
zero.textContent = "0"
zero.style.width = "200px"
zero.classList.add("numbers")
zero.id = 0

//just wanted special case for zero to be at the bottom like in normal calculators
zero.addEventListener("click", () => {
    if (!equalBool) {
        output.textContent = ""
        array = []
    }
    if (array[0] != undefined) {
        tempNum = array[0]
    }
    
        if (!clicked) {
            
            tempNum += `${zero.id}`
            output.textContent = tempNum
    
        }  
        else {
            
            
            
            tempNum2 += `${zero.id}`
            output.textContent = tempNum2
            
    }
    

    

    
})

numbers.appendChild(zero)
const equals = document.createElement("button");
equals.textContent = "="
equals.style.width = "100px"
numbers.append(equals)
equals.addEventListener("click" , () => {
    
    array[0] = +tempNum
    array[1] = +tempNum2
    if (currentOperator == "+") {
        equalBool = true
        result = array[0] + array[1]
       // result = +(tempNum) + +(tempNum2)
        console.log(result)
        output.textContent = result

    }
    else if (currentOperator == "-") {
        equalBool = true
        result = array[0] - array[1]
        console.log(result)
        output.textContent = result
    }
    else if (currentOperator == "*") {
        equalBool = true
        result = array[0] * array[1]
        console.log(result)
        output.textContent = result
    }
    else if (currentOperator == "/") {
        equalBool = true
        result = array[0] / array[1]
        console.log(result)
        output.textContent = result
    }
    
    array[0] = (result)
    array[1] = 0
    tempNum = ""
    tempNum2 = ""
    console.log(array)
    clicked = false;
    equalBool = false;
    
})

let operations = ["+", "-", "x", "/"];
let multiply = "*";

for (let i = 0; i < 4; i++) {
    const operator = document.createElement("button");
    operator.textContent = operations[i];
    if (i == 2) {
        operator.id = multiply;
    }
    else operator.id = operations[i]
    functions.appendChild(operator)

    operator.addEventListener("click", () => {
        clicked = true;
        currentOperator = operator.id
        console.log(operator.id)
    })
}

 



console.log(array)