import React from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import Colors from "../constants/Colors";
import MealList from "../components/MealList";
const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam("catagoryId");
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList itemData={displayedMeals} navigation={props.navigation} />;
};
CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("catagoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealScreen;
