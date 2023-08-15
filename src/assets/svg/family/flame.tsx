import * as React from 'react'
import Svg, {
  Path
} from 'react-native-svg'

export const Flame = (props) => (
  <Svg
  width={11}
  height={14}
  viewBox="0 0 11 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <Path
    d="M.19 6.838a5.465 5.465 0 001.646 1.393S1.027 1.644 6.292.5c-1.35 4.775 1.717 6.121 2.835 3.599a3.868 3.868 0 01.449 4.498c.765.107 1.409-.7 1.409-.7.005.1.008.2.008.3-.003 2.056-1.239 3.925-3.172 4.794-1.932.87-4.212.583-5.849-.735C.335 10.937-.362 8.826.182 6.838H.19z"
    fill="#FF6536"
  />
  <Path
    d="M10.992 7.898s-.644.806-1.409.7a3.868 3.868 0 00-.45-4.5C8.017 6.62 4.95 5.276 6.299.5c-.27.058-.535.135-.794.229v12.767C8.54 13.496 11 11.124 11 8.197c0-.1-.002-.2-.008-.3z"
    fill="#FF421D"
  />
  <Path
    d="M3.094 11.172c0 1.068.754 1.998 1.829 2.256 1.074.258 2.193-.223 2.712-1.166a2.265 2.265 0 00-.52-2.819c-.932 1.22-2.26-.631-1.226-1.983 0 .004-2.795.338-2.795 3.712z"
    fill="#FBBF00"
  />
  <Path
    d="M7.914 11.172c0-.66-.29-1.289-.801-1.729-.932 1.22-2.26-.631-1.226-1.983-.131.02-.26.052-.387.093V13.5c.64 0 1.255-.244 1.708-.681.453-.437.707-1.03.706-1.647z"
    fill="#FFA900"
  />
</Svg>
)
