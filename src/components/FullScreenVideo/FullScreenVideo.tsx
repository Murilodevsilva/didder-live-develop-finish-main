import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ResizeMode, Video } from 'expo-av';
import { StatusBar } from 'expo-status-bar';

interface FullScreenVideoProps {
  streamURL?: string;
  children: React.ReactNode;
}

const FullScreenVideo: React.FC<FullScreenVideoProps> = ({
  children,
  streamURL,
}) => {
  const video = React.useRef(null);

  return (
    <View style={styles.container}>
      {children}
      <Video
        ref={video}
        style={styles.fullScreenVideo}
        source={{
          uri: "https://i.imgur.com/NdqhHBe.mp4",
        }}
        resizeMode={ResizeMode.COVER}
        isLooping
        shouldPlay
      />
     
    </View>
  );
};
console.log(Video)
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullScreenVideo: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default FullScreenVideo;
