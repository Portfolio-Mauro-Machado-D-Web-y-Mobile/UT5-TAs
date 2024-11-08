import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Image, Alert } from "react-native";



//funciona bastante raro en mi telefono

const Home = () => {
    const [image, setImage] = useState(null);
    const [hasPermission, setHasPermission] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status === 'granted') {
                setHasPermission(true);
            } else {
                Alert.alert(
                    'Permission required',
                    'We need access to your photos to pick an image.',
                    [{ text: 'OK' }]
                );
            }
        })();
    }, []);

    const pickImage = async () => {
        if (!hasPermission) {
            Alert.alert(
                'Permission not granted',
                'Please enable photo permissions in your device settings.',
                [{ text: 'OK' }]
            );
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
});

export default Home;
