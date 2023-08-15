import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#757575"
      d="m17.75 16.719-4.188-4.188c.907-1.094 1.407-2.5 1.407-4.031 0-3.563-2.938-6.5-6.5-6.5C4.875 2 2 4.938 2 8.5 2 12.094 4.906 15 8.469 15c1.5 0 2.906-.5 4.031-1.406l4.188 4.187a.753.753 0 0 0 .562.219.622.622 0 0 0 .5-.219c.313-.281.313-.75 0-1.062ZM3.5 8.5c0-2.75 2.219-5 5-5 2.75 0 5 2.25 5 5 0 2.781-2.25 5-5 5-2.781 0-5-2.219-5-5Z"
    />
  </Svg>
)
export default SvgComponent
