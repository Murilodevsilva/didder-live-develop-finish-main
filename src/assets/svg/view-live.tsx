import * as React from "react"
import { Image } from "react-native"
export const ViewLive = (props)=>  (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <g filter="url(#b)">
        <path
          fill="url(#c)"
          fillRule="evenodd"
          d="M8.47 7.46c2.096-1.716 4.677-3.128 7.531-3.128 2.855 0 5.436 1.412 7.531 3.128 2.107 1.725 3.83 3.844 4.987 5.456l.096.133c.697.968 1.27 1.765 1.27 2.95 0 1.184-.573 1.981-1.27 2.95l-.096.132c-1.157 1.613-2.88 3.732-4.987 5.457-2.095 1.715-4.676 3.127-7.53 3.127-2.855 0-5.436-1.412-7.532-3.127-2.107-1.725-3.83-3.844-4.987-5.457l-.095-.132c-.697-.969-1.27-1.766-1.27-2.95 0-1.185.573-1.982 1.27-2.95l.095-.133c1.158-1.612 2.88-3.731 4.987-5.456Z"
          clipRule="evenodd"
        />
        <path
          stroke="url(#d)"
          strokeLinecap="round"
          d="M8.154 7.073C10.29 5.323 12.982 3.832 16 3.832c3.02 0 5.711 1.491 7.848 3.24 2.154 1.764 3.906 3.922 5.077 5.552l.095.133h0l.032.045c.674.936 1.332 1.85 1.332 3.197 0 1.346-.658 2.26-1.332 3.197l-.032.044h0l-.095.133-20.772-12.3Zm0 0C6 8.836 4.248 10.993 3.077 12.624l-.095.133s0 0 0 0l-.032.045c-.675.936-1.333 1.85-1.333 3.197 0 1.346.658 2.26 1.333 3.197l.032.044s0 0 0 0l.095.133 5.077-12.3Zm15.695 17.852c2.154-1.764 3.906-3.921 5.076-5.552H3.077c1.17 1.63 2.923 3.788 5.077 5.552 2.136 1.75 4.828 3.24 7.847 3.24 3.02 0 5.711-1.49 7.848-3.24Z"
        />
      </g>
      <g filter="url(#e)">
        <path
          fill="url(#f)"
          fillRule="evenodd"
          d="M11 16a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm2 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="c"
        x1={2.117}
        x2={36.28}
        y1={21.889}
        y2={20.926}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4568DC" />
        <stop offset={1} stopColor="#B06AB3" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={2.117}
        x2={25.117}
        y1={4.332}
        y2={31.676}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0.25} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="f"
        x1={16.084}
        x2={29.886}
        y1={23.13}
        y2={9.601}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </linearGradient>
      <filter
        id="b"
        width={77.769}
        height={73.332}
        x={-22.883}
        y={-20.668}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={12} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1_28592"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1_28592"
          result="shape"
        />
      </filter>
      <filter
        id="e"
        width={26}
        height={26}
        x={8}
        y={8}
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_28592" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1_28592"
          result="shape"
        />
      </filter>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
)

