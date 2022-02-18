import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
//import { HeaderButtons, Item } from "react-navigation-header-buttons";
//import HeaderButton from "../components/HeaderButton";

const MealsDetailScreen = (props) => {
    const {mealId} = props.route.params;
    var selectedMeal = MEALS.filter((meal) => meal.id === mealId);
    console.log("selectedMeal", selectedMeal);

    //notification code
    const triggerNotificationHandler = () => {
        Notifications.scheduleNotificationAsync({
            content: {
                title: "My first local notification",
                body: "This is the first notification we are sending",
            },
            trigger: {
                seconds: 10,
            },
        });
    };

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal[0].title}</Text>
            <Text>The Meals Detail Screen!!</Text>
            <Button
                title="Go back to Categories"
                onPress={() => {
                    props.navigation.popToTop();
                    //use replace if you don't want to keep it in the stack, for example login screen and dont want a back button to navigate to that screen.
                }}
            />
        </View>
    );
};

/*MealsDetailScreen.navigationOptions = (navigationData) => {
    const {mealId} = navigationData.route.params;
    var selectedMeal = MEALS.filter((meal) => meal.id === mealId);
    return {
        headerTitle: selectedMeal[0].title,
        headerRight: () => {
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Favorite"
                    iconName="ios-star"
                    onPress={() => {
                        console.log("Marked as favorite");
                    }}
                />
            </HeaderButtons>
        },
    };
};*/

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default MealsDetailScreen;
