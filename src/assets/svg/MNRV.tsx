import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const MNRV = (props) => {
  return (
    <Svg
      width={32}
      height={10}
      viewBox="0 0 32 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.082 9.172c-.517-.496-.92-1.136-1.208-1.92a7.298 7.298 0 01-.432-2.536c0-.917.15-1.773.448-2.568.299-.8.723-1.45 1.272-1.952h1.344v.128a5.685 5.685 0 00-1.296 2 6.483 6.483 0 00-.456 2.392c0 .816.147 1.603.44 2.36a5.855 5.855 0 001.24 1.968v.128H2.082zm8.333-7.288V7.5H9.047V4.132L7.79 7.5H6.687L5.423 4.124V7.5H4.055V1.884H5.67l1.576 3.888 1.56-3.888h1.608zM16.422 7.5h-1.368l-2.288-3.464V7.5h-1.368V1.884h1.368l2.288 3.48v-3.48h1.368V7.5zm3.856 0L19.11 5.38h-.328V7.5h-1.368V1.884h2.296c.443 0 .819.077 1.128.232.315.155.55.368.704.64.155.267.232.565.232.896 0 .373-.107.707-.32 1-.208.293-.517.501-.928.624L21.822 7.5h-1.544zm-1.496-3.088h.848c.25 0 .437-.061.56-.184.128-.123.192-.296.192-.52 0-.213-.064-.381-.192-.504-.123-.123-.31-.184-.56-.184h-.848v1.392zm9.123-2.528L25.913 7.5H24.2l-1.992-5.616h1.456l1.392 4.24 1.4-4.24h1.448zm.203 7.288v-.128a5.856 5.856 0 001.24-1.968 6.48 6.48 0 00.44-2.36c0-.821-.151-1.619-.456-2.392a5.685 5.685 0 00-1.296-2V.196h1.345c.549.501.973 1.152 1.271 1.952.3.795.448 1.65.448 2.568 0 .907-.144 1.752-.431 2.536-.288.784-.691 1.424-1.209 1.92h-1.352z"
        fill="#3C4E97"
      />
    </Svg>
  )
}
