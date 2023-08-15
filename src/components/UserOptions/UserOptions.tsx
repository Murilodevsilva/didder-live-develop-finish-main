import React from 'react'

import { Body, Container, Header, ListItems, Title } from './userOptions.styled'
import ActionButton from 'src/components/ActionButton/ActionButton'
import { Share } from 'src/assets/svg/invite-friends/share'

type Props = {}

const UserOptions = (props: Props) => {
  return (
    <Container>
      <Header>
        <Title>Ferramentas da sala</Title>
      </Header>
      <Body>
        <ListItems>
          <ActionButton title="Compartilhar" icon={<Share />} onPress={() => {}} />
        </ListItems>
      </Body>
    </Container>
  )
}

export default UserOptions
