const calculate = () => {
    const [_, __, num1, operator, num2] = process.argv;
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let result;
    switch (operator) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        result = a / b;
        break;
      default:
        console.log('Xato: Noto\'g\'ri amal belgisi kiritildi');
        return;
    }
    console.log(`Natija: ${num1} ${operator} ${num2} = ${result}`);
  };
  calculate();
  