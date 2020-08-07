import React, { Component } from 'react';
import { Container, Header, Content, DatePicker, Text, View,List, ListItem ,Card, CardItem, Body, Button } from 'native-base';
import {SafeAreaView, FlatList} from 'react-native';

const DATA = [
  {
    id: '1',
    title: '20Q0201118',
    nums:3,
    onlineNums:1,
    offlineNums:1,
  },
  {
    id: '2',
    title: '20C02020345',
    nums:7,
    onlineNums:3,
    offlineNums:1,
  },
  {
    id: '3',
    title: '20X344239',
    nums:5,
    onlineNums:0,
    offlineNums:0,
  },
];

const Item=({title,nums,onlineNums,offlineNums})=>{
  return(
    <View >
      <Card>
            <CardItem header button onPress={() => alert("This is Card Header")}>
              <Text>产品代码：{title}</Text>
            </CardItem>
            <CardItem button onPress={() => alert("This is Card Body")}>
              <Body>
                <Text>
                 所需数量:{nums}   上线数量:{onlineNums}  下线数量:{offlineNums}
                </Text>
              </Body>
            </CardItem>
            <CardItem footer button onPress={() => alert("This is Card Footer")}>
              <Text>操作</Text>
            </CardItem>
          </Card>
    </View>
  );
}


export default class PlanLeaf extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date(),showPlan:false };
    this.setDate = this.setDate.bind(this);
    this.setShow=this.setShow.bind(this);
    this.renderItem=this.renderItem.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
    this.setShow(true);
  }
  setShow(newVal) {
    this.setState({ showPlan: newVal });
  }
  renderItem=({item})=>(
    <Item title={item.title} nums={item.nums} onlineNums={item.onlineNums} offlineNums={item.offlineNums}/>
  );
  render() {
    let showP=this.state.showPlan?<SafeAreaView>
    <FlatList
    data={DATA}
    renderItem={this.renderItem}
    keyExtractor={item=>item.id}
    >
    </FlatList>
  </SafeAreaView>:null;
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
        <Text style={{margin:10}}>选择日期：
            </Text>
          <DatePicker
            defaultDate={new Date(2020, 6, 20)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2022, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            />
            </View>
            <View>
            {showP}
            </View>
            
      </View>
    );
  }
}