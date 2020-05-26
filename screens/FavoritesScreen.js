import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { DrawerActions } from "react-navigation";
const FavoritesScreen = (props) => {
  const displayedMealsFav = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );
  return (
    <MealList itemData={displayedMealsFav} navigation={props.navigation} />
  );
};
FavoritesScreen.navigationOptions = (nevData) => {
  console.log(nevData);
  return {
    headerTitle: "Favoriess",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            nevData.navigation.navigate("DrawerOpen");
          }}
        />
      </HeaderButtons>
    ),
  };
};
export default FavoritesScreen;
