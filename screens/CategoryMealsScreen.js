import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
    const { categoryId } = props.route.params;
    const displayedMeals = MEALS.filter(
        (meal) => meal.categoryIds.indexOf(categoryId) >= 0
    );

    const renderMealItem = (itemData) => {
        return (
            <MealItem
                title={itemData.item.title}
                onSelectMeal={() => {
                    props.navigation.navigate(
                        'MealDetails',
                        { mealId: itemData.item.id }
                    );
                }}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity.toUpperCase()}
                affordability={itemData.item.affordability.toUpperCase()}
                image={itemData.item.imageUrl}
            />
        );
    };
    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: "100%" }}
            />
            <Button
                title="Go Back"
                onPress={() => {
                    props.navigation.pop();
                }}
            />
        </View>
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const { categoryId } = navigationData.route.params;
    const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
    return {
        headerTitle: selectedCategory.title,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default CategoryMealsScreen;
