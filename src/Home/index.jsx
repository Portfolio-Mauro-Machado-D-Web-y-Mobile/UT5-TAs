import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput, Image, ScrollView } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
    const [text, setText] = useState("");
    const [movie, setMovie] = useState(null); // Initialize as null

    const searchMovie = async () => {
        const words = text.split(/\s+/);
        const query = words.join("+");
        
        try {
            const response = await fetch(`http://www.omdbapi.com/?t=${query}&apikey=5b2ecc76`);
            const data = await response.json();
            setMovie(data); // Update movie state
            console.log(data); // Log the fetched data for debugging
        } catch (error) {
            console.error('Error fetching movie:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <TextInput
                    style={styles.textInput}
                    placeholder="Type movie title"
                    value={text}
                    onChangeText={setText}
                />
                <Button title="Search" onPress={searchMovie} />
                {movie && movie.Title ? ( 
                    <View>
                        <Image style={styles.image} source={{ uri: movie.Poster }} />
                        <Text style={styles.subtitle}>{movie.Title}</Text>
                        <Text style={styles.text}>{movie.Plot}</Text>
                    </View>
                ) : (
                    <Text>No movie found</Text> 
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 8,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    text: {
        fontSize: 16,
        marginBottom: 8,
    },
    image: {
        width: 300,
        height: 450,
        marginBottom: 10,
        marginTop: 10,
    },
});

export default Home;
