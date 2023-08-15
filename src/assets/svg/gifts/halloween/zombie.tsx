import * as React from 'react'
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg'

export const Zombie = (props) => (
  <Svg
  width={60}
  height={60}
  viewBox="0 0 60 60"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  {...props}
>
  <Path fill="url(#pattern0)" d="M0 0H60V60H0z" />
  <Defs>
    <Pattern
      id="pattern0"
      patternContentUnits="objectBoundingBox"
      width={1}
      height={1}
    >
      <Use xlinkHref="#image0_483_10576" transform="scale(.00046)" />
    </Pattern>
    <Image
      id="image0_483_10576"
      width={2160}
      height={2160}
    />
  </Defs>
</Svg>
)