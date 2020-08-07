/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React,{Component,useState} from 'react';
import {
  AppRegistry,
  Dimensions,
  PixelRatio,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

let widthOfMargin=Dimensions.get('window').width*0.05;



const  ScanCode = () => {
  const [text, setText] = useState('');
  const [condition, setCondition] = useState('');
  handleClick=()=>{
   

  }
  return (
    <View  style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="请扫码"
        onChangeText={text => setText(text)}
        onSubmitEditing={handleClick}
        defaultValue={text}
      />
    </View>
  )
}


let styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:'white',
  },
  textInputStyle:{
    margin:widthOfMargin,
    backgroundColor:'gray',
    fontSize:20,
  },
  textPromtStyle:{
    margin:widthOfMargin,
    fontSize:20,
  },
  bigTextPromt:{
    margin:widthOfMargin,
    backgroundColor:'gray',
    color:'white',
    textAlign:'center',
    fontSize:30,
  },
  button:{backgroundColor:'gray',},
});