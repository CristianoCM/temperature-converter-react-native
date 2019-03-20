import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';

var width = Dimensions.get('window').width / 1.25;

export default class App extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = { c: 0, f: 0 }
    this.calcular = this.calcular.bind(this)
  }

  calcular() {
    let fah = (this.state.celsius * 9/5) + 32;
    
    let st = this.state;
    st.f = fah;
    this.setState(st);
  }

  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.title}>
          <Text>Temperature Converter</Text>
          <Text>By Cristiano Carvalho Modesto</Text>
        </View>
        
        <View style={styles.boxes}>
          <Text style={styles.titleBox}>Temperatura em ºC</Text>
          <TextInput style={styles.tempDefault} editable={true} maxLength={15} keyboardType='numeric' value={this.state.c} onChangeText={(celsius) => {this.setState({celsius})}} />
          <Text style={styles.titleBox}>Temperatura em ºF</Text>
          <Text style={styles.tempFire}>{this.state.f}</Text>

          <TouchableOpacity style={styles.botaoCalcular} onPress={this.calcular}>
            <Text style={styles.calcularText}>Calcular</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.footer}>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 0.25
  },
  boxes: {
    flex: 0.5
  },
  footer: {
    flex: 0.25
  },
  titleBox: {
    fontSize: 20
  },
  tempDefault: {
    backgroundColor: '#ffe6ff',
    alignSelf: 'stretch',
    textAlign: 'center',
    height: 50,
    width: width,
    fontSize: 30
  },
  tempFire: {
    alignSelf: 'stretch',
    textAlign: 'center',
    height: 50,
    width: width,
    fontSize: 30
  },
  botaoCalcular: {
    backgroundColor: 'green'
  },
  calcularText: {
    fontSize: 18,
    alignSelf: 'center',
    padding: 25,
    color: 'white',
    fontWeight: 'bold'
  }
});
