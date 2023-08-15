import * as React from "react"
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function ChatGradientIcon(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1_26898)">
        <G filter="url(#filter0_b_1_26898)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.21 20.614c2.66-5.092.128-11.132-2.78-14.04-5.208-5.208-13.65-5.208-18.857 0-5.207 5.206-5.207 13.648 0 18.855 3.033 3.033 8.97 5.46 14.043 2.785.521-.275.782-.413.91-.464.538-.216.821-.25 1.395-.163.136.021.313.067.669.16 1.066.276 1.6.414 1.988.4a2.667 2.667 0 002.569-2.569c.014-.389-.124-.922-.4-1.988-.093-.355-.139-.533-.16-.668-.087-.574-.055-.849.16-1.388.05-.127.188-.391.464-.92z"
            fill="url(#paint0_linear_1_26898)"
          />
          <Path
            d="M28.388 20.707c1.358-2.6 1.387-5.437.713-7.983-.673-2.544-2.05-4.812-3.53-6.292-5.285-5.285-13.854-5.285-19.14 0-5.284 5.285-5.284 13.854 0 19.139 3.07 3.068 9.099 5.552 14.278 2.82.529-.28.776-.41.891-.455a2.42 2.42 0 01.633-.182c.184-.022.379-.011.658.031.123.019.288.061.649.155l.005.001c.528.137.932.242 1.251.31.32.068.57.104.79.096a2.867 2.867 0 002.76-2.762c.009-.22-.026-.469-.095-.789-.068-.32-.173-.722-.31-1.251l-.001-.005a7.831 7.831 0 01-.155-.648 2.424 2.424 0 01-.033-.654 2.42 2.42 0 01.18-.63c.046-.115.176-.365.456-.901z"
            stroke="url(#paint1_linear_1_26898)"
            strokeWidth={0.4}
            strokeLinecap="round"
          />
        </G>
        <G filter="url(#filter1_d_1_26898)">
          <Path
            d="M11.811 15.81a1.333 1.333 0 11-2.666 0 1.333 1.333 0 012.666 0z"
            fill="url(#paint2_linear_1_26898)"
          />
          <Path
            d="M17.145 15.81a1.333 1.333 0 11-2.667 0 1.333 1.333 0 012.667 0z"
            fill="url(#paint3_linear_1_26898)"
          />
          <Path
            d="M21.145 17.143a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666z"
            fill="url(#paint4_linear_1_26898)"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1_26898"
          x1={2.66797}
          y1={22.7566}
          x2={35.4805}
          y2={21.9805}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#4568DC" />
          <Stop offset={1} stopColor="#B06AB3" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_1_26898"
          x1={2.66797}
          y1={2.66797}
          x2={29.3792}
          y2={29.3186}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" stopOpacity={0.25} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_1_26898"
          x1={15.9235}
          y1={17.7113}
          x2={17.3656}
          y2={10.6433}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_1_26898"
          x1={15.9235}
          y1={17.7113}
          x2={17.3656}
          y2={10.6433}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear_1_26898"
          x1={15.9235}
          y1={17.7113}
          x2={17.3656}
          y2={10.6433}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
        </LinearGradient>
        <ClipPath id="clip0_1_26898">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ChatGradientIcon
