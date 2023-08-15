import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ArtificialSwitch = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const translateX = useState(new Animated.Value(0))[0];

  const handleSwitch = () => {
    setIsSwitchOn((prevValue) => !prevValue);
    Animated.timing(translateX, {
      toValue: isSwitchOn ? 0 : 21,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <TouchableOpacity onPress={handleSwitch}>
      <View style={[styles.switchContainer, isSwitchOn ? styles.switchOn : styles.switchOff]}>
        {isSwitchOn ? (
          <LinearGradient
            colors={['#B06AB3', '#4568DC']}
            start={{x:1,y:0}}
            end={{x:0,y:1}} 
            style={[StyleSheet.absoluteFill, styles.gradient]}
          />
        ) : null}
        <Animated.View style={[styles.thumb, { transform: [{ translateX }] }]} />
      </View>
    </TouchableOpacity>
  );
};

const SwitchScreen = () => {
  return (
    <View style={styles.container}>
      <ArtificialSwitch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchContainer: {
    width: 51,
    height: 31,
    borderRadius: 20,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  switchOn: {},
  switchOff: {
    backgroundColor: '#ccc',
  },
  thumb: {
    width: 31,
    height: 31,
    borderRadius: 16,
    backgroundColor: '#fff',
  },
  gradient: {
    flex: 1,
    borderRadius: 15,
  },
});

export default SwitchScreen;
