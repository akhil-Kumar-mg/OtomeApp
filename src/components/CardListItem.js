import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card, CardItem, Body, Right, Switch } from "native-base";

export default class CardListItem extends Component {
  render() {
    const { navigation, item } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("SHORTCUTS")}>
          <Card style={styles.card}>
            <CardItem>
              {/* <Right>
                <Switch />
              </Right> */}
              <Body style={styles.card}>
                <Text>{item}</Text>
              </Body>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow"
  },
  card: {
    backgroundColor: "red"
  }
});
