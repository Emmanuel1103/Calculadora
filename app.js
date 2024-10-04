let displayValue = '';
let firstNumber = null;
let secondNumber = null;
let currentOperation = null;

document.getElementById('display').value = "0";

// Función para actualizar la pantalla
const updateDisplay = () => {
    document.getElementById('display').value = displayValue;
};

// Función para agregar un número al valor actual de la pantalla
const appendNumber = (num) => {
    if(displayValue == "0"){
        displayValue = num;
        updateDisplay();
    }else{
        displayValue += num;
        updateDisplay();
    }
    
};

// Función para limpiar la pantalla
const clearDisplay = () => {
    displayValue = '0';
    firstNumber = null;
    secondNumber = null;
    currentOperation = null;
    updateDisplay();
};

// Función para establecer la operación
const setOperation = (operation) => {
    if (displayValue !== '') {
        firstNumber = parseFloat(displayValue);
        currentOperation = operation;
        displayValue = `${firstNumber}${operation}`;
        updateDisplay();
    }
};

// Función para realizar el cálculo
const calculate = () => {
    if (currentOperation && displayValue !== '') {
        const displayParts = displayValue.split(currentOperation);
        secondNumber = parseFloat(displayParts[1]);
        let result;

        // Operaciones usando funciones flecha y template strings
        switch (currentOperation) {
            case '+':
                result = (() => `${firstNumber + secondNumber}`)();
                break;
            case '-':
                result = (() => `${firstNumber - secondNumber}`)();
                break;
            case '*':
                result = (() => `${firstNumber * secondNumber}`)();
                break;
            case '/':
                result = (() => `${firstNumber / secondNumber}`)();
                break;
            default:
                return;
        }
        displayValue = result;
        updateDisplay();
        firstNumber = null;
        secondNumber = null;
        currentOperation = null;
    }
};
