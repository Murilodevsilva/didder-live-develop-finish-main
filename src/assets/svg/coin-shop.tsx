import * as React from "react"
import Svg, {
  SvgProps,
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export const CoinShop = (props: SvgProps) => (
  <Svg
    width={17}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#a)">
      <Circle cx={8.5} cy={8} r={8} fill="#F3F776" />
    </G>
    <G filter="url(#b)">
      <Circle cx={8.515} cy={8.016} r={5.328} fill="#F8D74E" />
      <Circle
        cx={8.515}
        cy={8.016}
        r={5.278}
        stroke="url(#c)"
        strokeWidth={0.1}
      />
      <Circle
        cx={8.515}
        cy={8.016}
        r={5.278}
        stroke="url(#d)"
        strokeWidth={0.1}
      />
    </G>
    <Path
      d="M14.273 9.676c-1.328 4.753-5.488 4.746-7.402 4.149-.505 1.01-1.671 1.051-2.191.946 8.086 3.28 11.048-2.617 11.518-5.975-.385 1.142-1.444 1.062-1.925.88Z"
      fill="url(#e)"
    />
    <Path
      d="M14.273 9.676c-1.328 4.753-5.488 4.746-7.402 4.149-.505 1.01-1.671 1.051-2.191.946 8.086 3.28 11.048-2.617 11.518-5.975-.385 1.142-1.444 1.062-1.925.88Z"
      fill="url(#f)"
      fillOpacity={0.5}
    />
    <Path
      d="M14.145 3.568c-.704-1.249-1.311-.664-1.527-.216-.267.365.88 1.444 1.527 1.942.647.498 0 2.589.298 3.17.3.58.897-.332.996-1.394.1-1.063-.415-1.942-1.294-3.502Z"
      fill="url(#g)"
      fillOpacity={0.75}
    />
    <Path
      d="M10.698 6.56c-.792-.86.33-1.722.991-2.045 1.234 0 1.686 2.895 1.825 3.294.14.398-.173.71-1.043 0-.869-.711-.782-.174-1.773-1.249Z"
      fill="url(#h)"
    />
    <Path
      d="M2.241 3.9C3.552 1.377 5.86 1.012 6.01.929c.597-.19 1.278.797.747 1.344-.532.548-1.013.283-1.527.216-.515-.066-1.179.68-1.295 1.195-.116.515-2.19 2.208-1.693.216Z"
      fill="url(#i)"
    />
    <Path
      d="M16.118 6.556c-.16-.16-.31.066-.365.199-.132.2.365 1.062.365 1.81 0 .746-.481 1.99 0 1.426.365-1.925.2-3.236 0-3.435Z"
      fill="url(#j)"
    />
    <Path
      d="M6.537 7.272c-1.43-.244-1.836-1.11-1.86-1.513-.694-.073-.903 2.554-.703 3.514.2.96.778 1.177.947.843.168-.335 1.716-1.412 1.825-1.492.108-.08.182-1.103-.21-1.352Z"
      fill="url(#k)"
      fillOpacity={0.75}
    />
    <Path
      d="M10.259 6.889a.48.48 0 0 0-.548.182c.292.372.365.697.365.813.24.067.476-.071.564-.149a2.885 2.885 0 0 0-.381-.846Z"
      fill="url(#l)"
    />
    <G filter="url(#m)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.53 10.8a2.982 2.982 0 0 0 2.988-2.976 2.982 2.982 0 0 0-2.987-2.977 2.982 2.982 0 0 0-2.988 2.977A2.982 2.982 0 0 0 8.531 10.8ZM6.556 6.405l.83.87h1.747l-.291 1.12h-.603l.229-.85H7.282l-.436 1.7h2.66l.353-.29.602-2.24-.207-.31h-3.7Z"
        fill="#F8D647"
      />
    </G>
    <Defs>
      <LinearGradient
        id="c"
        x1={6.756}
        y1={8}
        x2={14.291}
        y2={8.531}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B94900" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={10.391}
        y1={8}
        x2={3.188}
        y2={7.485}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F3F596" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={11.916}
        y1={15.717}
        x2={10.439}
        y2={12.862}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FA7A29" />
        <Stop offset={1} stopColor="#FA7A29" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={12.281}
        y1={14.987}
        x2={11.634}
        y2={13.891}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#CB1F1F" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={15.837}
        y1={5.046}
        x2={11.307}
        y2={6.165}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F3F776" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={2.623}
        y1={0.896}
        x2={5.029}
        y2={3.883}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="j"
        x1={16.699}
        y1={7.933}
        x2={15.271}
        y2={7.469}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FC8D2E" />
        <Stop offset={1} stopColor="#FA8E32" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="k"
        x1={2.911}
        y1={7.479}
        x2={6.644}
        y2={8.154}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F28231" />
        <Stop offset={1} stopColor="#F28231" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="l"
        x1={9.694}
        y1={7.055}
        x2={10.474}
        y2={7.519}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F7E173" />
        <Stop offset={1} stopColor="#F7E173" stopOpacity={0} />
      </LinearGradient>
      <RadialGradient
        id="g"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(.89627 2.39005 -1.17829 .44186 14.31 5.194)"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </RadialGradient>
    </Defs>
  </Svg>
)


