import React, { useState, useEffect } from 'react';
import { View, Text, Animated, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const AnimatedComponent = ({ content, onComplete }) => {
  const [fadeAnim] = useState(new Animated.Value(0));  // Initial value for opacity: 0
  const [positionAnim] = useState(new Animated.Value(height));  // Initial value for position: bottom of the screen

  useEffect(() => {
    // Animate the component to slide up from the bottom and fade in
    Animated.parallel([
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }
      ),
      Animated.timing(
        positionAnim,
        {
          toValue: height / 4,
          duration: 1000,
          useNativeDriver: true,
        }
      )
    ]).start(() => {
      // After the animation is done, wait for a while and then start the fade out animation
      setTimeout(() => {
        Animated.timing(
          fadeAnim,
          {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }
        ).start(onComplete);  // Call the onComplete function when the animation is done
      }, 2000);  // Wait for 2 seconds
    });
  }, []);

  return (
    <Animated.View                 // Special animatable View
      style={{
        flexDirection: 'row',
        right: 10,
        zIndex:9,
        opacity: fadeAnim,         // Bind opacity to animated value
        position: 'absolute',
        transform: [{ translateY: positionAnim }] // Bind position to animated value
      }}
    >
      {content}
    </Animated.View>
  );
};

export default AnimatedComponent;
