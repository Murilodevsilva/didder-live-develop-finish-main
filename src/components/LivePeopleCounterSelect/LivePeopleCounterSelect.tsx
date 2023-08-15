import React from 'react'
import styled from 'styled-components/native'

type Props = {
  items: React.ReactNode[]
}

const Container = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`

const Item = styled.View`
  margin: 5px;
`

const LivePeopleCounterSelect: React.FC<Props> = ({ items }) => {
  return (
    <Container>
      {items.map((item, index) => (
        <Item key={`item-${index}`}>{item}</Item>
      ))}
    </Container>
  )
}

export default LivePeopleCounterSelect
