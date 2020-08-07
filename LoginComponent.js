/**
 * Sample React Native App
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
  Alert,
  Image,
} from 'react-native';
import { Button,Container, Header, Content, Form, Item, Input, Label,Thumbnail } from 'native-base';
import { useNavigation } from '@react-navigation/native';


let widthOfMargin=Dimensions.get('window').width*0.05;

export default class LoginComponent extends Component {
  state = { username: "", password: "" }
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
        //console.log(aName);
        //console.log(oldState[aName]);
      }
      return {
        inputedNum:newText,
        aBrandnewStateVariable:'I am a variable',
      };
    },this.changeNumDown);
  }

  updatePW(newText){
    this.setState(()=>{
      return{
        inputedPW:newText,
      };
    });
  }
  handleClick=()=>{
    console.log(global.CompanyIcon);
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
    //console.log(this.state.inputedNum);
    //console.log(this.state.inputedPW);
    let userData="['password','"+this.state.username+"','"+this.state.password+"']";
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
            //console.log(obj.result);
            if (obj.result!=""){
            //this.testAPI(obj.result);
            global.UserKey=obj.result;
            this.props.navigation.navigate('MainLeaf', {
              itemId: 86,
              otherParam: obj.result,
            });
            //alert('登录成功');
            //const navigation = useNavigation();
            //this.navigation.navigate('Home');
            this.props.navigation.navigate('MainLeaf');
          }else{
            alert('用户名或密码错误');
            //let nextPage='Details';
            //this.props.navigation.navigate(nextPage);
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
  render(){
    return(
      //tks https://github.com/GeekyAnts/NativeBase/issues/1977
      <View >
        <Image
        style={styles.iconStyle}
        source={require('./images/RIAMB.png')}
      />
      <Form>
        <Item floatingLabel>
          <Label>用户名</Label>
          <Input  
          style={styles.textInputStyle}
          returnKeyType="next"
          clearButtonMode="always"
          autoCapitalize="none"
          autoCorrect={false}
          value={this.state.username}
          onChangeText={(text) => this.setState({ username: text })}
                />
        </Item>
        <Item floatingLabel last>
          <Label>密码</Label>
          <Input
          style={styles.textInputStyle}
          returnKeyType="go"
          clearButtonMode="always"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text })} />
        </Item>
        <Button 
        bordered   
        info
        block
        style={styles.textPromtStyle}
        onPress={()=>this.handleClick()}
        >
        <Text>登录</Text>
        </Button>
      </Form>
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
    margin:5,
  },
  textPromtStyle:{
    margin:widthOfMargin,
    fontSize:20,
  },
  bigTextPromt:{
    margin:widthOfMargin,
    
  },
  iconStyle:{
    marginTop:30,
    alignItems:"center",
    height:100,
    width:400,
    resizeMode:'contain' ,
    alignItems:'center',
    justifyContent: 'center',
    
  },
});

