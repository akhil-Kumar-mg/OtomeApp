import React, { Component } from "react";
import { View, Text } from "react-native";
import CardList from "../components/CardList";

export default class Section extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ margin: 20, marginBottom: 5, marginTop: 10 }}>
          <Text style={{ color: "#000", fontSize: 16, fontWeight: "600" }}>
            {this.props.title}
          </Text>
        </View>
        <CardList />
      </View>
    );
  }
}
