import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, SafeAreaViewBase, StyleSheet, Text, View } from 'react-native';
import Summary from './src/components/Summary';

export default function App() {
  return (
    <SafeAreaView className="flex-1" style={styles.container}>
        <Summary />
        <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 30 : 0
},
});