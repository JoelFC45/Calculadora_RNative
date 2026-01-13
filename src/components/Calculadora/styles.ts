import { StyleSheet } from 'react-native';


//A estilização do botão de operação na calculadora, aqui aprendi as diferenças de estilização entre React Native e CSS tradicional. Seguem o mesmo princípio porém tudo aqui é feito com funções do JavaScript.
export const styles = StyleSheet.create({
  operationButton: {
    backgroundColor: 'black',
    borderRadius: 7,
    width: '100%',   
    height: '100%',  
    borderColor: '#333', 
    justifyContent: 'center',
    alignItems: 'center',
},

  operationText: {
    color: 'white', // Não existe herança de estilos, então é necessário definir a cor do texto aqui
    fontSize: 24,   
    fontWeight: 'bold',
  },
   numberText: {
    color: 'black', // Eu fui um tanto redundante em não fazer uma classe padrão para os botões em geral e depois uma para cada botão específico, mas tudo bem, pelo menos aprendi o problema é que vou ter que ficar repetindo coisa.
    fontSize: 24,   
    fontWeight: 'bold',
  },

  equalsButton: {
    backgroundColor: 'blue',
    borderRadius: 7,
    width: '100%',  
    height: '100%',  
    borderWidth: 1,
    borderColor: '#ffffff', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCalculadora: {
    // 1. Cores e Fundo
    backgroundColor: 'rgb(0, 0, 0)', // Cor de fundo preta para a calculadora
    padding: 20, 
    gap: 5, 
    borderTopLeftRadius: 30,
    alignSelf: 'center', 
    width: '90%',
    maxWidth: 400, 
  },
  numberButton: { 
    backgroundColor: 'white',
    borderRadius: 7,
    width: '100%', 
    height: '100%',  
    borderWidth: 1,
    borderColor: '#ffffff', 
    justifyContent: 'center',
    alignItems: 'center',
}
}
);