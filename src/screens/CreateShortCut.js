import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Container, Button, Content, Input, Item } from "native-base";

export default class CreateShortCut extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View>
            <Text>Create an area</Text>
          </View>
          <View style={styles.margin}>
            <Item regular>
              <Input placeholder="Type area name here" />
            </Item>
          </View>
        </Content>
        <Button full light>
          <Text>Next</Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    color: "white"
  },
  inputBox: {
    margin: 10,
    color: "white"
  }
});
