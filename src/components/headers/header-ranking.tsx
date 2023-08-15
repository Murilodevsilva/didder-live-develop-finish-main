import styled from 'styled-components/native'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'src/assets/svg/arrow-left'
import { BackgroundHeader, TextHeader } from './header-basic'
import { LinearGradient } from 'expo-linear-gradient'
import { CloseIconSignUp } from 'src/screens/sign-up/styles'
import { XmarkWhite } from 'src/assets/svg/x-mark-white'
import { ArrowDownFilledWhite } from 'src/assets/svg/arrow-down-filled-white'
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
import 'src/locales/i18n'

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
const Select = styled.Text`
  font-family: 'Poppins400';
  font-size: 14px;
  color: #fff;
  width: 60px;
`

export const HeaderRanking: FC<Props> = ({ title, back }) => {
  const { t, i18n } = useTranslation()
  const navigation = useNavigation()
  const [handleOpenModal, setOpenModal] = useState(false)
  const [optionSelected, setOptionSelected] = useState('Global')

  const handleSelect = (option: string) => {
    setOptionSelected(option)
    setOpenModal(false)
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
                <ModalTitle style={{ color: '#fff' }}>{t('ranking-modal-title')}</ModalTitle>
              </View>
              <CloseIconSignUp
                style={{ flex: 1 }}
                onPress={() => setOpenModal(false)}
              >
                <XmarkWhite />
              </CloseIconSignUp>
            </LinearGradient>

            <ModalContent>
              <ModalContentItems style={{ width: '100%' }}>
                <ModalItem onPress={() => handleSelect('Global')}>
                  <ModalItemText style={{ marginLeft: 0 }}>
                    Global
                  </ModalItemText>
                </ModalItem>
                <ModalItem onPress={() => handleSelect('Local')}>
                  <ModalItemText style={{ marginLeft: 0 }}>Local</ModalItemText>
                </ModalItem>
              </ModalContentItems>
            </ModalContent>
          </ModalView>
        </CenteredView>
      </Modal>

      <BackgroundHeader>
        <ViewTransparent>
          {back ? (
            <Pressable onPress={() => navigation.goBack()}>
              <ArrowLeft />
            </Pressable>
          ) : (
            <View style={{ height: 24, width: 24 }}></View>
          )}

          <ViewText style={{ marginRight: '-10%' }}>
            <TextHeader>{t(`${title}`)}</TextHeader>
          </ViewText>

          <TouchableOpacity
            onPress={() => setOpenModal(true)}
            style={{ marginBottom: '-2%', width: 80 }}
          >
            <Row>
              <Select>{optionSelected}</Select>
              <ArrowDownFilledWhite />
            </Row>
          </TouchableOpacity>
        </ViewTransparent>
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
    height: '20%',
    width: '100%',
    position: 'absolute',
    justifyContent: 'space-between',
    padding: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
})
