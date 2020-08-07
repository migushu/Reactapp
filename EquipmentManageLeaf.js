import React, { Component,useEffect,useState } from "react";
import { Container, Header, Content, Icon, Picker, Form, View } from "native-base";
import { VictoryBar } from "victory-native";
import { ScrollView} from "react-native";
import { VictoryLine } from "victory-native";
import { getStyles, getYFunction } from "./data";
import viewStyles from "./styles/view-styles";

export default class EquipmentManageLeaf extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      selected: "key1",
    };}
    

  
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  render() {
    let showLine=this.state.selected=='key2'?<VictoryLine
    height={300}
    domain={[0, 5]}
    padding={75}
    data={[
      { x: 0, y: 1 },
      { x: 1, y: 3 },
      { x: 2, y: 2 },
      { x: 3, y: 4 },
      { x: 4, y: 3 },
      { x: 5, y: 5 }
    ]}
    interpolation="cardinal"
    //labels={() => "LINE"}
    style={{
      data: {
        stroke: "#822722",
        strokeWidth: 3
      },
      labels: { fontSize: 12 }
    }}
  />:null;
    return (
      <View>
          <Form>
            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="焊接设备一" value="key0" />
              <Picker.Item label="焊接设备二" value="key1" />
              <Picker.Item label="涂装设备一" value="key2" />
              <Picker.Item label="涂装设备二" value="key3" />
              <Picker.Item label="检测设备一" value="key4" />
            </Picker>
          </Form>
         {showLine}
          </View>
    );
  }
}