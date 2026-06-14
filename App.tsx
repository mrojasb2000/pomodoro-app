import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  SafeAreaView,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import PomoHeader from './src/components/PomoHeader';


const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];
const timerTypes = ["WORK", "SHORT", "BREAK"] as const;


export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [currentTimer, setCurrentTimer] = useState<typeof timerTypes[number]>("WORK");
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, {backgroundColor: colors[timerTypes.indexOf(currentTimer)]}]}>
        <View>
          <Text style={styles.title}>Pomodoro</Text>
          <PomoHeader 
            setTimeLeft={setTimeLeft} 
            currentTimer={currentTimer} 
            setCurrentTimer={setCurrentTimer} 
          />
          <Text>{timeLeft}</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
