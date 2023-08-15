import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { EffectIcon } from 'src/assets/svg/effect-icon'
import { Time } from 'src/assets/svg/time'
import { ContentCenter, Row, SubTitle, Title } from 'src/styles'
import { BoxItem, ButtonItem, Line } from 'src/styles/item'

type props = {
  time?: boolean
  active?: boolean
}

export const ItemEffect: FC<props> = ({ time, active }) => {
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
        <TouchableOpacity>
          <EffectIcon />
        </TouchableOpacity>
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
