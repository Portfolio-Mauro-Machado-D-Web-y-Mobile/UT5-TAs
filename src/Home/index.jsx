import { useState } from "react";
import { Image, StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const screenWidth = Dimensions.get("window").width;
const itemWidth = screenWidth / 2 - 40; 
const Home = () => {

    
    const [images, setImages] = useState([
        { key: 1, image: "https://picsum.photos/200/300", description: "Michievous scenery" },
        { key: 2, image: "https://placekitten.com/200/300", description: "Suspicious kitten" },
        { key: 3, image: "https://placebear.com/200/300", description: "Communist bear" },
        { key: 4, image: "https://loremflickr.com/200/300", description: "Supremacist cat" },
        { key: 5, image: "https://baconmockup.com/200/300", description: "Misleading beef" },
        { key: 6, image: "https://placebeard.it/200x300", description: "Convicted bearded" },
        { key: 7, image: "https://placedog.net/200/300", description: "Corrupt dog" },
        { key: 8, image: "https://img.freepik.com/premium-photo/cafe-employee-posing-coffee-shop-interior_641503-99213.jpg", description: "Dissident woman" },

    ]);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                numColumns={2}
                data={images}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image
                            style={styles.image}
                            source={{ uri: item.image }}
                        />
                        <Text style={styles.text}>{item.description}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.key.toString()}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
        marginLeft: 10,
        marginBottom: 20,
        padding: 10,
        alignItems: 'center',
    },
    image: {
        width: itemWidth - 20,
        height: itemWidth - 20,
        borderRadius: 10,
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
    },
});

export default Home;
