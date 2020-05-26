import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
} from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import Favories from "../screens/FavoritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FiltersScreen from "../screens/FiltersScreen";
import { Platform } from "react-native";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import FavoritesScreen from "../screens/FavoritesScreen";
const DefaultScreen = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  headerTitle: "A Screen",
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: DefaultScreen,
  }
);
const FavStackNavigator = createStackNavigator(
  {
    Favories: {
      screen: FavoritesScreen,
      navigationOptins: { headerTitle: "Favories" },
    },
    MealDetail: MealDetailScreen,
  },
  { defaultNavigationOptions: DefaultScreen }
);
const tabsScreenConfig = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptins: {
        tabBarIcon: (tabinfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabinfo.tintColor}
            />
          );
        },
      },
    },
    Favories: {
      screen: FavStackNavigator,
      navigationOptins: {
        tabBarIcon: (tabinfo) => {
          return (
            <Ionicons name="ios-star" size={25} color={tabinfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
    },
  }
);
const FilterNavigator = createStackNavigator({
  Filters: FiltersScreen,
});
const MainNavigator = createDrawerNavigator({
  MealsFavs: tabsScreenConfig,
  Filters: FilterNavigator,
});

export default createAppContainer(tabsScreenConfig);
