import React from 'react'
import { Text, View } from 'react-native'
import ActionSheetWrapper from 'src/components/ActionSheetWrapper/ActionSheetWrapper'
import * as Styled from './gistActionsSheet.styled'
import SegmentedItemList, {
  Item,
} from 'src/components/SegmentedItemList/SegmentedItemList'
import LiveWatchers from 'src/components/LiveWatchers/LiveWatchers'
import { useShowVideoLiveContext } from 'src/contexts/ShowVideoLiveContext'
import { CoinShop } from 'src/assets/svg/coin-shop'
import SelectWithButton from 'src/components/SelectWithButton/SelectWithButton'

const gitImage = require('src/assets/images/gift-blue-white/gift.png')

type Props = {}

const GiftsActionSheet = (props: Props) => {
  const { onlineUsers } = useShowVideoLiveContext()

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.HeaderLeft>
          <Styled.ButtonLink>
            <Styled.TextButton>Enviar</Styled.TextButton>
          </Styled.ButtonLink>
        </Styled.HeaderLeft>
        <Styled.HeaderCenter>
          <LiveWatchers
            hideCloseButton
            hideInfoButton
            onlineUsers={onlineUsers}
          />
        </Styled.HeaderCenter>
        <Styled.HeaderRight>
          <Styled.ButtonLink>
            <Styled.TextButton>Todos</Styled.TextButton>
          </Styled.ButtonLink>
        </Styled.HeaderRight>
      </Styled.Header>
      <Styled.Content>
        <SegmentedItemList items={itemsMock} />
      </Styled.Content>
      <Styled.Footer>
        <Styled.TotalWrapper>
          <Styled.TotalText>valor total</Styled.TotalText>
          <CoinShop />
          <Styled.TotalValue>400</Styled.TotalValue>
        </Styled.TotalWrapper>
        <SelectWithButton
          options={[
            {
              label: '1',
              value: '1',
            },
            {
              label: '2',
              value: '2',
            },
          ]}
          onSubmit={() => {}}
        />
      </Styled.Footer>
    </Styled.Container>
  )
}

export default GiftsActionSheet

const itemsMock: Item[] = [...Array(16)].map((_, i) => ({
  name: `Item ${i + 1}`,
  value: Math.floor(Math.random() * (400 - 100 + 1)) + 100,
  image: gitImage,
  category: `Categoria ${(i % 3) + 1}`, // Apenas para fins de teste, dividimos os itens em 3 categorias
}))
