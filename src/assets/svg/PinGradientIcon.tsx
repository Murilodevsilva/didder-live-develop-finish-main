import * as React from 'react';
import Svg, { Path, Defs, Stop, LinearGradient } from 'react-native-svg';

type GradientType = 'type1' | 'type2' | 'type3';

interface PinGradientIconProps {
  gradientType?: GradientType;
  [x: string]: any;
}

const gradientTypes = {
  type1: {
    startColor: '#4568DC',
    endColor: '#B06AB3',
  },
  type2: {
    startColor: '#4c669f',
    endColor: '#192f6a',
  },
  type3: {
    startColor: '#ffffff',
    endColor: '#dfedff',
  },
};

export const PinGradientIcon: React.FC<PinGradientIconProps> = ({ gradientType = 'type1', ...props }) => {
  const gradientColors = gradientTypes[gradientType];

  return (
    <Svg width="12" height="12" viewBox="0 0 12 12" fill="none" {...props}>
      <Path
        d="M4.3125 7.6875L1.3125 10.6875M10.6875 5.0625L6.9375 1.3125C6.9375 1.3125 6.1875 2.8125 5.4375 3.5625C4.6875 4.3125 2.0625 5.0625 2.0625 5.0625L6.9375 9.9375C6.9375 9.9375 7.6875 7.3125 8.4375 6.5625C9.1875 5.8125 10.6875 5.0625 10.6875 5.0625Z"
        stroke={`url(#paint0_linear_${gradientType})`}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id={`paint0_linear_${gradientType}`}
          x1="29.8425"
          y1="7.3958"
          x2="-7.19039"
          y2="7.3958"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={gradientColors.startColor} />
          <Stop offset="1" stopColor={gradientColors.endColor} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
