import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

//Irei fazer anotações para melhorar minha fixação das tags e mostrar que sei o que tô fazendo

export default function Calculator() {
  return (
    // equivalente a div
    <View>

      <View style={styles.containerCalculadora}>

        <View>
         
         {/* Equivalente ao button porém só cria area clicavel*/}
          <TouchableOpacity style={styles.operationButton}>
            <Text style={styles.operationText}>AC</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.operationButton}>
            <Text style={styles.operationText}>+/-</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.operationButton}>
            <Text style={styles.operationText}>/</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.numberButton}>
            <Text style={styles.operationText}>Erase</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.numberButton}>
            <Text style={styles.numberText}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.numberButton}>
            <Text style={styles.numberText}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.numberButton}>
            <Text style={styles.numberText}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.operationButton}>
            <Text style={styles.operationText}>X</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.numberButton}>
            <Text style={styles.numberText}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.numberButton}>
            <Text style={styles.numberText}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.numberButton}>
            <Text style={styles.numberText}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.operationButton}>
            <Text style={styles.operationText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.numberButton}>
            <Text style={styles.numberText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.numberButton}>
            <Text style={styles.numberText}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.numberButton}>
            <Text style={styles.numberText}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.operationButton}>
            <Text style={styles.operationText}>+</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.numberButton}>
            <Text style={styles.numberText}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.operationButton}>
            <Text style={styles.operationText}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.equalsButton}>
            <Text style={styles.operationText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
}