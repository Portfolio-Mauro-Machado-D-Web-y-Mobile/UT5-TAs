import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View, TextInput, Image, ScrollView, Dimensions, PixelRatio, Platform } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
    const isAndroid = Platform.OS === 'android';

    return (
        <SafeAreaView style={isAndroid ? styles.containerAndroid : styles.containerApple}>
            <Text>OS: {Platform.OS} {'\n'}{'\n'}VibeCheckTest:</Text>
            <Text style={isAndroid ? styles.textAndroid : styles.textApple}>
                 {isAndroid? 'Passed' : 'Failed'} {'\n'}
            </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    containerAndroid: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },
    subtitleAndroid: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: 'red',
    },
    textAndroid: {
        fontSize: 16,
        marginBottom: 8,
        color: 'green',
    },
    imageAndroid: {
        width: 300,
        height: 450,
        marginBottom: 10,
        marginTop: 10,
    },
    containerApple: {
        flex: 1,
        padding: 8,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    subtitleApple: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#333',
    },
    textApple: {
        fontSize: 120,
        marginBottom: 4,
        color: 'red',
    },
    imageApple: {
        width: 150,
        height: 225,
        marginBottom: 5,
        marginTop: 5,
    },
});

export default Home;
