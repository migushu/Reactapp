import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginLeaf from './LoginLeaf';
import MainLeaf from './MainLeaf';
import { createDrawerNavigator } from '@react-navigation/drawer';
import './Global';
import DataConn from './DataConn';
import {Icon,Button} from 'native-base';
import LoginComponent from './LoginComponent';
import FloatingLabelExample from './FloatingLabelExample.js';
import PlanLeaf from './PlanLeaf';
import ProcessLeaf from './ProcessLeaf';
import ProcessFile from './ProcessFile';
import EquipmentManageLeaf from './EquipmentManageLeaf';

const theme = {
  Button: {
    raised: true,
  },
};
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    <Button
    onPress={()=>navigation.navigate('Details')}
    ><Text>Go to Details</Text></Button>
    </View>
  );
}
function DetailScreen({navigation}){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Details Screen</Text>
      <Button
      title="Go to Details again"
      onPress={()=>navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={()=>navigation.navigate('Home')}/>
      <Button title="Go to Login" onPress={()=>navigation.navigate('LoginLeaf')}/>
      <Button
      title="Go back to first screen in stack"
      onPress={()=>navigation.popToTop()}
      /> 
    </View>
    
  );
}



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginC">
        <Stack.Screen name="Home" 
        component={HomeScreen} 
        options={{title:'OverView'}}
        />
         <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="LoginLeaf" component={LoginLeaf} options={{title:'登录'}} />
        <Stack.Screen name="MainLeaf" component={MainLeaf} options={{title:'主页'}} />
        <Stack.Screen name="PlanLeaf" component={PlanLeaf} options={{title:'计划管理'}} />
        <Stack.Screen name="ProcessLeaf" component={ProcessLeaf} options={{title:'生产过程管理'}} />
        <Stack.Screen name="LoginC" component={LoginComponent} options={{title:'登录页'}} />
        <Stack.Screen name="ProcessFile" component={ProcessFile} options={{title:'工艺指导书'}} />
        <Stack.Screen name="EquipmentManageLeaf" component={EquipmentManageLeaf} options={{title:'设备管理'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;