import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

const Catagorygridtile = (props) => {
  let Touchablecmp = TouchableOpacity;
  if (Platform.OS === "android" || Platform.Version > 22) {
    Touchablecmp = TouchableNativeFeedback;
  }
  return (
    <Touchablecmp style={styles.gridItem} onPress={props.onSelect}>
      <View
        style={{ ...styles.container, ...{ backgroundColor: props.color } }}
      >
        <Text>{props.title}</Text>
      </View>
    </Touchablecmp>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "red",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default Catagorygridtile;
