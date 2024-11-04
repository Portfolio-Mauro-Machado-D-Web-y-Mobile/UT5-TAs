import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
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

    const deleteTask = (key) => {
        setTasks(tasks.filter(task => task.key !== key));
        console.log("uwu");
    };

    const renderRightActions = (key) => {
        return (
            <Button style={styles.Button} onPress={() => deleteTask(key)} title="Delete" />
         );
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
                    <View style={styles.card}>
                        <Swipeable renderRightActions={()=> renderRightActions(item.key)}>
                            <Text style={styles.text}>{item.text}</Text>
                        </Swipeable>
                    </View>
                )}
                keyExtractor={(item) => item.key.toString()}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
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
