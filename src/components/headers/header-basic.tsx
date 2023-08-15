import { LinearGradient } from 'expo-linear-gradient'
import { Pressable, StyleSheet, View ,Text,TouchableOpacity} from 'react-native'
import '../../locales/i18n'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from '../../assets/svg/arrow-left'
import styled from 'styled-components/native'
import { FC } from 'react'

type Props = {
  title: string
  back?: boolean
  style?: any
  icon?: string
}

export const TextHeader = styled.Text`
  color: #fff;
  font-family: 'Poppins';
  font-size: 20px;
  height: 100%;
  width:100%;
  margin-left:65px;
`
export const BackgroundHeader = styled.SafeAreaView`
  width: 100%;
  height: 90px;
`

export const HeaderBasic: FC<Props> = ({ title, back, style, icon }) => {
  const { t, i18n } = useTranslation()
  const navigation = useNavigation()
  let backProp: boolean

  if (back === undefined || back === true) {
    backProp = true
  } else {
    backProp = false
  }

  

  return (
    <BackgroundHeader style={{...style}}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.background}
        colors={['#4568DC', '#3B4781']}
      >
        {backProp ? (
          <Pressable
            style={{ marginTop: 10 }}
            onPress={() => navigation.goBack()}
          >
            <ArrowLeft />
          </Pressable>
          
        ) : (
          <View
            style={{
              width: 24,
              height: 24,
            }}
          />
        )}

        <View style={{ height: 30, marginBottom: -4 }}>
          <TextHeader>{t(`${title}`)}</TextHeader>
        </View>
        <TouchableOpacity>
          <Text  style={{
          borderWidth:2,
          borderColor:'white',
          borderRadius:15,
          color:'white',
          fontSize:18,
          fontWeight:'bold',
          textAlign:'center',
          width:25,height:25,
          position:'absolute',
          right:-90,top:-20}}>{icon}
          </Text>
          </TouchableOpacity>

        <View
          style={{
            width: 24,
            height: 24,
          }}
        />
      </LinearGradient>
    </BackgroundHeader>
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
})
