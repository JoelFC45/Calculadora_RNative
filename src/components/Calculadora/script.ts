import { useState } from 'react';

export function useCalculator()  {
  // Vou fazer micro commits daqui para seguir melhor a preferencia de João Pedro aqui temos as variaveis de memória.
  const [displayValue, setDisplayValue] = useState<string>('0');
  //Ok, aqui temos a variavel da tela, o Usestate define a variavel, o setter e o valor inicial, ainda me confundo um pouco com useState então vou comentar pra me ajudar re-fixar isso.
  const [n1, setn1] = useState <number | null>(0);
  const [operator, setOperator] = useState<string>('');



//addNumber adiciona um número ao display que é uma variável de estado que guarda o valor atual mostrado na tela da calculadora.
function addNumber(number: number): void {
    setDisplayValue(currentValue => (currentValue + number));
  }
}
 