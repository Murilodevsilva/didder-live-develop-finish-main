import * as React from 'react'
import Svg, {
  Path,
  G,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg'

export const Buy = (props) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_b_1114_12594)" clipPath="url(#clip0_1114_12594)">
      <Path
        d="M23.026 15.173l.248-.673H17.85a.25.25 0 010-.5h5.554l.099-.37c.124-.46.249-.964.381-1.512l.15-.618H14.85a.25.25 0 010-.5h9.304l.09-.386c.149-.633.272-1.201.328-1.695.077-.673.056-1.397-.334-2.077a3.251 3.251 0 00-.588-.745c-.57-.538-1.27-.727-1.942-.809-.634-.077-1.427-.077-2.335-.077H3.879l-.816-3.264a1.25 1.25 0 10-2.425.606l1.05 4.205.979 4.082.007.029c.41 1.712.744 3.102 1.142 4.191.416 1.135.945 2.071 1.824 2.797l.318-.385-.318.385c.073.061.148.12.224.178.911.685 1.945.981 3.145 1.12 1.152.135 2.582.135 4.342.135h.65c1.523 0 2.76 0 3.765-.102 1.045-.106 1.955-.33 2.788-.851.383-.24.739-.52 1.062-.837.656-.645 1.075-1.417 1.41-2.327zM10.271 22.75a1.553 1.553 0 100-3.105 1.553 1.553 0 000 3.105zm6.316 0a1.553 1.553 0 100-3.105 1.553 1.553 0 000 3.105z"
        fill="#91A1E5"
        stroke="url(#paint0_linear_1114_12594)"
        strokeLinecap="round"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_1114_12594"
        x1={1.1}
        y1={1.5}
        x2={21.7526}
        y2={24.3764}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <ClipPath id="clip0_1114_12594">
        <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
