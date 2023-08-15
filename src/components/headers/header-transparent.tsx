import { Pressable, View } from 'react-native'
import '../../locales/i18n'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from '../../assets/svg/arrow-left'
import { BackgroundHeader, TextHeader } from './header-basic'
import styled from 'styled-components/native'
import { QuestionMark } from '../../assets/svg/question-mark'
import { FC } from 'react'

type Props = {
  title: string
  back: boolean
}

const ViewTransparent = styled.View`
  width: 100%;
  height: 32%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`
const ViewText = styled.View`
  height: 100%;
  align-items: center;
  flex: 1;
  justify-content: center;
`

export const HeaderTransparent: FC<Props> = ({ title, back }) => {
  const { t, i18n } = useTranslation()
  const navigation = useNavigation()
  return (
    <BackgroundHeader>
      <ViewTransparent>
        {back ? (
          <Pressable onPress={() => navigation.goBack()}>
            <ArrowLeft />
          </Pressable>
        ) : (
          <View style={{ height: 24, width: 24 }}></View>
        )}

        <ViewText>
          <TextHeader>{t(`${title}`)}</TextHeader>
        </ViewText>

        <QuestionMark />
      </ViewTransparent>
    </BackgroundHeader>
  )
}
