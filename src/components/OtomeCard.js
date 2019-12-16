import { Body, Card, CardItem } from "native-base";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class OtomeCard extends Component {
  render() {
    const { navigation, item } = this.props;
    return (
      <View style={styles.container}>
        <View
          style={{ margin: 5, borderWidth: 0, backgroundColor: "transparent" }}
        >
          <Card style={styles.card}>
            <CardItem style={styles.cardItem}>
              <Body>
                <Text>{item.title}</Text>
              </Body>
            </CardItem>
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    borderWidth: 0,
    backgroundColor: "transparent"
  },
  card: { borderRadius: 8, minHeight: 80, backgroundColor: "white" },
  cardItem: {
    backgroundColor: "white",
    margin: 0
  }
});
