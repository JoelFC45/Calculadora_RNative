import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useCalculator } from "./script";
import { styles } from "./styles";
export default function Calculator() {
  const {
    addNumber,
    displayValue,
    addOperator,
    doting,
    deleting,
    allClear,
    plusMinus,
  } = useCalculator();

  return (
    <View style={styles.containerCalculadora}>
      {/* Vou fazer umas anotações para fixar alguns padrões */}
      <View style={styles.displayContainer}>
        <Text style={{ color: "white", fontSize: 60 }}>{displayValue}</Text>
      </View>

      {/* Container que segura todas as linhas, ele deve existir para fazer um grid improvisado com os botões */}
      <View style={styles.buttonsContainer}>
        {/* Usando o estilo ROW eu consigo organizar cada linha de botões e garantir que chegando no limite que eu coloquei o flex passa o botão pra proxima linha */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.operationButton}>
            <Text style={styles.operationText} onPress={() => allClear()}>
              AC
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.operationButton}
            onPress={() => plusMinus}
          >
            <Text style={styles.operationText}>+/-</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.operationButton}
            onPress={() => addNumber("/")}
          >
            <Text style={styles.operationText}>/</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.numberButton}>
            <Text
              style={[styles.numberText, { fontSize: 18 }]}
              onPress={() => deleting()}
            >
              DEL
            </Text>
          </TouchableOpacity>
        </View>

        {/* faço outra linha com o ROW aí eu garanto que todos os elementos dentro dela vão estar organizados e abaixo da anterior */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => addNumber("7")}
          >
            <Text style={styles.numberText}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => addNumber("8")}
          >
            <Text style={styles.numberText}>8</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => addNumber("9")}
          >
            <Text style={styles.numberText}>9</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.operationButton}
            onPress={() => addNumber("X")}
          >
            <Text style={styles.operationText}>X</Text>
          </TouchableOpacity>
        </View>

        {/* LINHA 3 */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => addNumber("4")}
          >
            <Text style={styles.numberText}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => addNumber("5")}
          >
            <Text style={styles.numberText}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => addNumber("6")}
          >
            <Text style={styles.numberText}>6</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.operationButton}
            onPress={() => addNumber("-")}
          >
            <Text style={styles.operationText}>-</Text>
          </TouchableOpacity>
        </View>

        {/* LINHA 4 */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => addNumber("1")}
          >
            <Text style={styles.numberText}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => addNumber("2")}
          >
            <Text style={styles.numberText}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => addNumber("3")}
          >
            <Text style={styles.numberText}>3</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.operationButton}
            onPress={() => addNumber("+")}
          >
            <Text style={styles.operationText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* LINHA 5 */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => addNumber("0")}
          >
            <Text style={styles.numberText}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.operationButton}
            onPress={() => doting()}
          >
            <Text style={styles.operationText}>.</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.equalsButton}
            onPress={() => addNumber("X")}
          >
            <Text style={styles.operationText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
