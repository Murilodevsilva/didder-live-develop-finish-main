import * as React from 'react'
import Svg, {
  Path,
  G,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg'

export const Document = (props) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_1114_12591)">
      <G filter="url(#filter0_b_1114_12591)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.5 13c0 3.75 0 5.625-.955 6.939a5 5 0 01-1.106 1.106C18.125 22 16.249 22 12.5 22c-3.75 0-5.625 0-6.939-.955a5 5 0 01-1.106-1.106C3.5 18.625 3.5 16.749 3.5 13v-2c0-.839 0-1.584.01-2.25h.07c.853 0 1.372 0 1.82-.07a5.75 5.75 0 004.78-4.78c.07-.448.07-.967.07-1.82v-.07C10.916 2 11.661 2 12.5 2c3.75 0 5.625 0 6.939.955a5 5 0 011.106 1.106c.955 1.314.955 3.19.955 6.939v2z"
          fill="#91A1E5"
        />
        <Path
          d="M5.165 7.198c-.309.049-.69.052-1.6.052.095-1.44.326-2.412.89-3.189A5 5 0 015.56 2.955c.777-.564 1.75-.795 3.189-.89 0 .91-.003 1.291-.052 1.6a4.25 4.25 0 01-3.533 3.533z"
          fill="#91A1E5"
        />
        <Path
          d="M3.51 8.25H3.02l-.008.492C3 9.412 3 10.16 3 10.997v2.033c0 1.85 0 3.278.122 4.407.124 1.144.379 2.04.928 2.796a5.5 5.5 0 001.217 1.217c.757.55 1.652.804 2.796.928 1.129.122 2.557.122 4.406.122h.061c1.85 0 3.278 0 4.407-.122 1.144-.124 2.04-.379 2.796-.928a5.5 5.5 0 001.217-1.217c.55-.757.804-1.652.928-2.796C22 16.308 22 14.88 22 13.03V10.97c0-1.85 0-3.278-.122-4.407-.124-1.144-.379-2.04-.928-2.796a5.5 5.5 0 00-1.217-1.217c-.757-.55-1.652-.804-2.796-.928C15.808 1.5 14.38 1.5 12.53 1.5h-.034c-.837 0-1.585 0-2.255.01l-.492.009v.562c0 .868-.001 1.34-.065 1.74a5.25 5.25 0 01-4.364 4.364c-.4.064-.872.065-1.74.065h0-.07zm1.733-.558l-.078-.494.078.494a4.75 4.75 0 003.949-3.949l-.494-.078.494.078c.056-.357.058-.786.058-1.678v-.534l-.533.035c-1.467.097-2.556.335-3.45.984A5.5 5.5 0 004.05 3.767c-.649.894-.887 1.983-.984 3.45l-.035.533h.534c.892 0 1.321-.002 1.678-.058z"
          stroke="url(#paint0_linear_1114_12591)"
          strokeLinecap="round"
        />
      </G>
      <G filter="url(#filter1_d_1114_12591)">
        <Path
          d="M13.5 9.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
          fill="url(#paint1_linear_1114_12591)"
        />
        <Path
          d="M8.5 13.25a.75.75 0 000 1.5h8a.75.75 0 000-1.5h-8z"
          fill="url(#paint2_linear_1114_12591)"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_1114_12591"
        x1={3.5}
        y1={2}
        x2={23.3975}
        y2={19.8896}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1114_12591"
        x1={12.58}
        y1={15.9217}
        x2={19.229}
        y2={4.66396}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_1114_12591"
        x1={12.58}
        y1={15.9217}
        x2={19.229}
        y2={4.66396}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <ClipPath id="clip0_1114_12591">
        <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
