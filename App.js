import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from './src/Home';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
