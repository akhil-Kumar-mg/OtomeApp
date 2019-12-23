import { Body, Card, CardItem, Button, Icon, Right } from "native-base";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

class OtomeCard extends Component {
  render() {
    const { navigation, item } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SHORTCUT_DETAIL");
          }}
        >
          <Card style={styles.card}>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </Card>
        </TouchableOpacity>
        <Button
          style={{
            backgroundColor: "transparent",
            position: "absolute",
            top: 0,
            right: 0
          }}
        >
          <Icon active name="power" style={{ color: "green" }} />
        </Button>
      </View>
    );
  }
}

export default withNavigation(OtomeCard);

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    margin: 5,
    borderWidth: 0
  },
  card: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 8,
    minHeight: 80,
    maxHeight: 80,
    backgroundColor: "#000",
    borderColor: "#000"
  },
  cardItem: {
    backgroundColor: "#000",
    margin: 0
  },
  title: {
    color: "#FFF"
    // marginLeft: 30
  }
});
