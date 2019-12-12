import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default class ShortCuts extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate("S")}>
        <View>
          <Text>Akhil</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
