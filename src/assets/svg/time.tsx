<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 1.5C3.743 1.5 1.5 3.743 1.5 6.5C1.5 9.257 3.743 11.5 6.5 11.5C9.257 11.5 11.5 9.257 11.5 6.5C11.5 3.743 9.257 1.5 6.5 1.5ZM6.5 10.5C4.2945 10.5 2.5 8.7055 2.5 6.5C2.5 4.2945 4.2945 2.5 6.5 2.5C8.7055 2.5 10.5 4.2945 10.5 6.5C10.5 8.7055 8.7055 10.5 6.5 10.5Z" fill="#9E9E9E"/>
<path d="M7 4H6V6.707L7.6465 8.3535L8.3535 7.6465L7 6.293V4Z" fill="#9E9E9E"/>
</svg>
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const Time = (props: SvgProps) => (
  <Svg
    width={13}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.5 1.5c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5Zm0 9c-2.205 0-4-1.794-4-4 0-2.205 1.795-4 4-4 2.206 0 4 1.795 4 4 0 2.206-1.794 4-4 4Z"
      fill="#9E9E9E"
    />
    <Path d="M7 4H6v2.707l1.646 1.647.708-.707L7 6.292V4Z" fill="#9E9E9E" />
  </Svg>
)


