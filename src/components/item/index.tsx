import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from 'react-native'

import { Silver } from 'src/assets/svg/silver'
import { Time } from 'src/assets/svg/time'
import { Container, ContentCenter, Row, SubTitle, Title } from 'src/styles'
import { ButtonShare } from 'src/styles/feed'
import { BoxItem, ButtonItem, Line } from 'src/styles/item'

type props = {
  time?: boolean
  active?: boolean
}

export const Item: FC<props> = ({ time, active }) => {
  return (
    <BoxItem>
      <Line />
      <ContentCenter>
        {time && (
          <Row style={{ position: 'absolute', top: '-40%' }}>
            <Time style={{ paddingRight: '8%', marginTop: 7 }} />
            <SubTitle style={{ fontSize: 9 }}>7 horas</SubTitle>
          </Row>
        )}
        <Silver />
        <SubTitle style={{ marginTop: '10%' }}>Silver Magnetic</SubTitle>
        {active ? (
          <ButtonItem style={active ? { backgroundColor: '#673AB3' } : ''}>
            <Title
              style={
                active
                  ? { color: '#fff', fontSize: 10 }
                  : { color: '#673AB3', fontSize: 10 }
              }
            >
              {active ? 'Equipado' : 'Equipar'}
            </Title>
          </ButtonItem>
        ) : (
          <TouchableOpacity>
            <ButtonItem style={active ? { backgroundColor: '#673AB3' } : ''}>
              <Title
                style={
                  active
                    ? { color: '#fff', fontSize: 10 }
                    : { color: '#673AB3', fontSize: 10 }
                }
              >
                {active ? 'Equipado' : 'Equipar'}
              </Title>
            </ButtonItem>
          </TouchableOpacity>
        )}
      </ContentCenter>
    </BoxItem>
  )
}
