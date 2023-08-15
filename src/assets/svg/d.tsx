import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const D = (props) => (
  <Svg
    width={17}
    height={16}
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.528 16c4.433 0 8.027-3.582 8.027-8s-3.594-8-8.027-8C4.094 0 .5 3.582.5 8s3.594 8 8.028 8zM3.22 4.185l2.233 2.339h4.69l-.78 3.008h-1.62l.614-2.284H5.175l-1.172 4.567h7.147l.95-.78 1.619-6.015-.559-.835H3.22z"
      fill="#3C4E97"
    />
  </Svg>
)
