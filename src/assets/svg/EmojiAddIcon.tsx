import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const EmojiAddIcon = (props) => (
  <Svg
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11ZM12 2c5.524 0 10.002 4.478 10.002 10.002 0 .263-.01.524-.03.782a6.507 6.507 0 0 0-1.475-1.052 8.501 8.501 0 1 0-8.765 8.767 6.5 6.5 0 0 0 1.05 1.474c-.257.02-.518.03-.782.03-5.524 0-10.002-4.478-10.002-10.001C1.998 6.477 6.476 1.999 12 1.999Zm5.5 12-.09.008a.5.5 0 0 0-.402.402L17 14.5V17L14.498 17l-.09.008a.5.5 0 0 0-.402.402l-.008.09.008.09a.5.5 0 0 0 .402.402l.09.008H17v2.503l.008.09a.5.5 0 0 0 .402.402l.09.008.09-.008a.5.5 0 0 0 .402-.402l.008-.09V18l2.504.001.09-.008a.5.5 0 0 0 .402-.402l.008-.09-.008-.09a.5.5 0 0 0-.402-.402l-.09-.008H18v-2.5l-.008-.09a.5.5 0 0 0-.402-.403L17.5 14Zm-9.038.785a4.494 4.494 0 0 0 2.63 1.626 6.449 6.449 0 0 0-.079 1.51 5.983 5.983 0 0 1-3.73-2.208.75.75 0 0 1 1.179-.928ZM9 8.75a1.25 1.25 0 1 1 0 2.499A1.25 1.25 0 0 1 9 8.75Zm6 0a1.25 1.25 0 1 1 0 2.499 1.25 1.25 0 0 1 0-2.499Z"
      fill="#ffffff"
    />
  </Svg>
)