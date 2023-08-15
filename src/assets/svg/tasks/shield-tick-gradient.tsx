import * as React from 'react'
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg'

export const ShieldTickGradient = (props) => (
  <Svg
    {...props}
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G clipPath="url(#a)">
      <G filter="url(#b)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.515 2.861C4.515 1.833 5.348 1 6.375 1H9.82c.92 0 1.666.746 1.666 1.667 0 .368.299.666.667.666h.393c1.057 0 1.986.82 1.943 1.944-.055 1.44-.335 3.752-1.457 5.797-.305.554-.71 1.099-1.15 1.606l-.033.038c-.632.73-1.159 1.34-1.725 1.754-.609.446-1.26.668-2.123.668-.865 0-1.515-.222-2.124-.668-.566-.415-1.093-1.024-1.725-1.754l-.033-.038c-.439-.507-.845-1.052-1.15-1.606-1.085-1.98-1.383-4.069-1.45-5.41-.058-1.129.878-1.942 1.929-1.942h.206a.861.861 0 0 0 .86-.86Z"
          fill="url(#c)"
        />
        <Path
          d="M4.015 2.861A2.361 2.361 0 0 1 6.375.5H9.82c1.197 0 2.166.97 2.166 2.167 0 .092.075.166.167.166h.393c1.303 0 2.498 1.02 2.443 2.463-.057 1.473-.342 3.874-1.519 6.018-.327.596-.757 1.17-1.21 1.693L4.015 2.861Zm0 0c0 .2-.162.361-.361.361h-.206c-1.293 0-2.503 1.01-2.43 2.468.07 1.38.377 3.554 1.513 5.624.327.596.757 1.17 1.21 1.693 0 0 0 0 0 0l.033.039h0l.028.032c.61.704 1.168 1.349 1.78 1.797.698.511 1.452.765 2.419.765.966 0 1.72-.254 2.419-.765.612-.448 1.17-1.093 1.779-1.797l.028-.032h0l.033-.039L4.015 2.861Z"
          stroke="url(#d)"
          strokeLinecap="round"
        />
      </G>
      <Path
        d="M10.39 7.147a.5.5 0 0 0-.78-.627L8.264 8.192c-.277.344-.451.558-.597.694a.632.632 0 0 1-.137.105C7.511 9 7.504 9 7.5 9s-.01 0-.03-.01a.633.633 0 0 1-.136-.104c-.146-.136-.32-.35-.597-.694l-.348-.431a.5.5 0 0 0-.778.627l.37.459c.247.308.467.58.67.77.219.204.49.383.849.383s.63-.179.849-.383c.204-.19.423-.462.67-.77l1.37-1.7Z"
        fill="url(#e)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="c"
        x1={1.516}
        y1={11.64}
        x2={17.483}
        y2={11.293}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={1.516}
        y1={1}
        x2={15.61}
        y2={13.919}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={8.042}
        y1={10.781}
        x2={12.898}
        y2={4.291}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
