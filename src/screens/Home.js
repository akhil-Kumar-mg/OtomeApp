import { Container, Tab, Tabs } from "native-base";
import React, { Component } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FloatingButton from "../components/FloatingButton";
import Section from "../components/Section";

export default class Home extends Component {
  static navigationOptions = {
    title: "Otome",
    headerTintColor: "#FFF",
    headerStyle: {
      backgroundColor: "#1f1f1f"
    }
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container style={styles.container}>
        <Tabs tabBarUnderlineStyle={{ backgroundColor: "#FFF" }}>
          <Tab
            heading="HOME"
            activeTextStyle={styles.activeTextStyle}
            textStyle={styles.textStyle}
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
            style={styles.tabBody}
          >
            <ScrollView>
              <Section title={"Shortcuts"} />
              <Section title={"Scenes"} />
            </ScrollView>
            <FloatingButton navigation={navigation} />
          </Tab>
          <Tab
            heading="LIVE"
            activeTextStyle={styles.activeTextStyle}
            textStyle={styles.textStyle}
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
            style={styles.tabBody}
          >
            <ScrollView>
              <Section title={"Shortcuts"} />
              <Section title={"Scenes"} />
            </ScrollView>
          </Tab>
          <Tab
            heading="SHORTCUTS"
            activeTextStyle={styles.activeTextStyle}
            textStyle={styles.textStyle}
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
            style={styles.tabBody}
          >
            <ScrollView>
              <Section title={"Shortcuts"} />
              <Section title={"Scenes"} />
            </ScrollView>
          </Tab>
          <Tab
            heading="AREAS"
            activeTextStyle={styles.activeTextStyle}
            textStyle={styles.textStyle}
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
            style={styles.tabBody}
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
const tabColor = "#1f1f1f";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010"
  },
  activeTextStyle: {
    color: "#FFF",
    fontSize: 13
  },
  textStyle: {
    color: "#D3D3D3",
    fontSize: 13
  },
  tabStyle: {
    backgroundColor: tabColor
  },
  activeTabStyle: {
    backgroundColor: tabColor,
    color: "#FFF"
  },
  header: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "400",
    margin: 12
  },
  tabBody: { backgroundColor: "#101010" }
});
