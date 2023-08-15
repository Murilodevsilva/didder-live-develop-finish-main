import { Modal, StyleSheet, View, TouchableOpacity } from 'react-native'
import {
  CenteredView,
  ModalContent,
  ModalContentItems,
  ModalTitle,
  ModalView,
  modalStyle,
} from 'src/styles'
import { LinearGradient } from 'expo-linear-gradient'
import { CloseIconSignUp } from 'src/screens/sign-up/styles'
import { XmarkWhite } from 'src/assets/svg/x-mark-white'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  CheckAreaEditProfile,
  TextConfirmNumberEditProfile,
} from 'src/screens/profile/edit-profile/styles'
import { RadioButton } from '../radio-button'
import styled from 'styled-components/native'

type Props = {
  setDisplayDatePicker: Dispatch<SetStateAction<string | Date>>
  setShowDatePicker: Dispatch<SetStateAction<boolean>>
}

const ButtonConfirmText = styled.Text`
  font-family: 'Poppins600';
  color: #fff;
  font-size: 14px;
  text-align: center;
`

const initialState = {
  selectedOne: false,
  disableOne: false,
  selectedTwo: false,
  disableTwo: false,
  selectedThree: false,
  disableThree: false,
  selectedFour: false,
  disableFour: false,
  selectedFive: false,
  disableFive: false,
  selectedSix: false,
  disableSix: false,
}

export const SelectMonth: FC<Props> = ({
  setShowDatePicker,
  setDisplayDatePicker,
}) => {
  const [selecteds, setSelecteds] = useState({
    ...initialState,
  })
  const [date, setDate] = useState('')
  const { t, i18n } = useTranslation()

  const handleSelectDate = (option) => {
    switch (option) {
      case 'one':
        setSelecteds({
          ...initialState,
          selectedOne: !selecteds.selectedOne,
          disableOne: !selecteds.disableOne,
        })
        setDate('select-month-last-30')
        break
      case 'two':
        setSelecteds({
          ...initialState,
          selectedTwo: !selecteds.selectedTwo,
          disableTwo: !selecteds.disableTwo,
        })
        setDate('select-month-last-7')
        break
      case 'three':
        setSelecteds({
          ...initialState,
          selectedThree: !selecteds.selectedThree,
          disableThree: !selecteds.disableThree,
        })
        setDate('select-month-last-month')
        break
      case 'four':
        setSelecteds({
          ...initialState,
          selectedFour: !selecteds.selectedFour,
          disableFour: !selecteds.disableFour,
        })
        setDate('select-month-current-month')
        break
      case 'five':
        setSelecteds({
          ...initialState,
          selectedFive: !selecteds.selectedFive,
          disableFive: !selecteds.disableFive,
        })
        setDate('select-month-last-week')
        break
      case 'six':
        setSelecteds({
          ...initialState,
          selectedSix: !selecteds.selectedSix,
          disableSix: !selecteds.disableSix,
        })
        setDate('select-month-current-week')
        break
    }
  }

  const handleDate = () => {
    setDisplayDatePicker(date)
    setShowDatePicker(false)
  }

  return (
    <Modal
      animationType="fade"
      statusBarTranslucent
      transparent={true}
      visible={true}
    >
      <CenteredView>
        <ModalView
          style={[modalStyle.modalViewShadow, { width: '80%', height: '50%' }]}
        >
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
                onPress={() => setShowDatePicker(false)}
              >
                <XmarkWhite />
              </CloseIconSignUp>
            </LinearGradient>

          <ModalContent>
            <ModalContentItems
              style={{ width: '100%', marginTop: 0, alignItems: 'center' }}
            >
              <ModalContentItems
                style={{ width: '100%', height: '75%', marginTop: '-4%' }}
              >
                <CheckAreaEditProfile onPress={() => handleSelectDate('one')}>
                  <RadioButton selected={selecteds.selectedOne} />
                  <TextConfirmNumberEditProfile>
                    {t('select-month-last-30')}
                  </TextConfirmNumberEditProfile>
                </CheckAreaEditProfile>
                <CheckAreaEditProfile
                  onPress={() => handleSelectDate('two')}
                  style={{ marginTop: 20 }}
                >
                  <RadioButton selected={selecteds.selectedTwo} />
                  <TextConfirmNumberEditProfile>
                    {t('select-month-last-7')}
                  </TextConfirmNumberEditProfile>
                </CheckAreaEditProfile>
                <CheckAreaEditProfile
                  onPress={() => handleSelectDate('three')}
                  style={{ marginTop: 20 }}
                >
                  <RadioButton selected={selecteds.selectedThree} />
                  <TextConfirmNumberEditProfile>
                    {t('select-month-last-month')}
                  </TextConfirmNumberEditProfile>
                </CheckAreaEditProfile>
                <CheckAreaEditProfile
                  onPress={() => handleSelectDate('four')}
                  style={{ marginTop: 20 }}
                >
                  <RadioButton selected={selecteds.selectedFour} />
                  <TextConfirmNumberEditProfile>
                    {t('select-month-current-month')}
                  </TextConfirmNumberEditProfile>
                </CheckAreaEditProfile>
                <CheckAreaEditProfile
                  onPress={() => handleSelectDate('five')}
                  style={{ marginTop: 20 }}
                >
                  <RadioButton selected={selecteds.selectedFive} />
                  <TextConfirmNumberEditProfile>
                    {t('select-month-last-week')}
                  </TextConfirmNumberEditProfile>
                </CheckAreaEditProfile>
                <CheckAreaEditProfile
                  onPress={() => handleSelectDate('six')}
                  style={{ marginTop: 20 }}
                >
                  <RadioButton selected={selecteds.selectedSix} />
                  <TextConfirmNumberEditProfile>
                    {t('select-month-current-week')}
                  </TextConfirmNumberEditProfile>
                </CheckAreaEditProfile>
              </ModalContentItems>
            </ModalContentItems>

            <TouchableOpacity onPress={handleDate} style={styles.touchableArea}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.button}
                colors={['#4568DC', '#3B4781']}
              >
                <ButtonConfirmText>
                  {t('select-month-confirm')}
                </ButtonConfirmText>
              </LinearGradient>
            </TouchableOpacity>
          </ModalContent>
        </ModalView>
      </CenteredView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  animated: {
    zIndex: 1,
  },
  closeModalContent: {
    display: 'flex',
    flexDirection: 'row',
    height: '12%',
    width: '100%',
    position: 'absolute',
    justifyContent: 'space-between',
    padding: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  touchableArea: {
    width: '100%',
    height: '10%',

    borderRadius: 20,
    marginTop: '-8%',
  },
  button: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    justifyContent: 'center',
  },
})
