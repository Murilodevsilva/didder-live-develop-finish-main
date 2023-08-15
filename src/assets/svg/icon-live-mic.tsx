import * as React from 'react'
import Svg, { G, Mask, Path } from 'react-native-svg'

export const Mic = (props) => (
    <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fill="url(#b)"
        d="M12 1.25A4.75 4.75 0 0 0 7.25 6v4a4.75 4.75 0 1 0 9.5 0V6A4.75 4.75 0 0 0 12 1.25Z"
      />
      <path
        fill="url(#c)"
        d="M4.75 10a.75.75 0 0 0-1.5 0 8.75 8.75 0 0 0 8 8.718v2.235c-.216.029-.432.07-.645.123l-.787.196a.75.75 0 0 0 .364 1.456l.787-.197a4.25 4.25 0 0 1 2.062 0l.787.197a.75.75 0 0 0 .364-1.456l-.787-.196a5.741 5.741 0 0 0-.645-.123v-2.235a8.75 8.75 0 0 0 8-8.718.75.75 0 0 0-1.5 0 7.25 7.25 0 1 1-14.5 0Z"
      />
      <path
        stroke="url(#d)"
        strokeLinecap="round"
        d="M12 .75A5.25 5.25 0 0 0 6.75 6v4a5.25 5.25 0 1 0 10.5 0V6C17.25 3.1 14.9.75 12 .75ZM5.25 10a1.25 1.25 0 1 0-2.5 0c0 4.685 3.482 8.556 8 9.166v1.364a6.106 6.106 0 0 0-.266.06l-.787.197a1.25 1.25 0 0 0 .606 2.426l.787-.197a3.752 3.752 0 0 1 1.82 0l.787.197a1.25 1.25 0 0 0 .606-2.426l-.787-.197a6.106 6.106 0 0 0-.266-.06v-1.364c4.518-.61 8-4.481 8-9.166a1.25 1.25 0 1 0-2.5 0 6.75 6.75 0 0 1-13.5 0Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={-32.506}
        x2={36.622}
        y1={15.201}
        y2={15.201}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4568DC" />
        <stop offset={1} stopColor="#B06AB3" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={-32.506}
        x2={36.622}
        y1={15.201}
        y2={15.201}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4568DC" />
        <stop offset={1} stopColor="#B06AB3" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={3.25}
        x2={24.309}
        y1={1.25}
        y2={18.373}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0.25} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <filter
        id="a"
        width={67.5}
        height={71.5}
        x={-21.75}
        y={-23.75}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={12} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1_27589"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1_27589"
          result="shape"
        />
      </filter>
    </defs>
  </Svg>
)
