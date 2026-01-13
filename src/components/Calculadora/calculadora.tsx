import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

//Irei fazer anotações para melhorar minha fixação das tags e mostrar que sei o que tô fazendo

export default function Calculator() {
  return (
    // equivalente a div
    <View>

      <View>
         {/* Equivalente ao button porém só cria area clicavel*/}
        <TouchableOpacity>
            <Text>AC</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
            <Text>+/-</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
            <Text>/</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
            <Text>Erase</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text>7</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text>8</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text>9</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text>X</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text>4</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text>5</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text>6</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text>-</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text>1</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text>2</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text>3</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text>+</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
            <Text>0</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text>.</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text>=</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}