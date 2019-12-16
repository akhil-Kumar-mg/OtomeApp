import { Button, Container, Content, Input, Item, View } from "native-base";
import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";

export default class CreateArea extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View>
            <Text style={styles.heading}>Create an area</Text>
          </View>
          <Item regular style={styles.inputBox}>
            <Input placeholder="Type area name here" />
          </Item>
        </Content>
        <Button block style={styles.nextButton}>
          <Text style={{ color: "white", fontSize: 20 }}>Next</Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    color: "white"
  },
  heading: {
    flex: 1,
    color: "#FFFFF1",
    marginTop: 100,
    marginLeft: 20,
    fontSize: 25
  },
  inputBox: {
    flex: 1,
    borderColor: "#FFFFF1",
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 4,
    backgroundColor: "#FFFFF1"
  },
  nextButton: {
    minHeight: 60,
    backgroundColor: "#222831"
  }
});
