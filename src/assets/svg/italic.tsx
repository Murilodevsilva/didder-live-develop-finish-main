import * as React from 'react'
import Svg, { G, Path, Defs, LinearGradient, Stop } from 'react-native-svg'

export const Italic = (props) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_b_5_8785)" clipRule="evenodd">
      <Path
        fillRule="evenodd"
        d="M7.97 1.5h.06c1.225 0 2.184 0 2.946.082.777.085 1.406.26 1.944.65.325.237.611.523.848.848.39.538.565 1.167.65 1.944.082.762.082 1.721.082 2.946v.06c0 1.225 0 2.184-.082 2.946-.085.777-.26 1.406-.65 1.944a3.83 3.83 0 01-.848.848c-.538.39-1.167.565-1.944.65-.762.082-1.721.082-2.946.082h-.06c-1.225 0-2.184 0-2.946-.082-.777-.085-1.406-.26-1.944-.65a3.831 3.831 0 01-.848-.848c-.39-.538-.565-1.167-.65-1.944C1.5 10.214 1.5 9.255 1.5 8.03v-.06c0-1.225 0-2.184.082-2.946.085-.777.26-1.406.65-1.944.237-.325.523-.611.848-.848.538-.39 1.167-.565 1.944-.65C5.786 1.5 6.745 1.5 7.97 1.5z"
        fill="url(#paint0_linear_5_8785)"
      />
      <Path
        d="M7.97 1.5h.06c1.225 0 2.184 0 2.946.082.777.085 1.406.26 1.944.65.325.237.611.523.848.848.39.538.565 1.167.65 1.944.082.762.082 1.721.082 2.946v.06c0 1.225 0 2.184-.082 2.946-.085.777-.26 1.406-.65 1.944a3.83 3.83 0 01-.848.848c-.538.39-1.167.565-1.944.65-.762.082-1.721.082-2.946.082h-.06c-1.225 0-2.184 0-2.946-.082-.777-.085-1.406-.26-1.944-.65a3.831 3.831 0 01-.848-.848c-.39-.538-.565-1.167-.65-1.944C1.5 10.214 1.5 9.255 1.5 8.03v-.06c0-1.225 0-2.184.082-2.946.085-.777.26-1.406.65-1.944.237-.325.523-.611.848-.848.538-.39 1.167-.565 1.944-.65C5.786 1.5 6.745 1.5 7.97 1.5z"
        stroke="url(#paint1_linear_5_8785)"
        strokeLinecap="round"
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 4.167h2.656a.49.49 0 01.02 0h2.657a.5.5 0 010 1H9.076l-1.133 5.666h2.056a.5.5 0 010 1H7.343a.32.32 0 01-.02 0H4.666a.5.5 0 110-1h2.257l1.133-5.666H6a.5.5 0 010-1z"
      fill="url(#paint2_linear_5_8785)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_5_8785"
        x1={1.5}
        y1={11.2818}
        x2={17.4976}
        y2={10.9029}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_5_8785"
        x1={1.5}
        y1={1.5}
        x2={14.5066}
        y2={14.4934}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_5_8785"
        x1={8.06391}
        y1={13.4668}
        x2={18.6454}
        y2={3.09459}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
    </Defs>
  </Svg>
)
