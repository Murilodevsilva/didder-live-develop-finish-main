import React, { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type GradientType = 'type1' | 'type2' | 'type3';

export interface GradientBackgroundProps {
  children: ReactNode;
  type?: GradientType;
  colors?: string[];
  borderRadius?: number;
}

const defaultGradients = {
  type1: ['#4568DC', '#B06AB3'],
  type2: ['#00c6ff', '#0072ff'],
  type3: ['#834d9b', '#d04ed6'],
};

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  type = 'type1',
  colors,
  borderRadius = 0,
}) => {
  const gradientColors = colors || defaultGradients[type];

  const gradientStyle: ViewStyle = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius,
  };

  return (
    <View
      style={{
        flexGrow: 1,
        borderRadius,
        overflow: 'hidden',
      }}
    >
      <LinearGradient
        colors={gradientColors}
        start={[0, 0]}
        end={[1, 0]}
        style={gradientStyle}
      />
      {children}
    </View>
  );
};

export default GradientBackground;
