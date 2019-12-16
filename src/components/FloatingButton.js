import React from "react";
import { Fab, Icon, Button } from "native-base";
import { View } from "react-native";

export default floatingButton = props => {
  return (
    <View style={{ flex: 1 }}>
      <Fab
        direction="up"
        style={{ backgroundColor: "#5067FF" }}
        position="bottomRight"
        onPress={() => props.navigation.navigate("ACTION_LIST")}
      >
        <Icon name="md-add" />
      </Fab>
    </View>
  );
};
