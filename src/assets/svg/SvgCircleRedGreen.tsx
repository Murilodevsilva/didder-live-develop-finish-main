import * as React from 'react'
import { Circle, Defs, G, LinearGradient, Path, Stop, Svg } from 'react-native-svg'

const SvgCircleRedGreen = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 52 52"
    {...props}
  >
    <Circle
      cx={25.966}
      cy={25.966}
      r={23.966}
      fill="url(#circle-red-green_svg__a)"
      stroke="url(#circle-red-green_svg__b)"
      strokeWidth={4}
    />
    <Circle
      cx={25.966}
      cy={25.966}
      r={20.235}
      fill="url(#circle-red-green_svg__c)"
      stroke="url(#circle-red-green_svg__d)"
    />
    <G filter="url(#circle-red-green_svg__e)">
      <Circle
        cx={25.967}
        cy={25.967}
        r={18.369}
        fill="url(#circle-red-green_svg__f)"
      />
    </G>
    <G filter="url(#circle-red-green_svg__g)">
      <G filter="url(#circle-red-green_svg__h)">
        <Path
          fill="#fff"
          d="M40.084 38.79a.243.243 0 0 1-.096-.096l-1.41-2.577-1.409 2.577a.242.242 0 0 1-.096.096l-2.577 1.41 2.577 1.409c.04.022.074.056.096.096l1.41 2.577 1.409-2.576a.244.244 0 0 1 .096-.097l2.577-1.41-2.577-1.408Z"
        />
      </G>
      <Path
        fill="#fff"
        d="M40.084 38.79a.243.243 0 0 1-.096-.096l-1.41-2.577-1.409 2.577a.242.242 0 0 1-.096.096l-2.577 1.41 2.577 1.409c.04.022.074.056.096.096l1.41 2.577 1.409-2.576a.244.244 0 0 1 .096-.097l2.577-1.41-2.577-1.408Z"
      />
    </G>
    <G filter="url(#circle-red-green_svg__i)">
      <Path
        fill="#FFB800"
        d="M32.268 13.598a.092.092 0 0 1-.037-.037l-.538-.983-.537.983a.092.092 0 0 1-.037.037l-.982.537.982.537a.093.093 0 0 1 .037.037l.537.982.538-.982a.093.093 0 0 1 .037-.037l.982-.537-.982-.537Z"
      />
    </G>
    <Path
      fill="#fff"
      d="M32.268 13.598a.092.092 0 0 1-.037-.037l-.538-.983-.537.983a.092.092 0 0 1-.037.037l-.982.537.982.537a.093.093 0 0 1 .037.037l.537.982.538-.982a.093.093 0 0 1 .037-.037l.982-.537-.982-.537Z"
    />
    <G filter="url(#circle-red-green_svg__j)">
      <Path
        fill="#FF7A00"
        d="M13.838 23.933a.093.093 0 0 1-.037-.036l-.537-.983-.538.983a.093.093 0 0 1-.036.036l-.983.538.982.537a.092.092 0 0 1 .037.037l.538.982.537-.982a.093.093 0 0 1 .037-.037l.982-.537-.982-.538Z"
      />
    </G>
    <Path
      fill="#fff"
      d="M13.838 23.933a.093.093 0 0 1-.037-.036l-.537-.983-.538.983a.093.093 0 0 1-.036.036l-.983.538.982.537a.092.092 0 0 1 .037.037l.538.982.537-.982a.093.093 0 0 1 .037-.037l.982-.537-.982-.538Z"
    />
    <Defs>
      <LinearGradient
        id="circle-red-green_svg__a"
        x1={12.08}
        x2={25.966}
        y1={3.549}
        y2={51.932}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#24FF11" />
        <Stop offset={0.501} stopColor="#64E3FF" />
        <Stop offset={0.979} stopColor="#00CF46" />
      </LinearGradient>
      <LinearGradient
        id="circle-red-green_svg__b"
        x1={25.966}
        x2={25.966}
        y1={0}
        y2={51.932}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFF5DA" />
        <Stop offset={0.245} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="circle-red-green_svg__c"
        x1={14.877}
        x2={25.966}
        y1={8.065}
        y2={46.701}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00FF19" />
        <Stop offset={1} stopColor="#97FF95" />
      </LinearGradient>
      <LinearGradient
        id="circle-red-green_svg__d"
        x1={25.966}
        x2={25.966}
        y1={5.23}
        y2={46.701}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#74FF8A" />
        <Stop offset={1} stopColor="#BFFFE0" />
      </LinearGradient>
      <LinearGradient
        id="circle-red-green_svg__f"
        x1={16.143}
        x2={25.967}
        y1={10.109}
        y2={44.336}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF8B4A" />
        <Stop offset={1} stopColor="#D64D00" />
      </LinearGradient>
      <filter
        id="circle-red-green_svg__e"
        width={36.738}
        height={44.738}
        x={7.598}
        y={3.598}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={-4} />
        <feGaussianBlur stdDeviation={5} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.65 0 0 0 0 0.235106 0 0 0 0 0 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_1_26880" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={25} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.716667 0 0 0 0 0.043 0 0 0 0 0 0 0 0 1 0" />
        <feBlend
          in2="effect1_innerShadow_1_26880"
          result="effect2_innerShadow_1_26880"
        />
      </filter>
      <filter
        id="circle-red-green_svg__g"
        width={12.164}
        height={12.164}
        x={32.496}
        y={34.117}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_1_26880"
          stdDeviation={1}
        />
      </filter>
      <filter
        id="circle-red-green_svg__h"
        width={14.164}
        height={14.164}
        x={31.496}
        y={33.117}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_1_26880"
          stdDeviation={1.5}
        />
      </filter>
      <filter
        id="circle-red-green_svg__i"
        width={9.113}
        height={9.113}
        x={27.137}
        y={9.578}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_1_26880"
          stdDeviation={1.5}
        />
      </filter>
      <filter
        id="circle-red-green_svg__j"
        width={9.113}
        height={9.113}
        x={8.707}
        y={19.914}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_1_26880"
          stdDeviation={1.5}
        />
      </filter>
    </Defs>
  </Svg>
)
export default SvgCircleRedGreen
