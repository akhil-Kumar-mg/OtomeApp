import { Container, Text } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default ActionList = props => {
  const { navigation } = props;
  return (
    <Container style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("CREATE_SHORTCUT")}
      >
        <Text style={{ color: "#FFF", fontSize: 20 }}>Create a ShortCut</Text>
        {/* <Text style={{ color: "#FFF", flexWrap: "wrap" }}> */}
        {/* Controls actions on multiple device from a single event */}
        {/* </Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("CREATE_AREA")}
      >
        <Text style={{ color: "#FFF", fontSize: 20 }}>Create an Area</Text>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#000"
  },
  item: {
    minHeight: 150
  }
});
