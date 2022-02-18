import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "./../data/dummy-data";

const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate(
                        'CategoryMeals',
                        {
                            categoryId: itemData.item.id,
                        }
                    );
                }}
            />
        );
    };
    return (
        <FlatList
            numColumns={2}
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
        />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default CategoriesScreen;
