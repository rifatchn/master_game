import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
const MealDetailScreen = (props) => {
  const mealCatagoryId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealCatagoryId);
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};
MealDetailScreen.navigationOptions = (navigationData) => {
  const mealCatagoryId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealCatagoryId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons CustomHeaderButton={HeaderButton}>
        <Item title="Favorite" iconName="ios-star" />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
