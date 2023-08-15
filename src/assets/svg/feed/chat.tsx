import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const Chat = (props) => (
  <Svg
    width={17}
    height={17}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.313.875A7.828 7.828 0 00.5 8.688v6.585A1.227 1.227 0 001.727 16.5h6.585a7.813 7.813 0 000-15.625zm0 14.375H1.75V8.687a6.562 6.562 0 116.563 6.563zM9.25 9a.937.937 0 11-1.875 0A.937.937 0 019.25 9zM5.5 9a.937.937 0 11-1.875 0A.937.937 0 015.5 9zM13 9a.938.938 0 11-1.875 0A.938.938 0 0113 9z"
      fill="#424242"
    />
  </Svg>
)
