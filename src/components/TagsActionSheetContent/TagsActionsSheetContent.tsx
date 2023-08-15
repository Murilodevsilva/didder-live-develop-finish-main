import React from 'react'
import { Text, View } from 'react-native'
import ActionSheetWrapper from 'src/components/ActionSheetWrapper/ActionSheetWrapper'
import {
  Body,
  Container,
  Description,
  DescriptionContainer,
  Footer,
  Header,
  Tag,
  Title,
} from './tagsactionsheetcontent.styled'
import { Button } from 'src/styles'
import { PinGradientIcon } from 'src/assets/svg/PinGradientIcon'
import GradientButton from 'src/components/GradientButton/GradientButton'
import {
  Tag as TagType,
  useLiveContext,
} from 'src/contexts/LiveContextProvider'

const mockTags = [
  { id: 1, name: 'Tecnologia', selected: true, pin: true },
  { id: 2, name: 'Educação' },
  { id: 3, name: 'Saúde' },
  { id: 4, name: 'Entretenimento' },
  { id: 5, name: 'Esportes' },
  { id: 6, name: 'Viagens' },
  { id: 7, name: 'Culinária' },
  { id: 8, name: 'Finanças' },
  { id: 9, name: 'Gaming' },
  { id: 10, name: 'Política' },
  { id: 11, name: 'Tags' },
  { id: 12, name: 'Dançando' },
  { id: 13, name: 'Star' },
  { id: 14, name: 'AoVivo' },
  { id: 15, name: 'Viagem' },
]

type Props = {
  onClose: () => void
}

const TagsActionsSheetContent: React.FC<Props> = ({ onClose }) => {
  const { tags } = useLiveContext()

  const checkIfTagSelected = (tag: TagType) => tags.some((t) => t.id === tag.id)
  return (
    <Container>
      <Header>
        <Title>Selecionar Tags</Title>
        <DescriptionContainer>
          <Description>
            A tag marcada com <PinGradientIcon /> será destacada na capa da sua
            live
          </Description>
        </DescriptionContainer>
      </Header>
      <Body>
        {mockTags.map((tag) => {
          const isSelected = checkIfTagSelected(tag)
          return (
            <Tag selected={isSelected} key={tag.id} tag={tag}>
              <Text style={{ color: isSelected ? '#fff' : '#4568DC' }}>
                {tag.pin ? <PinGradientIcon gradientType="type3" /> : '#'}
                {tag.name.toLowerCase()}
              </Text>
            </Tag>
          )
        })}
      </Body>
      <Footer>
        <GradientButton onPress={onClose}>Salvar tags</GradientButton>
      </Footer>
    </Container>
  )
}

export default TagsActionsSheetContent
