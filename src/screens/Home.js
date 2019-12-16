import { Container, Tab, Tabs } from "native-base";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FloatingButton from "../components/FloatingButton";
import Section from "./Section";

export default class Home extends Component {
  static navigationOptions = {
    headerTitle: "Otome",
    headerStyle: {
      backgroundColor: "#000C66"
    },
    headerTintColor: "#FFF",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container style={styles.container}>
        <Tabs tabBarUnderlineStyle={{ backgroundColor: "transparent" }}>
          <Tab
            heading="Home"
            activeTextStyle={styles.activeTabStyle}
            textStyle={{ color: "#FFF", fontSize: 18 }}
            tabStyle={{ backgroundColor: "#000C66" }}
            activeTabStyle={{
              backgroundColor: "#000C66",
              color: "#FFF",
              border: 0
            }}
            style={{ backgroundColor: "#3F51B5" }}
          >
            <ScrollView>
              <Section title={"Shortcuts"} />
              <Section title={"Scenes"} />
            </ScrollView>
            <FloatingButton navigation={navigation} />
          </Tab>
          <Tab
            heading="Live"
            activeTextStyle={styles.activeTabStyle}
            textStyle={{ color: "#FFF", fontSize: 18 }}
            tabStyle={{ backgroundColor: "#000C66" }}
            activeTabStyle={{
              backgroundColor: "#000C66",
              color: "#FFF",
              border: 0
            }}
            style={{ backgroundColor: "#FFFFF1" }}
          >
            <ScrollView>
              <Section title={"Shortcuts"} />
              <Section title={"Scenes"} />
            </ScrollView>
          </Tab>
          <Tab
            heading="Area"
            activeTextStyle={styles.activeTabStyle}
            textStyle={{ color: "#FFF", fontSize: 18 }}
            tabStyle={{ backgroundColor: "#000C66" }}
            activeTabStyle={{
              backgroundColor: "#000C66",
              color: "#FFF",
              border: 0
            }}
            style={{ backgroundColor: "#FFFFF1" }}
          >
            <ScrollView>
              <Section title={"Shortcuts"} />
              <Section title={"Scenes"} />
            </ScrollView>
          </Tab>
          <Tab
            heading="Shortcuts"
            activeTextStyle={styles.activeTabStyle}
            textStyle={{ color: "#FFF", fontSize: 18 }}
            tabStyle={{ backgroundColor: "#000C66" }}
            activeTabStyle={{
              backgroundColor: "#000C66",
              color: "#FFF",
              border: 0
            }}
            style={{ backgroundColor: "#FFFFF1" }}
          >
            <ScrollView>
              <Section title={"Shortcuts"} />
              <Section title={"Scenes"} />
            </ScrollView>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00001a"
  },
  activeTabStyle: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 18
  },
  header: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "400",
    margin: 12
  }
});
