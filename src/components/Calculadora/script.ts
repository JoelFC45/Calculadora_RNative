import { useState } from 'react';

export function useCalculator() {
  // Vou fazer micro commits daqui para seguir melhor a preferencia de João Pedro aqui temos as variaveis de memória.
  const [displayValue, setDisplayValue] = useState('0');
  //Ok, aqui temos a variavel da tela, o Usestate define a variavel, o setter e o valor inicial, ainda me confundo um pouco com useState então vou comentar pra me ajudar re-fixar isso.
  const [firstValue, setFirstValue] = useState('');
  const [operator, setOperator] = useState(null);
  const [SecondValue, setSecondValue] = useState(false);
}