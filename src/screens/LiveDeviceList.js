import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container, Header, Content, Card, CardItem, Body } from "native-base";

export default class LiveDeviceList extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem header>
              <Text>Card</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>//Your text here</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Card</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>//Your text here</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Card</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>//Your text here</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Card</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>//Your text here</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f39f"
  }
});
