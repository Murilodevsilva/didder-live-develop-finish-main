import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const ArrowLeft = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.5 12a.75.75 0 00-.75-.75H4.06l4.721-4.719A.75.75 0 107.72 5.469l-6 6a.75.75 0 000 1.062l6 6a.753.753 0 001.225-.244.75.75 0 00-.163-.818l-4.72-4.719h17.69a.75.75 0 00.75-.75z"
      fill="#fff"
    />
  </Svg>
)
