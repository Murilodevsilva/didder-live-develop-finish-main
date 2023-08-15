import * as React from "react"
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="url(#b)"
        d="M12 1.25A4.75 4.75 0 0 0 7.25 6v4a4.75 4.75 0 1 0 9.5 0V6A4.75 4.75 0 0 0 12 1.25Z"
      />
      <Path
        fill="url(#c)"
        d="M4.75 10a.75.75 0 0 0-1.5 0 8.75 8.75 0 0 0 8 8.718v2.235c-.216.029-.432.07-.645.123l-.787.196a.75.75 0 0 0 .364 1.456l.787-.197a4.25 4.25 0 0 1 2.062 0l.787.197a.75.75 0 0 0 .364-1.456l-.787-.196a5.741 5.741 0 0 0-.645-.123v-2.235a8.75 8.75 0 0 0 8-8.718.75.75 0 0 0-1.5 0 7.25 7.25 0 1 1-14.5 0Z"
      />
      <Path
        stroke="url(#d)"
        strokeLinecap="round"
        d="M12 .75A5.25 5.25 0 0 0 6.75 6v4a5.25 5.25 0 1 0 10.5 0V6C17.25 3.1 14.9.75 12 .75ZM5.25 10a1.25 1.25 0 1 0-2.5 0c0 4.685 3.482 8.556 8 9.166v1.364a6.106 6.106 0 0 0-.266.06l-.787.197a1.25 1.25 0 0 0 .606 2.426l.787-.197a3.752 3.752 0 0 1 1.82 0l.787.197a1.25 1.25 0 0 0 .606-2.426l-.787-.197a6.106 6.106 0 0 0-.266-.06v-1.364c4.518-.61 8-4.481 8-9.166a1.25 1.25 0 1 0-2.5 0 6.75 6.75 0 0 1-13.5 0Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={-32.506}
        x2={36.622}
        y1={15.201}
        y2={15.201}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={-32.506}
        x2={36.622}
        y1={15.201}
        y2={15.201}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={3.25}
        x2={24.309}
        y1={1.25}
        y2={18.373}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default SvgComponent
