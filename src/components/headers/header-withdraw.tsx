import { FC, useState } from 'react'
import CountryFlag from 'react-native-country-flag'
import styled from 'styled-components/native'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'src/assets/svg/arrow-left'
import { LinearGradient } from 'expo-linear-gradient'
import { ArrowDownFilledWhite } from 'src/assets/svg/arrow-down-filled-white'
import { CloseIconSignUp } from 'src/screens/sign-up/styles'
import { XmarkWhite } from 'src/assets/svg/x-mark-white'
import 'src/locales/i18n'
import {
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import {
  CenteredView,
  ModalContent,
  ModalContentItems,
  ModalItem,
  ModalItemText,
  ModalTitle,
  ModalView,
  Row,
  modalStyle,
} from 'src/styles'

type Props = {
  title: string
  back?: boolean
  style?: any
}

export const TextHeader = styled.Text`
  color: #fff;
  font-family: 'Poppins';
  font-size: 20px;
  height: 100%;
`
export const BackgroundHeader = styled.SafeAreaView`
  width: 100%;
  height: 90px;
`
const SelectLanguageText = styled.Text`
  font-family: 'Poppins400';
  font-size: 14px;
  color: #fff;
`

export const HeaderWithdraw: FC<Props> = ({ title, back, style }) => {
  const { t, i18n } = useTranslation()
  const navigation = useNavigation()
  const [handleOpenModal, setOpenModal] = useState(false)
  const [currentLocation, setCurrentLocation] = useState(
    'modal-select-country-brazil'
  )
  let backProp: boolean

  const handleChangeLocation = (location: string) => {
    setCurrentLocation(location)
    setOpenModal(false)
  }

  if (back === undefined || back === true) {
    backProp = true
  } else {
    backProp = false
  }

  return (
    <View>
      <Modal
        animationType="fade"
        statusBarTranslucent
        transparent={true}
        visible={handleOpenModal}
        onRequestClose={() => {
          setOpenModal(!handleOpenModal)
        }}
      >
        <CenteredView>
          <ModalView style={[modalStyle.modalViewShadow, { width: '80%' }]}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.closeModalContent}
              colors={['#4568DC', '#3B4781']}
            >
              <View style={{ flex: 1 }} />
              <View style={{ flex: 2 }}>
                <ModalTitle style={{ color: '#fff' }}>
                  {t('modal-select-country')}
                </ModalTitle>
              </View>
              <CloseIconSignUp
                style={{ flex: 1 }}
                onPress={() => setOpenModal(false)}
              >
                <XmarkWhite />
              </CloseIconSignUp>
            </LinearGradient>

            <ModalContent>
              <ModalContentItems>
                <ModalItem
                  onPress={() =>
                    handleChangeLocation('modal-select-country-brazil')
                  }
                >
                  <CountryFlag isoCode="br" size={15} />
                  <ModalItemText>
                    {t('modal-select-country-brazil')}
                  </ModalItemText>
                </ModalItem>
                <ModalItem onPress={() => handleChangeLocation('USA')}>
                  <CountryFlag isoCode="us" size={15} />
                  <ModalItemText>{t('modal-select-country-usa')}</ModalItemText>
                </ModalItem>
              </ModalContentItems>
            </ModalContent>
          </ModalView>
        </CenteredView>
      </Modal>

      <BackgroundHeader style={{ ...style }}>
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

          <TouchableOpacity onPress={() => setOpenModal(true)}>
            <Row>
              <SelectLanguageText>{t(currentLocation)}</SelectLanguageText>
              <ArrowDownFilledWhite />
            </Row>
          </TouchableOpacity>
        </LinearGradient>
      </BackgroundHeader>
    </View>
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
  closeModalContent: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    justifyContent: 'space-between',
    padding: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
})
