import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
const MealItem = (props) => {
  return (
    <View style={styles.mealRow}>
      <TouchableOpacity onPress={props.onSelect}>
        <View>
          <View style={{ ...styles.mealItem, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgimage}
            >
              <Text>{props.title}</Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealItem, ...styles.mealDescription }}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity}</Text>
            <Text>{props.affordability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mealItem: {
    flexDirection: "row",
    height: "100%",
  },
  mealRow: {
    height: 200,
    width: "100%",
    backgroundColor: "#ccc",
  },
  mealHeader: {
    height: "90%",
  },
  mealDescription: {
    height: "10%",
    justifyContent: "space-between",
  },
  bgimage: {
    height: "100%",
    width: "100%",
  },
});
export default MealItem;
