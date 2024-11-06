import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View, TextInput, Image, ScrollView, Dimensions, PixelRatio } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
    const pixelRatio = PixelRatio.get();
    const screenDimensions = Dimensions.get('window');
    const isLargeScreen = screenDimensions.width*pixelRatio > 1070;

    return (
        <SafeAreaView style={isLargeScreen ? styles.containerBig : styles.containerSmall}>
            <Text style={isLargeScreen ? styles.subtitleBig : styles.subtitleSmall}>Welcome to My App</Text>
            <Text style={isLargeScreen ? styles.textBig : styles.textSmall}>
                Screen Dimensions: {screenDimensions.width*pixelRatio} x {screenDimensions.height*pixelRatio}
            </Text>
            <Image 
                style={isLargeScreen ? styles.imageBig : styles.imageSmall}
                source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJ8AqQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAcDBQYCAf/EADMQAAICAQIDBQUHBQAAAAAAAAABAgMEBREGIWESEzFBURRCcYGRByIyUmKxwRUzobLx/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAMEBQIH/8QAKBEBAAIBAwQABQUAAAAAAAAAAAECAwQRQRIhMfAFEzJRcRQikcHR/9oADAMBAAIRAxEAPwDgwAYj1IAAAAAAbjTdJWXomoZre1lO3cx3/Ftzn9I7M05xXJW0zEcOK3i0zEcAAO3YAAAAAAAAAAAAAAAAAAAAAGw0fVJ6XkdtUUX1y/HVdWpJrpuuT6/ua891uMbIysh24Jpyjvt2l6bnN6xes1tG8Ob1i1dph1Go/wBTWbXkYkrfZMWCnKfskEsdWwXaUoxilJ9lrfl9CLxNqU1bbpcKaoRom4WXOiuNlzT8fupJR9EvLxbI12s6rqmq1ZMb+xkQk+5jXJQjDfyim/P6vqRtbysjMz5W5uP3GV2Yxtj2XHdpbb9ny5JciliwTF69cR2jj38+91THhmLV6ojtHv8AfvdAABfXQAAAAAAAAAAAAAAAAAAAAANzw3w9la9kSjU+6oh/cvkt1HovV9DBw9pkNX1WnDsyI0Rnzcn4vpHqy36a8DRMCuqLrxsaDUU5S2Tb9X5tmX8R186ePl4/qlna7WTh/ZT6pV1q/A+RpmJZlT1HE7mtbt2dqLfRLZ7s+8PW43EdC0XV2/aIxfsWX78dvcb810fXoTftKxdUd9eTZLvNOjygoLZVy/V1fr8ji8PIsw8unJpe1lU1OPxT3GnjJqdN1WvvbiY4n3yYYvnwdVrb24mOPeWTU8DI0zOtw8uPZtrez28GvJroyKWJ9pWDDI0/E1WqP3otQk/WElut/g/9iuy1o9R+owxefPP5WNLn+dii/PIAC0sgAAAAAAAAAAAAAAAAAA+xk4yUotpp7pryNhq2t5+rxpjnXuyNMezFeG79X6vqetG0HUNam1g07wi9p2ze0I/F/wALmdvLL4Y4dlVpFlFd9ko93lX90pbbrn2n4+O3JeHyKOo1FKXiK16rx9vMf4p589K3iIr1Wj7cIPBvFFd1S0bWnGdc13dVlnNNfkl/D+RD4j4KycTOg9Krldi32KMV4ult+Ev09fr13c+A9GzdsjBzLo0T5xVc4zjt0f8A06rCojp+FVRPIstjWlFW3yXafpu+XwMfJrceHL8zTc+azDLvq6YsnXg58xLQce93jcJSob96uuG/m09/2TKpLI+0vC1DIxqL6Up4VG7shFfejJ+8+m305lbml8IiI02+++8yv/DIiMHnzIADUaIAAAAAAAAAAAAAAAAAALAwuMtN0nhzGxsGqc8uFSTg4bRU/Nt+fPd8v8HBW2TutnbbJynOTlKT82/FngFbBpceCbWr5nygw6emKZmvmWfGzMrEbeLk3UN+Lqscd/ofcnNy8vb2vKvv28O9sctvqRwT9Nd99u6Xprvvt3d9wzxzVThPF1x2TlXHau6Me07F+WXXr5+fXh8uyu3Lutpr7qqdkpQrXupvkvkYQQYdLiw3tekbb/wixafHiva1OQAFlOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q==' }} 
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    containerBig: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },
    subtitleBig: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: 'red',
    },
    textBig: {
        fontSize: 16,
        marginBottom: 8,
        color: '#666',
    },
    imageBig: {
        width: 300,
        height: 450,
        marginBottom: 10,
        marginTop: 10,
    },
    containerSmall: {
        flex: 1,
        padding: 8,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    subtitleSmall: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#333',
    },
    textSmall: {
        fontSize: 12,
        marginBottom: 4,
        color: '#999',
    },
    imageSmall: {
        width: 150,
        height: 225,
        marginBottom: 5,
        marginTop: 5,
    },
});

export default Home;
