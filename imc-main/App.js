import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, Alert, YellowBox } from 'react-native'
import { faCalculator, faGasPump, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";



export default function App() {

  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);

  
  const magrezaGrave = "Muito Baixo do peso ,"
  const magrezaLeve = "Magreza Leve ,"
  const pesoNormal = "Peso Normal ,"
  const sobrePeso = "Sobre Peso ,"
  const obesidadeI = "Obesidade I ,"
  const obesidadeII = "Obesidade II ( Severa) ,"
  const obesidadeIII = "obesidade móbida ,"

  function calcular() {
    const imc = (peso / (altura * altura))
    const textoBase = 'Seu IMC: ' + imc.toFixed(0) ;

    if (imc <= 0) {
      alert(textoBase + ' Sem informações')
    }

    if (imc > 0 && imc < 17) {
      alert(magrezaGrave + textoBase)
    }

    if (imc >= 17 && imc < 18.5) {
      alert(magrezaLeve + textoBase)
    }

    if (imc >= 18.5 && imc < 24.9) {
      alert(pesoNormal + textoBase)
    }

    if (imc >= 24.9 && imc < 29.9) {
      alert( sobrePeso + textoBase)
    }

    if (imc >= 29.9 && imc < 35) {
      alert(obesidadeI + textoBase)
    }

    if (imc >= 35 && imc < 40) {
      alert(obesidadeII + textoBase)
    }

    if (imc >= 40) {
      alert(obesidadeIII + textoBase)
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <FontAwesomeIcon icon={faCoffee} color={'#ffffff'} size={50} />
        <Image
          source={require('./assets/imagens/imc.jpg')}
          style={{ width: 200, height: 200, marginLeft: 20, marginRight: 10, borderRadius: 300 }}
        />
        <FontAwesomeIcon icon={faCoffee} color={'white'} size={50} />
      </View>

      <View style={styles.resultado}>

        <Text style={styles.titulo}>Edivan - IMC para Adultos</Text>
        <TextInput placeholderTextColor='#FFFFFF' placeholder="Peso: " style={styles.inputGas} keyboardType='numeric' onChangeText={(numero) => setPeso(numero)}></TextInput>
        <TextInput placeholderTextColor='#FFFFFF' placeholder="Altura:" style={styles.inputEtanol} keyboardType='numeric' onChangeText={(numero) => setAltura(numero)} ></TextInput>
        <View style={{ alignItems: 'center', marginTop: 30 }}>
          <TouchableOpacity style={styles.botao} onPress={calcular} >
            <View style={styles.btnArea}>
              <FontAwesomeIcon icon={faCalculator} color={'#009159'} size={50} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ height: 32, backgroundColor: '#015835' }}></View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    backgroundColor: '#fffff2'
  },
  header: {
    flex: 1,
    backgroundColor: '#015835',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  resultado: {
    flex: 2,
    backgroundColor: '#ffffff'
  },
  titulo: {
    marginTop: 22,
    marginBottom: 20,
    fontSize: 30,
    color: '#004080',
    textAlign: 'center',
    fontWeight: 'bold'

  },
  inputGas: {
    margin: 10,
    fontSize: 25,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 1,
    padding: 12,
    backgroundColor: '#025a9e'


  },
  inputEtanol: {
    margin: 10,
    fontSize: 25,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 1,
    padding: 12,
    backgroundColor: '#009159'


  }, botao: {
    width: 100,
    height: 65,
    borderWidth: 2,
    borderColor: '#009159',
    borderRadius: 25


  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});


/*
Adição de bibliotecas
yarn add react-native-svg
yarn add @fortawesome/fontawesome-svg-core
yarn add @fortawesome/free-solid-svg-icons
yarn add @fortawesome/react-native-fontawesome
Escolher icones
https://fontawesome.com/v5.15/icons?d=gallery&p=2
*/
