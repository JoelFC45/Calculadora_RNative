import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
  containerCalculadora: {
    backgroundColor: 'rgb(0, 0, 0)',
    flex: 1, 
  },

  // Área do Display
  displayContainer: {
    flex: 2, 
    justifyContent: 'flex-end', 
    alignItems: 'flex-end',
    padding: 20,
  },

  // Área Geral dos Botões
  buttonsContainer: {
    flex: 5, // Ocupa o resto da tela (aprox 70%)
    padding: 10,
    gap: 10, 
  },

  row: {
    flex: 1, // Isso faz a linha esticar verticalmente ocupando todo o espaço disponível
    flexDirection: 'row', // Organiza os botões lado a lado garantindo nosso grid improvisado
    gap: 10, 
  },


  operationButton: {
    backgroundColor: 'black',
    borderRadius: 15, 
    borderColor: '#333', 
    borderWidth: 1,
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  numberButton: { 
    backgroundColor: 'white',
    borderRadius: 15,
    flex: 1,
    borderWidth: 1,
    borderColor: '#ffffff', 
    justifyContent: 'center',
    alignItems: 'center',
  },

  equalsButton: {
    backgroundColor: 'blue',
    borderRadius: 15,
    flex: 2, 
    borderColor: '#333', 
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Textos
  operationText: {
    color: 'white', 
    fontSize: 32, 
    fontWeight: 'bold',
  },
  numberText: {
    color: 'black', 
    fontSize: 32, 
    fontWeight: 'bold',
  },
});