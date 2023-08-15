import * as React from "react";
import Svg, { G, Mask, Path, Defs, ClipPath } from "react-native-svg";

function PersonSolidIcon(props) {
  return (
    <Svg width={6} height={6} viewBox="0 0 7 8" fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_1702_3481)">
        <Mask
          id="prefix__a"
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={6}
          height={7}
        >
          <Path
            d="M3.128 3.477a.912.912 0 100-1.825.912.912 0 000 1.825zM.78 6.19v.156h4.693V6.19c0-.584 0-.876-.114-1.1-.1-.196-.26-.355-.455-.455-.224-.114-.516-.114-1.1-.114H2.45c-.584 0-.876 0-1.1.114-.196.1-.355.26-.455.456C.78 5.313.78 5.605.78 6.189z"
            fill="#fff"
            stroke="#fff"
            strokeWidth={1.564}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Mask>
        <G mask="url(#prefix__a)">
          <Path d="M0 .867h6.257v6.257H0V.867z" fill="#fff" />
        </G>
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_1702_3481">
          <Path
            fill="#fff"
            transform="translate(0 .871)"
            d="M0 0h6.257v6.257H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default PersonSolidIcon;
