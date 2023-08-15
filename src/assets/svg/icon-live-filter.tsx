import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const IconLiveFilter = (props) => {
  return (
    <Svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.503.5H1.169a.833.833 0 00-.833.833v2.159c0 .436.177.864.486 1.172l4.514 4.514V15.5a.834.834 0 001.206.746l3.333-1.667a.834.834 0 00.46-.746V9.178l4.515-4.514c.308-.308.486-.736.486-1.172V1.333A.834.834 0 0014.503.5zm-5.59 7.744a.83.83 0 00-.244.59v4.484l-1.666.834V8.833a.83.83 0 00-.245-.589L2.003 3.492V2.167H13.67l.002 1.319-4.759 4.758z"
        fill="#fff"
      />
    </Svg>
  )
}
