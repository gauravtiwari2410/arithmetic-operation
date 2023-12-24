

function calculate(operation) {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = 'Please enter valid numbers';
        return;
    }

    switch (operation) {
        case 'add':
            result.textContent = 'Result: ' + (num1 + num2);
            break;
        case 'subtract':
            result.textContent = 'Result: ' + (num1 - num2);
            break;
        case 'multiply':
            result.textContent = 'Result: ' + (num1 * num2);
            break;
        case 'divide':
            if (num2 === 0) {
                result.textContent = 'Cannot divide by zero';
            } else {
                result.textContent = 'Result: ' + (num1 / num2);
            }
            break;
        default:
            result.textContent = 'Invalid operation';
            break;
    }
}

document.getElementById('add').addEventListener('click', function() {
    calculate('add');
});

document.getElementById('subtract').addEventListener('click', function() {
    calculate('subtract');
});

document.getElementById('multiply').addEventListener('click', function() {
    calculate('multiply');
});

document.getElementById('divide').addEventListener('click', function() {
    calculate('divide');
});