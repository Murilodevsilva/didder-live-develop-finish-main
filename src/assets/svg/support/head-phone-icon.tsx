import * as React from "react"
const Headphone = (props)=>(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={33}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <g filter="url(#b)">
        <circle cx={17} cy={16.25} r={15.031} fill="url(#c)" />
        <circle
          cx={17}
          cy={16.25}
          r={15.234}
          stroke="url(#d)"
          strokeLinecap="round"
          strokeWidth={0.406}
        />
      </g>
      <g filter="url(#e)">
        <path
          fill="url(#f)"
          d="M15.559 8.357c.953-.17 1.93-.17 2.882 0 4.282.764 7.17 4.727 6.525 8.95l-.007.049c-1.304.067-2.34 1.126-2.34 2.422v1.765c0 1.34 1.106 2.426 2.471 2.426 1.366 0 2.473-1.086 2.473-2.426v-1.765c0-.918-.52-1.716-1.286-2.128l.023-.146c.753-4.93-2.62-9.557-7.618-10.449a9.58 9.58 0 0 0-3.364 0c-4.998.892-8.371 5.518-7.618 10.449l.023.146a2.419 2.419 0 0 0-1.285 2.128v1.765c0 1.34 1.106 2.426 2.472 2.426 1.365 0 2.472-1.086 2.472-2.426v-1.765c0-1.296-1.037-2.355-2.34-2.422l-.008-.049c-.646-4.223 2.243-8.186 6.525-8.95Z"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="c"
        x1={1.969}
        x2={38.963}
        y1={23.839}
        y2={22.963}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4568DC" />
        <stop offset={1} stopColor="#B06AB3" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={1.969}
        x2={32.047}
        y1={1.219}
        y2={31.266}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0.25} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="f"
        x1={17.178}
        x2={40.297}
        y1={27.604}
        y2={-0.454}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </linearGradient>
      <filter
        id="b"
        width={78.875}
        height={78.875}
        x={-22.438}
        y={-23.188}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={12} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1_29925"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1_29925"
          result="shape"
        />
      </filter>
      <filter
        id="e"
        width={37.125}
        height={33.063}
        x={3.438}
        y={3.906}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={5} dy={5} />
        <feGaussianBlur stdDeviation={4} />
        <feColorMatrix values="0 0 0 0 0.176471 0 0 0 0 0.556863 0 0 0 0 0.678431 0 0 0 0.5 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_29925" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1_29925"
          result="shape"
        />
      </filter>
      <clipPath id="a">
        <path fill="#fff" d="M.75 0h32.5v32.5H.75z" />
      </clipPath>
    </defs>
  </svg>
)
export default Headphone
