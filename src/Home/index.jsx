import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([
        { key: 1, text: "Task 1" },
        { key: 2, text: "Task 2" },
        { key: 3, text: "Task 3" },
    ]);

    const addTask = () => {
        if (text) {
            setTasks([...tasks, { key: tasks.length + 1, text }]);
            setText("");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Add a new task"
                value={text}
                onChangeText={setText}
            />
            <Button title="Add Task" onPress={addTask} />
            <FlatList
                data={tasks}
                renderItem={({ item }) => (
                    <Text style={styles.text}>{item.text}</Text>
                )}
                keyExtractor={(item) => item.key.toString()}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
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
    },
});

export default Home;
