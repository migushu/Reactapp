import React, { Component } from 'react';
import { Container, Header, Content, DatePicker, Text, View,List, ListItem ,Card, CardItem, Body ,Button} from 'native-base';
import {SafeAreaView, FlatList,TextInput} from 'react-native';

const DATA = [
    {
        id: '序号',
        process: '工序',
        pTime:'完工日期',
        pPerson:'人员',
        qNums:'正品数',
        fNums:1,
      },
  {
    id: '1',
    process: '打磨',
    pTime:'2020/07/17',
    pPerson:'张三',
    qNums:20,
    fNums:1,
  },
  {
    id: '2',
    process: '装配',
    pTime:'2020/07/18',
    pPerson:'李四',
    qNums:19,
    fNums:1,
  },
  {
    id: '3',
    process: '涂料',
    pTime:'2020/07/18',
    pPerson:'王五',
    qNums:18,
    fNums:0,
  },
];

const Item=({id,process,pTime,pPerson,qNums,fNums})=>{
    return(
      <View >
        <ListItem>
              <Text>{id}    {process}      {pTime}     {pPerson}      {qNums}</Text>
            </ListItem>
      </View>
    );
  }


export default class ProcessLeaf extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "",showPlan:false };
    this.setText = this.setText.bind(this);
    this.setShow=this.setShow.bind(this);
    this.subMit=this.subMit.bind(this);
    this.renderItem=this.renderItem.bind(this);
  }
  setText(newVal) {
    this.setState({ text:newVal});
  }
  setShow(newVal) {
    this.setState({ showPlan:newVal });
  }
  subMit(){
      //alert("submit!");
      this.setShow(true);
  }
  renderItem=({item})=>(
    <Item id={item.id} process={item.process} pTime={item.pTime} pPerson={item.pPerson} qNums={item.qNums} fNums={item.fNums}/>
  );
  render() {
    let showP=this.state.showPlan?
    <View>
    <SafeAreaView>
    <FlatList
    data={DATA}
    renderItem={this.renderItem}
    keyExtractor={item=>item.id}
    >
    </FlatList>
  </SafeAreaView>
  <View style={{flexDirection: 'row'}}>
            
  <Button info style={{width:70,margin:20}}
  onPress={()=>alert('已完工')}
  ><Text> 完工 </Text></Button>
  <Button warning style={{width:70,margin:20}}
  onPress={()=>alert('已报警')}
  ><Text> 报警 </Text></Button>
  <Button danger style={{width:110,margin:20}}
  onPress={()=>this.props.navigation.navigate('ProcessFile')}
  ><Text> 工艺指导书 </Text></Button>          
  </View>
  </View>
  :null;
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
        <Text style={{margin:20,height: 40}}>请扫码：
            </Text>
            <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,margin:10,width:200}}
      onChangeText={this.setText}
      value={this.state.text}
      onSubmitEditing={this.subMit}
    />
            </View>
            <View>
            {showP}
            
            </View>
           
      </View>
    );
  }
}