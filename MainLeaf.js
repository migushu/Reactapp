import React,{Component,useState} from 'react';
import {
  AppRegistry,
  Dimensions,
  PixelRatio,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  StatusBar,
  Alert,
} from 'react-native';
import { useNavigation,NavigationContainer } from '@react-navigation/native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text,Icon,Button } from 'native-base';
import DataConn from "./DataConn";

let widthOfMargin=Dimensions.get('window').width*0.05;
var userFunction=new Array("1","2","3","4","5","6","7","8");


export default class MainLeaf extends Component {
  constructor(props){
    super(props);
    this.state={
      inputedNum:"1",
      inputedPW:"",
    };
  }
  SwitchFunction(functionCode){
    {/* <Button transparent vertical>
            <Icon name='barschart' type="AntDesign" style={{fontSize: 60,}}/>
            <Text>计划管理</Text>
            </Button> */}
    switch(functionCode){
      case "1":
        return (
          <ListItem thumbnail key={0}>
            <Left >
            <Icon name='barschart' type="AntDesign" style={{fontSize: 40,width:40}}/>
            
            </Left>
            <Body>
                <Text>计划管理</Text>
                <Text note>对生产计划的查询，执行，修改等操作</Text>
              </Body>
              <Right>
              <Button 
              transparent 
              onPress={()=>this.props.navigation.navigate('PlanLeaf')}>
                  <Text>View</Text>
                </Button>
              </Right>
          </ListItem>);
      case "2":
        return (
          <ListItem thumbnail key={1}>
            <Left >
            <Icon name='rocket1' type="AntDesign" style={{fontSize: 40,width:40}}/>
            
            </Left>
            <Body>
                <Text>生产管理</Text>
                <Text note>对生产全流程的追踪汇报</Text>
              </Body>
              <Right>
              <Button 
              transparent 
              onPress={()=>this.props.navigation.navigate('ProcessLeaf')}>
                  <Text>View</Text>
                </Button>
              </Right>
          </ListItem>);
      case "3":
        return (
          <ListItem thumbnail key={2}>
            <Left >
            <Icon name='dashboard' type="AntDesign" style={{fontSize: 40,width:40}}/>
            
            </Left>
            <Body>
                <Text>设备管理</Text>
                <Text note>生产设备的管理，包含维修，保养计划</Text>
              </Body>
              <Right>
              <Button 
              transparent 
              onPress={()=>this.props.navigation.navigate('EquipmentManageLeaf')}>
                  <Text>View</Text>
                </Button>
              </Right>
          </ListItem>);
      case "4":
        return (
          <ListItem thumbnail key={3}>
            <Left >
            <Icon name='areachart' type="AntDesign" style={{fontSize: 40,width:40}}/>
            </Left>
            <Body>
                <Text>质量管理</Text>
                <Text note>产品质量的追溯与分析</Text>
              </Body>
              <Right>
              <Button 
              transparent 
              onPress={()=>this.props.navigation.navigate('Home')}>
                  <Text>View</Text>
                </Button>
              </Right>
          </ListItem>);
      case "5":
        return (
          <ListItem thumbnail key={4}>
            <Left >
            <Icon name='home' type="AntDesign" style={{fontSize: 40,width:40}}/>
            </Left>
            <Body>
                <Text>库房管理</Text>
                <Text note>对库房的管理与记录</Text>
              </Body>
              <Right>
              <Button 
              transparent 
              onPress={()=>this.props.navigation.navigate('Home')}>
                  <Text>View</Text>
                </Button>
              </Right>
          </ListItem>);
      case "6":
        return (
          <ListItem thumbnail key={5}>
            <Left >
            <Icon name='bells' type="AntDesign" style={{fontSize: 40,width:40}}/>
            </Left>
            <Body>
                <Text>Andon处理</Text>
                <Text note>对现场各类报警信息的处理</Text>
              </Body>
              <Right>
              <Button 
              transparent 
              onPress={()=>this.props.navigation.navigate('Home')}>
                  <Text>View</Text>
                </Button>
              </Right>
          </ListItem>); 
      default:
        return null;
    }
  }
  async TestAPI(){
    let sql="select sysdate from dual";
    let res=await DataConn.ExSql(sql);
    console.log(res);
  }
  render(){
    var pages=[];
    var rows=[];
    var i=0
    for (var i in userFunction){
      rows.push(this.SwitchFunction(userFunction[i]));
      i++;
      if  (i%3==2){
        pages.push(rows);
        rows=[];
      }
    }
    let sql="select sysdate from dual";
    let res=DataConn.RunSql(sql);
    //console.log(res);
    //DataConn.TestClick();
    return(
      <View style={styles.container}>
      {/* <Button title="Test" onPress={()=>{
        this.TestAPI();
        }}>
      </Button> */}
      {pages}
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
  button:{backgroundColor:'gray',},
});