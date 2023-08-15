import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const IconModalCheck = (props) => {
  return (
    <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10 15.586l-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414L10 15.586z"
      fill="#00C247"
    />
  </Svg>
  )
}
