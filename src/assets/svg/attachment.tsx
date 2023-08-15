import * as React from 'react'
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg'


export const Attachment = (props) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1_18321)">
        <G filter="url(#filter0_b_1_18321)" clipRule="evenodd">
          <Path
            fillRule="evenodd"
            d="M12.102 22.1c5.522 0 10-4.478 10-10 0-5.523-4.478-10-10-10-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10z"
            fill="url(#paint0_linear_1_18321)"
          />
          <Path
            d="M12.102 22.1c5.522 0 10-4.478 10-10 0-5.523-4.478-10-10-10-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10z"
            stroke="url(#paint1_linear_1_18321)"
            strokeWidth={0.3}
          />
        </G>
        <G filter="url(#filter1_d_1_18321)">
          <Path
            d="M13.882 6.278c.41-.2.893-.259 1.37-.133 1.04.272 1.656 1.316 1.378 2.332l-1.585 5.782c-.278 1.016-1.346 1.619-2.385 1.346-1.039-.272-1.656-1.316-1.377-2.332l.633-2.313a.489.489 0 00-.354-.6.502.502 0 00-.613.347l-.634 2.312c-.421 1.539.512 3.12 2.086 3.532 1.573.413 3.19-.5 3.612-2.039l1.584-5.781c.422-1.539-.512-3.12-2.085-3.533a3 3 0 00-2.076.203c-.38.185-.72.45-.99.78a.482.482 0 00.078.688c.216.169.53.135.704-.076.178-.217.402-.392.654-.515z"
            fill="url(#paint2_linear_1_18321)"
          />
          <Path
            d="M9.551 10.34c.279-1.015 1.347-1.618 2.386-1.346 1.039.272 1.655 1.316 1.377 2.332l-.634 2.313a.489.489 0 00.354.6.502.502 0 00.614-.347l.634-2.312c.421-1.539-.512-3.12-2.086-3.532-1.573-.412-3.19.5-3.612 2.039L7 15.869c-.422 1.538.512 3.12 2.085 3.532a3 3 0 002.075-.203c.381-.185.72-.45.99-.78a.482.482 0 00-.077-.688.508.508 0 00-.704.076 1.979 1.979 0 01-2.025.649c-1.039-.273-1.655-1.317-1.377-2.333l1.584-5.781z"
            fill="url(#paint3_linear_1_18321)"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1_18321"
          x1={2.10156}
          y1={17.1485}
          x2={26.7132}
          y2={16.5656}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#4568DC" />
          <Stop offset={1} stopColor="#B06AB3" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_1_18321"
          x1={2.10156}
          y1={2.09961}
          x2={22.1117}
          y2={22.0895}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" stopOpacity={0.25} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_1_18321"
          x1={12.3894}
          y1={22.5674}
          x2={31.3627}
          y2={8.61851}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_1_18321"
          x1={12.3894}
          y1={22.5674}
          x2={31.3627}
          y2={8.61851}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
        </LinearGradient>
        <ClipPath id="clip0_1_18321">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
