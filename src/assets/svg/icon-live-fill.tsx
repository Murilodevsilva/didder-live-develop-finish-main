import * as React from 'react'
import Svg, { G, Mask, Path } from 'react-native-svg'

export const Fill = (props) => (
  <Svg
    width={12}
    height={9}
    viewBox="0 0 12 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.003 3.152c-.798 0-1.447.605-1.447 1.348 0 .743.649 1.347 1.447 1.347S7.45 5.243 7.45 4.5s-.649-1.348-1.447-1.348zm0 3.534c-1.294 0-2.347-.98-2.347-2.186 0-1.205 1.053-2.186 2.347-2.186S8.35 3.295 8.35 4.5 7.297 6.686 6.003 6.686z"
      fill="#fff"
    />
    <Mask
      id="a"
      style={{
        maskType: 'luminance',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={12}
      height={9}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0h12v9H0V0z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.942 4.5C2.058 6.796 3.938 8.161 6 8.162c2.062 0 3.942-1.366 5.058-3.662C9.942 2.204 8.062.839 6 .838 3.938.84 2.058 2.204.942 4.5zM6.002 9h-.003C3.515 8.998 1.288 7.378.035 4.665a.394.394 0 010-.33C1.288 1.621 3.517.001 5.998 0h.004c2.481.002 4.71 1.622 5.961 4.334a.39.39 0 010 .331C10.713 7.378 8.483 8.998 6.002 9z"
        fill="#fff"
      />
    </G>
  </Svg>
)
