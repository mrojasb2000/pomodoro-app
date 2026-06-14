import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const options = ["Pomodoro", "Short Break", "Long Break"] as const;
const timerTypes = ["WORK", "SHORT", "BREAK"] as const;

export default function PomoHeader({setTimeLeft, currentTimer, setCurrentTimer}: {setTimeLeft: (time: number) => void, currentTimer: typeof timerTypes[number], setCurrentTimer: (timer: typeof timerTypes[number]) => void}) {
  
  function handlePress(index: number) {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTimer(timerTypes[index]);
    setTimeLeft(newTime * 60);
  }
  
  return (
    <View style={{flexDirection: 'row'}}>
       {
          options.map((item) => (
            <TouchableOpacity style={[styles.options, currentTimer !== timerTypes[options.indexOf(item)] && {borderColor: 'transparent'}]} key={item} onPress={() => handlePress(options.indexOf(item))}>
              <Text style={styles.labelButton}>{item}</Text>
            </TouchableOpacity>
          ))
       }
    </View>
  )
}

const styles = StyleSheet.create({
  options: {
    width: '33%',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderRadius: 10,
    borderColor: '#fff',
    padding: 3,
    alignItems: 'center',
  },
  labelButton: {
    fontWeight: 'bold',
  },
});