import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput, TextInputBase } from "react-native";

const Home = () => {
    const [text, setText] = useState("");

    return (
        <View>
            <TextInput 
                style={styles.textInput}
                onChangeText={text => setText(text)}
            />

            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 5,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

export default Home;