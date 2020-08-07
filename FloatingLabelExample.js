import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { FlatList, StyleSheet, Text, View } from 'react-native';
export default class FloatingLabelExample extends Component {
  render() {
    return (
        <View>
          <Form>
            <Item floatingLabel>
              <Label>用户名</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>密码</Label>
              <Input />
            </Item>
          </Form>
        </View>
    );
  }
}