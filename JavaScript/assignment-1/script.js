function calculate() {
    
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;
    let result;
 
   
    if (isNaN(num1) || isNaN(num2)) {
      result = 'Please enter valid numbers';
    } else {
      switch (operation) {
        case 'add':
          result = num1 + num2;
          break;
        case 'subtract':
          result = num1 - num2;
          break;
        case 'multiply':
          result = num1 * num2;
          break;
        case 'divide':
          if (num2 === 0) {
            result = 'Cannot divide by zero';
          } else {
            result = num1 / num2;
          }
          break;
        default:
            result = 'Please select a valid operation';
      }
    }
 
    document.getElementById('result').textContent = result;
  }