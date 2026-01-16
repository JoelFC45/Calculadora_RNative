import { useState } from 'react';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';

export function useCalculator()  {
  // Vou fazer micro commits daqui para seguir melhor o estilo micro-commits aqui temos as variaveis de memória.
  const [displayValue, setDisplayValue] = useState<string>('0');
  //Ok, aqui temos a variavel da tela, o Usestate define a variavel, o setter e o valor inicial, ainda me confundo um pouco com useState então vou comentar pra me ajudar re-fixar isso.
  const [n1, setn1] = useState <Float | null>(0);
  const [operator, setOperator] = useState<string>('');



//addNumber adiciona um número ao display que é uma variável de estado que guarda o valor atual mostrado na tela da calculadora.
function addNumber(n: string) {
    setDisplayValue(currentValue => currentValue + n);
  }
function addOperator(op: string) { 
    setOperator(op);
    setn1(parseFloat(displayValue));
    setDisplayValue(''); 
  }
  function doting() {
    if(!displayValue.includes('.')){
      setDisplayValue(currentValue => currentValue + '.');
    } else {
      return;
    }
  }
  function deleting () {
    if (displayValue.length === 1) {
      setDisplayValue('0');
      return;
    }
    if (displayValue === '0') {
      return;
    } else {
    setDisplayValue(currentValue => currentValue.slice(0, -1));
  }
}
 function allClear() {
    setDisplayValue('0');
    setn1(0);
    setOperator('');
 }

 function plusMinus() {
    if (displayValue.startsWith('-')) {
      setDisplayValue(displayValue.slice(1));
    }else {
      setDisplayValue('-' + displayValue);
    }
  }

  function calculateResult() {
    const n2 = parseFloat(displayValue);
    let result: Float | null = null;
    
    switch (operator) {
      case '+':
        result = (n1 ?? 0) + n2;
        break;
      case '-':
        result = (n1 ?? 0) - n2;
      case 'X':
        result = (n1 ?? 0) * n2;
        break;
      case '/':
        result = (n1 ?? 0) / n2;
        break;
      default:
        return;
    }
    setDisplayValue(result.toString());
    setn1(result);
    setOperator('');
  }


  return {
    addNumber,
    addOperator,
    doting,
    displayValue,
    deleting,
    allClear,
    plusMinus,
    calculateResult
  };
}
