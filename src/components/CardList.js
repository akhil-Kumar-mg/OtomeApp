import React, { Component } from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import OtomeCard from "./OtomeCard";

export default class CardList extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <OtomeCard item={item} />}
          keyExtractor={item => item.id}
          numColumns="2"
        />
      </SafeAreaView>
    );
  }
}

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item"
  },
  {
    id: "bd7acbea-c1b146c2-aed5-3ad53abb28ba",
    title: "First Item"
  },
  {
    id: "3ac68afc-c605-48d-a4f8-fbd91aa97f63",
    title: "Second Item"
  },
  {
    id: "58694a0f-3da1-471f-bd96145571e29d72",
    title: "Third Item"
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 0,
    marginBottom: 0
  }
});
