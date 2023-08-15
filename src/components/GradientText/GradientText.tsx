import React from 'react';
import { View } from 'react-native';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Stop, Text as SvgText, TSpan } from 'react-native-svg';

type GradientType = 'type1' | 'type2' | 'type3';

interface GradientTextProps {
  text: string;
  type?: GradientType;
  colors?: string[];
  fontSize?: number;
  fontStyle?: 'normal' | 'bold';
  textAlign?: 'left' | 'right' | 'center';
  containerWidth?: number;
  containerHeight?: number;
}

const defaultGradients = {
  type1: ['#4568DC', '##B06AB3'],
  type2: ['#00c6ff', '#0072ff'],
  type3: ['#834d9b', '#d04ed6'],
};

const GradientText: React.FC<GradientTextProps> = ({
  text,
  type = 'type1',
  colors,
  fontSize = 14,
  fontStyle = 'normal',
  textAlign = 'left',
  containerWidth,
  containerHeight,
}) => {
  const gradientColors = colors || defaultGradients[type];
  const gradientId = `gradient_${type}`;

  const getAnchor = () => {
    switch (textAlign) {
      case 'right':
        return 'end';
      case 'center':
        return 'middle';
      default:
        return 'start';
    }
  };

  const getXPosition = () => {
    switch (textAlign) {
      case 'right':
        return containerWidth - fontSize;
      case 'center':
        return containerWidth / 2;
      default:
        return fontSize;
    }
  };

  return (
    <View style={{ backgroundColor: 'transparent', width: containerWidth, height: containerHeight }}>
      <Svg height={containerHeight} width={containerWidth}>
        <Defs>
          <SvgLinearGradient id={gradientId} x1="0" y1="0" x2="100%" y2="0">
            {gradientColors.map((color, index) => (
              <Stop key={index} offset={`${(index / (gradientColors.length - 1)) * 100}%`} stopColor={color} />
            ))}
          </SvgLinearGradient>
        </Defs>
        <SvgText
          fill={`url(#${gradientId})`}
          fontSize={fontSize}
          fontWeight={fontStyle}
          textAnchor={getAnchor()}
          x={getXPosition()}
          y={fontSize + (containerHeight - fontSize) / 2}>
          <TSpan>{text}</TSpan>
        </SvgText>
      </Svg>
    </View>
  );
};

export default GradientText;
