import * as React from 'react'
import Svg, {
  Circle,
  G,
  Path,
  Mask,
  Defs,
  Pattern,
  Use,
  LinearGradient,
  Stop,
  Image,
} from 'react-native-svg'

export const ProfileViewPhotoBottom = (props) => (
  <Svg
    width={68}
    height={68}
    viewBox="0 0 68 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Circle
      cx={25.9659}
      cy={26.0343}
      r={23.9659}
      fill="url(#paint0_linear_884_7711)"
      stroke="url(#paint1_linear_884_7711)"
      strokeWidth={4}
    />
    <Circle
      cx={25.9657}
      cy={26.0337}
      r={20.2354}
      fill="url(#paint2_linear_884_7711)"
      stroke="url(#paint3_linear_884_7711)"
    />
    <G filter="url(#filter0_ii_884_7711)">
      <Circle
        cx={25.9657}
        cy={26.0337}
        r={18.3692}
        fill="url(#paint4_linear_884_7711)"
      />
    </G>
    <G filter="url(#filter1_d_884_7711)">
      <Path
        d="M14.102 25.615a2.682 2.682 0 01-.18-3.509l2.783-3.566a2.697 2.697 0 012.126-1.037h14.325c.838 0 1.628.389 2.138 1.052l2.738 3.559a2.682 2.682 0 01-.187 3.49l-9.9 10.368a2.7 2.7 0 01-3.897.005l-9.946-10.362z"
        fill="url(#paint5_linear_884_7711)"
      />
    </G>
    <Mask
      id="a"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x={13}
      y={17}
      width={26}
      height={20}
    >
      <Path
        d="M14.102 25.615a2.682 2.682 0 01-.18-3.509l2.783-3.566a2.697 2.697 0 012.126-1.037h14.325c.838 0 1.628.389 2.138 1.052l2.738 3.559a2.682 2.682 0 01-.187 3.49l-9.9 10.368a2.7 2.7 0 01-3.897.005l-9.946-10.362z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        d="M12.492 23.932l5.024-6.43h16.982l4.953 6.43-13.444 14.06-13.515-14.06z"
        fill="url(#paint6_linear_884_7711)"
      />
      <Path
        d="M12.536 23.913l6.21 2.05 7.278 12.04-13.488-14.09zM39.408 23.913l-6.313 2.05-7.07 12.04 13.383-14.09z"
        fill="#000"
        fillOpacity={0.1}
      />
      <Path
        d="M25.921 18.877l-8.426-1.412 1.25 8.497H33.097l1.25-8.497-8.425 1.412z"
        fill="#fff"
      />
      <Path d="M17.495 17.465l8.53 2.833 8.474-2.83-17.004-.003z" fill="#fff" />
      <Path d="M25.92 18.877l-7.175 7.085h14.35l-7.174-7.085z" fill="#fff" />
      <Path
        d="M26.024 20.298l-7.279 5.664h14.35l-7.07-5.664zM18.745 25.962l-6.21-2.05 4.96-6.447h1.25v8.497zM33.095 25.962l6.35-2.05-4.96-6.447h-1.25l-.14 8.497z"
        fill="#fff"
      />
      <Path
        d="M18.745 25.962l7.244 12.022 7.106-12.022h-14.35z"
        fill="#fff"
        opacity={0.5}
      />
      <G
        style={{ mixBlendMode: 'soft-light' }}
        opacity={0.3}
        filter="url(#filter2_i_884_7711)"
      >
        <Path
          d="M18.745 25.962l7.244 12.022 7.106-12.022h-14.35z"
          fill="#000"
        />
      </G>
      <Path
        transform="rotate(-90 12.492 41.012)"
        fill="url(#pattern0)"
        fillOpacity={0.6}
        d="M12.4916 41.0117H39.4514V67.97149999999999H12.4916z"
      />
    </G>
    <G filter="url(#filter3_f_884_7711)">
      <G filter="url(#filter4_f_884_7711)">
        <Path
          d="M40.085 38.857a.243.243 0 01-.097-.096l-1.409-2.577-1.41 2.577a.243.243 0 01-.096.096l-2.576 1.41 2.576 1.409c.041.022.075.056.097.096l1.409 2.577 1.41-2.577a.244.244 0 01.096-.096l2.576-1.41-2.576-1.409z"
          fill="#fff"
        />
      </G>
      <Path
        d="M40.085 38.857a.243.243 0 01-.097-.096l-1.409-2.577-1.41 2.577a.243.243 0 01-.096.096l-2.576 1.41 2.576 1.409c.041.022.075.056.097.096l1.409 2.577 1.41-2.577a.244.244 0 01.096-.096l2.576-1.41-2.576-1.409z"
        fill="#fff"
      />
    </G>
    <G filter="url(#filter5_f_884_7711)">
      <Path
        d="M32.269 13.664a.093.093 0 01-.037-.037l-.537-.982-.538.982a.092.092 0 01-.037.037l-.982.538.982.537a.093.093 0 01.037.037l.538.982.537-.982a.093.093 0 01.037-.037l.982-.537-.982-.538z"
        fill="#FFB800"
      />
    </G>
    <Path
      d="M32.269 13.664a.093.093 0 01-.037-.037l-.537-.982-.538.982a.092.092 0 01-.037.037l-.982.538.982.537a.093.093 0 01.037.037l.538.982.537-.982a.093.093 0 01.037-.037l.982-.537-.982-.538z"
      fill="#fff"
    />
    <G filter="url(#filter6_f_884_7711)">
      <Path
        d="M13.837 24.002a.092.092 0 01-.037-.037l-.537-.983-.537.983a.092.092 0 01-.037.037l-.983.537.983.537a.093.093 0 01.037.037l.537.983.537-.983a.093.093 0 01.037-.037l.983-.537-.983-.537z"
        fill="#FF7A00"
      />
    </G>
    <Path
      d="M13.837 24.002a.092.092 0 01-.037-.037l-.537-.983-.537.983a.092.092 0 01-.037.037l-.983.537.983.537a.093.093 0 01.037.037l.537.983.537-.983a.093.093 0 01.037-.037l.983-.537-.983-.537z"
      fill="#fff"
    />
    <Defs>
      <Pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={33.2347}
        height={19.9408}
      >
        <Use xlinkHref="#image0_884_7711" transform="scale(.02596)" />
      </Pattern>
      <LinearGradient
        id="paint0_linear_884_7711"
        x1={12.0801}
        y1={3.61766}
        x2={25.9659}
        y2={52.0002}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFC737" />
        <Stop offset={0.501018} stopColor="#FFDD64" />
        <Stop offset={0.979167} stopColor="#CF7C00" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_884_7711"
        x1={25.9659}
        y1={0.0683594}
        x2={25.9659}
        y2={52.0002}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFF5DA" />
        <Stop offset={0.245067} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_884_7711"
        x1={14.877}
        y1={8.13267}
        x2={25.9657}
        y2={46.7691}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFB800" />
        <Stop offset={1} stopColor="#FFE195" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_884_7711"
        x1={25.9657}
        y1={5.29834}
        x2={25.9657}
        y2={46.7691}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFD874" />
        <Stop offset={1} stopColor="#FFEDBF" />
      </LinearGradient>
      <LinearGradient
        id="paint4_linear_884_7711"
        x1={16.1424}
        y1={10.1754}
        x2={25.9657}
        y2={44.4029}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF8B4A" />
        <Stop offset={1} stopColor="#D64D00" />
      </LinearGradient>
      <LinearGradient
        id="paint5_linear_884_7711"
        x1={25.9713}
        y1={17.5029}
        x2={25.9713}
        y2={36.8061}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFEF64" />
        <Stop offset={0.5} stopColor="#FFA215" />
        <Stop offset={1} stopColor="#FFE456" />
      </LinearGradient>
      <LinearGradient
        id="paint6_linear_884_7711"
        x1={25.9715}
        y1={17.5029}
        x2={25.9715}
        y2={37.9924}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFEF64" />
        <Stop offset={0.5} stopColor="#FFA215" />
        <Stop offset={1} stopColor="#FFE456" />
      </LinearGradient>
      <Image
        id="image0_884_7711"
        width={1280}
        height={768}
      />
    </Defs>
  </Svg>
)