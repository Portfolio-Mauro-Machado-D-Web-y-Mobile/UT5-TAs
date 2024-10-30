import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput, TextInputBase } from "react-native";

const Home = () => {
    const [value, setValue] = useState(0);

    const getRandomValue = () => {
        return ;
    };

    return (
        <View>
            <Button
                style={styles.textInput}
                title="Increase"
                onPress={()=> {setValue(value+Math.floor(Math.random() * 10000) + 1)}}
            />

            <Button
                title="Decrease"
                style={styles.textInput}
                onPress={() => {setValue(value-(Math.floor(Math.random() * 10000) + 1))}}
            />

            <Text style={styles.text}>
                {value}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
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