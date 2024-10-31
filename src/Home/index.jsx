import { useState } from "react";
import { Button, StyleSheet, Text, View, Image} from "react-native";

const Home = () => {
    const [image, setImage] = useState("https://www.petlandflorida.com/wp-content/uploads/2022/04/shutterstock_1290320698-1-scaled.jpg");

    return (
        <View>
            <Image
                style={styles.image}
                source={{
                uri: image,
                }}
            />
            <Button 
                    title="Change image"
                    onPress={() => {
                        setImage(image === "https://www.petlandflorida.com/wp-content/uploads/2022/04/shutterstock_1290320698-1-scaled.jpg" ? "https://i.ytimg.com/vi/rjUr3k60HII/hqdefault.jpg" : "https://www.petlandflorida.com/wp-content/uploads/2022/04/shutterstock_1290320698-1-scaled.jpg")
                    }}
                    style={styles.button}
                />
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
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 10,
    }
});

export default Home;