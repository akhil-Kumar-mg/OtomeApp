import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import CardList from "./List";

export default class Section extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{this.props.title}</Text>
        </View>
        <CardList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { margin: 20, marginBottom: 5, marginTop: 25 },
  headerTitle: { color: "#e9e9e9", fontSize: 14 }
});
