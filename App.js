import React, { Component } from "react";
import Navigation from "./src/navigation";
import { StatusBar, StyleSheet, Platform } from "react-native";
import { Container } from "native-base";

class App extends Component {
  render() {
    return (
      <Container>
        <Navigation />
      </Container>
    );
  }
}

export default App;
