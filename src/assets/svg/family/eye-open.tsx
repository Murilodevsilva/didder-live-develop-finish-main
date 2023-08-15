import * as React from 'react'
import Svg, {
  Path,
  G,
  Mask,
} from 'react-native-svg'

export const EyeOpen = (props) => (
  <Svg
    width={13}
    height={9}
    viewBox="0 0 13 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.5 3.152c-.799 0-1.448.605-1.448 1.348 0 .743.65 1.347 1.447 1.347.798 0 1.447-.604 1.447-1.347S7.297 3.152 6.5 3.152zm-.001 3.534c-1.294 0-2.347-.98-2.347-2.186 0-1.205 1.053-2.186 2.347-2.186s2.347.981 2.347 2.186S7.793 6.686 6.5 6.686z"
      fill="#fff"
    />
    <Mask
      id="a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={13}
      height={9}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.5 0h12v9H.5V0z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.442 4.5C2.558 6.796 4.438 8.161 6.5 8.162c2.062 0 3.942-1.366 5.058-3.662C10.442 2.204 8.562.839 6.5.838 4.438.84 2.558 2.204 1.442 4.5zM6.502 9h-.003C4.015 8.998 1.788 7.378.535 4.665a.394.394 0 010-.33C1.788 1.621 4.017.001 6.498 0h.004c2.481.002 4.71 1.622 5.961 4.334a.39.39 0 010 .331C11.213 7.378 8.983 8.998 6.502 9z"
        fill="#fff"
      />
    </G>
  </Svg>
)
