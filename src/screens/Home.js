import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { Container, Card, CardItem, Right, Icon, Body, Row } from "native-base";
import CardListItem from "../components/CardListItem";

export default class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <CardListItem navigation={this.props.navigation} item={item} />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
          navigation={this.props.navigation}
        />
      </SafeAreaView>
    );
  }
}

const DATA = [
  {
    title: "Shortcuts",
    data: ["Party", "Funeral", "Wedding"]
  },
  {
    title: "Scenes",
    data: ["Bedroom", "Dining Hall", "Kitchen"]
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00001a"
  },
  header: {
    color: "white",
    fontSize: 18,
    fontWeight: "400",
    margin: 12
  }
});
