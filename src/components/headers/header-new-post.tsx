import { FC } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { BackgroundHeader, TextHeader } from './header-basic'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { XmarkWhite } from 'src/assets/svg/x-mark-white'
import styled from 'styled-components/native'

type Props = {
  title: string
}

const Button = styled.TouchableOpacity`
  width: 81px;
  height: 33px;
  border-radius: 40px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin-bottom: -5px;
`

const ButtonText = styled.Text`
  font-family: 'Poppins600';
  font-size: 12px;
  color: #3C4E97;
`

export const HeaderNewPost: FC<Props> = ({ title }) => {
  const { t, i18n } = useTranslation()
  const navigation: NativeStackNavigationProp<any, any> = useNavigation()

  return (
    <>
      <BackgroundHeader>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.background}
          colors={['#4568DC', '#3B4781']}
        >
          <View style={styles.centralizer}>
            <Pressable onPress={() => navigation.goBack()}>
              <XmarkWhite />
            </Pressable>

            <TextHeader style={{ marginBottom: -5, marginRight: -30 }}>
              {t(`${title}`)}
            </TextHeader>
            <Button>
              <ButtonText>Postar</ButtonText>
            </Button>
          </View>
        </LinearGradient>
      </BackgroundHeader>
    </>
  )
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 13,
  },
  centralizer: {
    height: 35,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
