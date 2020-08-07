/**
 * functionButton
 * to 
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React,{Component} from 'react';
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
let widthOfIcon=Dimensions.get('window').width*0.23;

export default class functionButton  extends Component {
  constructor(props){
    super(props);
    this.state={
      inputedNum:"",
      inputedPW:"",
    };
    this.updatePW=this.updatePW.bind(this);
  }
  updateNum(newText){
    this.setState((oldState)=>{
      for(var aName in oldState){
        console.log(aName);
        console.log(oldState[aName]);
      }
      return {
        inputedNum:newText,
        aBrandnewStateVariable:'I am a variable',
      };
    },this.changeNumDown);
  }
  changeNumDown(){
    console.log("RN has changed inputed num");
  }
  updatePW(newText){
    this.setState(()=>{
      return{
        inputedPW:newText,
      };
    });
  }
  handleClick=()=>{
    let REQUEST_URL='http://10.1.33.1:18101/authorization'
    let map={
      method:'POST'
    };
    let privateHeaders={
      'Content-Type':"text/plain",
      'User-Agent':'testAgent'
    }
    map.headers=privateHeaders;
    map.follow=20;
    map.timeout=0;
    map.size=0;
    console.log(this.state.inputedNum);
    console.log(this.state.inputedPW);
    let userData="['password','"+this.state.inputedNum+"','"+this.state.inputedPW+"']";
    map.body=userData;
    let key="";
    fetch(REQUEST_URL,map).then(
      (result)=>{
        // console.log(result.url);
        // console.log(result.ok);
        // console.log(result.status);
        result.json().then(
          (obj)=>{
            //console.log('result body');
            //console.log(obj);
            console.log(obj.result);
            if (obj.result!=""){
            this.testAPI(obj.result);
            alert('登录成功');
            //const navigation = useNavigation();
            //this.navigation.navigate('Home');
            this.props.navigation.navigate('Home');
          }else{
            alert('用户名或密码错误');
          }
          }
        ).catch(
          (error)=>{
            console.log('get an error!!!!!');
            console.log(error);
            alert('登录失败');
            //this.navigation.navigate('Home');
          }
        )
      }
    ).catch((error)=>{
      console.log('error'+error);
    });
  }
  testAPI(key){
    let REQUEST_URL='http://10.1.33.1:18101/api'
    let map={
      method:'POST'
    };
    let privateHeaders={
      'Authorization':key,
      'Content-Type':"text/plain",
      'User-Agent':'testAgent'
    }
    map.headers=privateHeaders;
    map.follow=20;
    map.timeout=0;
    map.size=0;
    map.body=JSON.stringify({
      "jsonrpc":"2.0",
      "method":"api.db.connsql",
      "params":[
        "default",
        "select sysdate from dual"
      ],
      "id":"7b1c353f-f92c-4265-b6a3-cbbf5b32d708"
      });
    fetch(REQUEST_URL,map).then(
      (result)=>{
        console.log(result.url);
        console.log(result.ok);
        console.log(result.status);
        result.json().then(
          (obj)=>{
            console.log('result body');
            console.log(obj);
          }
        ).catch(
          (error)=>{
            console.log('get an error');
            console.log(error);
          }
        )
      }
    ).catch((error)=>{
      console.log('error'+error);
    });
  }
  render(){
    return(
      <View style={styles.container}>
        <TextInput style={styles.textInputStyle}
         placeholder={'请输入用户名'}
         onChangeText={(newText)=>this.updateNum(newText)}/>
        <Text style={styles.textPromtStyle}>
          您输入的用户名：{this.state.inputedNum}
        </Text>
        <TextInput style={styles.textInputStyle} 
        placeholder={'请输入密码'}
        secureTextEntry={true}
        onChangeText={this.updatePW} />
        <Button title="确定" onPress={
            ()=>{this.handleClick();}
          }>
        </Button>
      </View>
    );
  }
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
});