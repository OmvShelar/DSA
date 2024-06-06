function evalPostfix(expression) {
    const stack = [];
    const tokens = expression.split(' ');
  
    tokens.forEach(token => {
      if (!isNaN(token)) {
        stack.push(Number(token));
      } else {
        const [b, a] = [stack.pop(), stack.pop()];
  
        switch (token) {
          case '+':
            stack.push(a + b);
            break;
          case '-':
            stack.push(a - b);
            break;
          case '*':
            stack.push(a * b);
            break;
          case '/':
            stack.push(a / b);
            break;
          default:
            throw new Error(`Unknown operator: ${token}`);
        }
      }
    });
  
    if (stack.length !== 1) {
      throw new Error('Invalid expression');
    }
  
    return stack[0];
  }
  
  const expression = "5 3 1 * + 7 -";
  console.log(evalPostfix(expression)); 
  