import React, { Component } from "react";
import Navigation from "./src/navigation";
import { StatusBar, StyleSheet, Platform } from "react-native";
import { Container } from "native-base";

class App extends Component {
  render() {
    return (
      <Container style={S.statusBar}>
        <Navigation />
      </Container>
    );
  }
}

const S = StyleSheet.create({
  statusBar: {
    paddingTop: 0
  }
});

export default App;
