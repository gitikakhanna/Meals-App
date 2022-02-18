//import { createStackNavigator } from "react-navigation-stack";
//import { createAppContainer } from "react-navigation";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./../screens/CategoriesScreen";
import CategoryMealsScreen from "./../screens/CategoryMealsScreen";
import MealsDetailScreen from "./../screens/MealDetailScreen";
import { Platform } from "react-native";
import Colors from "../constants/Colors";
import FavoritesScreen from "./../screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const MealsNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Categories"
            screenOptions={{
                headerStyle: {
                    backgroundColor:
                        Platform.OS === "android"
                            ? Colors.primaryColor
                            : "white",
                },
                headerTintColor:
                    Platform.OS === "android" ? "white" : Colors.primaryColor,
                headerTitle: "A Screen",
            }}
        >
            <Stack.Screen name="Categories" component={CategoriesScreen} options={
                {
                    headerTitle: "Meal Categories"
                }
            } />
            <Stack.Screen
                name="CategoryMeals"
                component={CategoryMealsScreen}
            />
            <Stack.Screen name="MealDetails" component={MealsDetailScreen} />
        </Stack.Navigator>
    );
};

const myStack = () => {
    return (
        <NavigationContainer>
            <MealsNavigator />
        </NavigationContainer>
    );
};

export default myStack;

/*const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen
        },
        CategoryMeals: {
            screen: CategoryMealsScreen
        },
        MealDetails: MealsDetailScreen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor:
                    Platform.OS === "android" ? Colors.primaryColor : "white",
            },
            headerTintColor:
                Platform.OS === "android" ? "white" : Colors.primaryColor,

            headerTitle: "A Screen",
        },
    }
);

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator
    },
    Favorites: {
        screen: FavoritesScreen
    }
});

export default createAppContainer(MealsFavTabNavigator);
*/
