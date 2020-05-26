import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

const MealList = (props) => {
  const renderMealItem = (itemdata) => {
    return (
      <MealItem
        image={itemdata.item.imageUrl}
        title={itemdata.item.title}
        duration={itemdata.item.duration}
        affordability={itemdata.item.affordability}
        complexity={itemdata.item.complexity}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: { mealId: itemdata.item.id },
          });
        }}
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={props.itemData}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
