import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CategoryGridTile = (props) => {
    return (
        <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
            <View
                style={{
                    ...styles.container,
                    ...{ backgroundColor: props.color },
                }}
            >
                <Text style={styles.title} numberOfLines={2}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 120,
        elevation: 5,
    },
    container: {
        flex: 1,
        borderRadius: 8,
        shadowColor: "black",
        shadowOpacity: 0.24,
        shadowOffset: { width: 0, height: 2 },
        padding: 16,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 22,
        textAlign: "right",
    },
});

export default CategoryGridTile;
