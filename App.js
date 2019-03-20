import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';

var width = Dimensions.get('window').width / 1.25;

export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text>Temperature Converter</Text>
          <Text>By Cristiano Carvalho Modesto</Text>
        </View>
        <View style={styles.boxes}>
          <Text style={styles.titleBox}>Temperatura em ºC</Text>
          <TextInput style={styles.tempDefault} editable={true} maxLength={15} keyboardType='numeric' />
          <Text style={styles.titleBox}>Temperatura em ºF</Text>
          <TextInput style={styles.tempFire} editable={false} maxLength={15} />
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
  titleBox: {
    fontSize: 20
  },
  tempDefault: {
    backgroundColor: '#ffe6ff',
    alignSelf: 'stretch',
    textAlign: 'center',
    height: 50,
    width: width,
    borderColor: 'gray', 
    borderWidth: 3,
    fontSize: 20
  },
  tempFire: {
    backgroundColor: '#f2e6ff',
    alignSelf: 'stretch',
    textAlign: 'center',
    height: 50,
    width: width,
    borderColor: 'gray', 
    borderWidth: 3,
    fontSize: 20
  }
});
