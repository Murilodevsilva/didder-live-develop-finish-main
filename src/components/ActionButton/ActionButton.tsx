import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

interface Props {
  onPress: () => void
  icon: React.ReactNode
  title: string | React.ReactNode
}

export const Container = styled(TouchableOpacity)``

export const Icon = styled.View``
const Title = styled.Text``

const ActionButton : React.FC<Props> = ({onPress, icon, title}) => {
  return (
    <Container>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
    </Container>
  )
}

export default ActionButton
