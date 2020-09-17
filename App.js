import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput , Button} from 'react-native';
import Mybutton from './components/Mybutton.js'
export default function App() {
  const [input,setInput] = useState('')
  const [color,setColor] = useState('red')
  return (
    <View style={styles.container}>
      <Image source={{uri:'https://www.igeargeek.com/_nuxt/img/835647d.png'}}
        style={styles.logo}
      />
      <Text style={styles.title}>Hello World</Text>
      <TextInput value={input} onChangeText={(text) => {setInput(text)}} placeholder="Input here" style={styles.input}/>
      <Text style={{ fontSize: 18, marginTop:20,color:color}}>{input}</Text>
      <View style={styles.buttonLayout}>
        <Mybutton title="Red" color="red" onChangeColor={(color) =>  {setColor(color)}} />
        <Mybutton title="Blue" color="blue" onChangeColor={(color) =>  {setColor(color)}} />
        <Mybutton title="Green" color="green" onChangeColor={(color) =>  {setColor(color)}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width : 150,
    height :150,
  },
  title :{
    fontSize :24,
    fontWeight :"bold",
    marginTop :20,
  },
  input: {
    height:40,
    borderColor:"gray",
    borderStyle:"solid",
    borderWidth: 1,
    width:'100%',
    margin:20,
  },
  buttonLayout:{
    flexDirection:"row",
    marginTop:20,
  }
});