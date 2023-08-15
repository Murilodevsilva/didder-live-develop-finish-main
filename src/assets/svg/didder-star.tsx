import * as React from 'react'
import Svg, { Path, G, Mask, Defs, Pattern, Use, Image } from 'react-native-svg'

export const DidderStar = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path fill="url(#pattern0)" d="M0 0.53302H24V23.46702H0z" />
    <G style={{ mixBlendMode: 'multiply' }}>
      <Mask
        id="a"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={24}
        height={24}
      >
        <Path fill="url(#pattern1)" d="M0 0.53302H24V23.46702H0z" />
      </Mask>
      <G mask="url(#a)">
        <Path fill="#7A5AC1" d="M0 0.53302H24V23.46702H0z" />
      </G>
    </G>
    <Path
      fill="url(#pattern2)"
      style={{ mixBlendMode: 'soft-light' }}
      d="M0 0.53302H24V23.46702H0z"
    />
    <G filter="url(#filter0_ddii_5_1285)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.166 16.951a4.275 4.275 0 004.282-4.267 4.275 4.275 0 00-4.282-4.267 4.275 4.275 0 00-4.282 4.267 4.275 4.275 0 004.282 4.267zm-2.83-6.303l1.192 1.248h2.502l-.417 1.604h-.864l.328-1.218h-1.698l-.626 2.436h3.813l.506-.416.864-3.208-.298-.446H9.336z"
        fill="#836FD0"
      />
    </G>
    <Defs>
      <Pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_5_1285" transform="scale(.00062 .00065)" />
      </Pattern>
      <Pattern
        id="pattern1"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_5_1285" transform="scale(.00062 .00065)" />
      </Pattern>
      <Pattern
        id="pattern2"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_5_1285" transform="scale(.00062 .00065)" />
      </Pattern>
      <Image
        id="image0_5_1285"
        width={1621}
        height={1549}
      />
    </Defs>
  </Svg>
)