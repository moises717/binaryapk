import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
ToastAndroid
} from 'react-native';


const App = () => {
  const [number, setNumber] = useState("2021");
	const [results, setResults] = useState([]);
	const [suma, setSuma] = useState([]);
	const [base, setBase] = useState("10");

	const calcular = (num = "") => {
    const patron = /[0-1]/g
    

    if(base === '2'){
      if(!patron.test(number)){
        ToastAndroid.show("Los binarios solo son 0 y 1", ToastAndroid.SHORT);
      }
    }
   

    if(base !== '10' & base !== '2'){
      ToastAndroid.show("Para cualcular decimales la base es 10 y para binarios es 2", ToastAndroid.SHORT);
    }
  

		const sumaResult = [];
		const numArray = num.split("").reverse();
		const res = numArray.map((recordNum, i) => {
			const numPotenciado = Math.pow(base, i);
			const finalResult = recordNum * numPotenciado;
			sumaResult.push(finalResult);
			return {
				finalResult,
				numPotenciado,
				recordNum,
				potencia: i
			};
		});

		setResults(res.reverse());
    

		setSuma(sumaResult);
	};

  

  return (
    <>
    <View style={styles.header}>
      <Text style={{fontWeight: 'bold', color: 'white'}}>BinaryApp v1.0</Text>
      <Text style={{fontSize: 9, color: 'white'}}>Para calcular un binario la base es 2</Text>
    <Text style={{fontSize: 9, color: 'white'}}>Para calcular un decimal la base es 10</Text>
    </View>
    
    <View style={styles.sectionContainer}>
      <View style={styles.inputContainer}>
  <View>
  <Text style={{ paddingHorizontal: 24}}>Base</Text>
      <TextInput value={base} style={styles.inputs} keyboardType="numeric" placeholder="Base" onChangeText={(e) => setBase(e ? e.toString() : "")} />
  </View>
     <View>
     <Text style={{ paddingHorizontal: 24}}>{base === '10' ? 'Decimales' : 'Binario'}</Text>
    
  <TextInput value={number} style={styles.inputs} placeholder="Decimales" onChangeText={(e) => setNumber(e ? e.toString() : "")} keyboardType="numeric" />
     </View>
     
      </View>
      <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => calcular(number)}
      >
        <Text style={{color: 'white'}}>DESCOMPONER Y CALCULAR</Text>
       
      </TouchableOpacity>
      
      </View>
    </View>
     
    <View style={styles.results}>
        <ScrollView style={styles.scroll} >
        
       {
          results.map((recordNum, i) => {
            return (
              <View key={i}>
              <View style={styles.lista}>
               <Text> {recordNum.recordNum} X </Text>
               <View style={styles.potenciaCon}><Text>{base} = {recordNum.finalResult} </Text>
                <View style={[styles.potencia, {left: base === '10' ? 15 : 7}]}>
                <Text style={{color: 'red', fontSize: 10}}>{recordNum.potencia} 
                <Text style={{color: 'green'}}> = {recordNum.numPotenciado}</Text>
                </Text>
                </View>
                </View>
              </View>
              </View>
            )
          })
        }

        </ScrollView>
        <View>
          <Text>Suma de resultados: {results.length > 0 && (
            <Text style={{fontWeight: 'bold'}}>{suma.reduce((a, b) => a + b, 0)	}</Text>

				)}</Text>
        </View>
    </View>
    <View style={styles.footer}><Text style={{color: 'white', textAlign: 'left', fontSize: 10, marginLeft: 8, marginTop: 7}}>  Desarrollo: Moises Barillas - Ing 1er año - UENICMLK masaya</Text></View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    height: 150
  },
  header: {
    paddingHorizontal: 24,
    backgroundColor: '#144552',
    paddingBottom: 5
  },
  inputContainer:{
    flexDirection: 'row'
  },
  inputs: {
    borderWidth: 1,
    width: 100,
    margin: 20,
    height: 50,
    borderColor: '#006d77'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#3d405b",
    padding: 10,
    borderRadius: 50
    
  },
 
  results:{
    paddingHorizontal: 15,
    marginTop: 20,
  
  },
  lista: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,

   
    
  },
  potenciaCon: {
    position: 'relative',
    height: 20,


  },
  potencia: {
    color: 'red',
    position: 'absolute',
    top: -10,
    left: 15
    
  },
  footer:{
    width: '100%',
    backgroundColor: '#144552',
    height: 40,
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    alignItems: 'center'

  },
  scroll:{
    height: 300,
    borderWidth: 1,
    borderColor: '#001d3d',
  },
  
 

});

export default App;
