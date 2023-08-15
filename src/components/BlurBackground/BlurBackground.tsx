import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { BlurView } from 'expo-blur';

interface BlurBackgroundProps {
  children: React.ReactNode
  borderRadius?: number
  blurAmount?: number
  blurType?: 'light' | 'extraLight' | 'dark'
  opacity?: number
}

const BlurBackground: React.FC<BlurBackgroundProps> = ({
  children,
  borderRadius = 50,
  blurAmount = 10,
  blurType = 'dark',
  opacity = 0.4,
}) => {
  return (
    <StyledContainer style={{ borderRadius }}>
      <StyledBlurView
        style={{ borderRadius, opacity }}
        blurType={blurType}
        blurAmount={blurAmount}
      />
      <StyledContent>{children}</StyledContent>
    </StyledContainer>
  )
}

const StyledContainer = styled(View)`
  overflow: hidden;
  position: relative;
  background-color: rgba(0,0,0,0.3);
  padding: 3px;
`

const StyledBlurView = styled(BlurView)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right 0;
`

const StyledContent = styled(View)`
  z-index: 1;
`

export default BlurBackground
