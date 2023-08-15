import { StyleSheet, View, Animated, Modal } from 'react-native'
import styled from 'styled-components/native'
import { ArrowDownFilled } from '../assets/svg/arrow-down-filled'
import CountryFlag from 'react-native-country-flag'
import React, { FC, useEffect, useRef, useState } from 'react'
import { changeLanguage } from '../locales/i18n'
import { useTranslation } from 'react-i18next'
import {
  CenteredView,
  ModalContent,
  ModalContentItems,
  ModalItem,
  ModalItemText,
  ModalTitle,
  ModalView,
  modalStyle,
} from '../styles'
import { LinearGradient } from 'expo-linear-gradient'
import { CloseIconSignUp } from '../screens/sign-up/styles'
import { XmarkWhite } from '../assets/svg/x-mark-white'

const Select = styled.Pressable`
  border-width: 1px;
  border-color: #eeeeee;
  height: 44px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  background-color: white;
`
const Label = styled.Text`
  font-family: 'Poppins400';
  font-size: 14px;
  color: #111111;
  margin-bottom: 10px;
`
const SelectCountry = styled.View`
  display: flex;
  flex-direction: row;
  width: 22%;
  align-items: center;
  justify-content: space-between;
`
const SelectCountryText = styled.Text`
  font-family: 'PoppinsLight';
  font-size: 12px;
  color: #333;
`
const OpenSelect = styled.View`
  border-width: 1px;
  border-color: #eeeeee;
  background-color: white;
  border-radius: 8px;
  height: 150px;
  width: 100%;
  position: absolute;
  top: -50px;
  left: 0;
  padding: 20px;
  z-index: 1;
`

export const SelectLanguage: FC = () => {
  const [showSelect, setShowSelect] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const { t, i18n } = useTranslation()
  const changePositionX = useRef(new Animated.Value(0)).current

  const animate = () => {
    if (showSelect) {
      Animated.timing(changePositionX, {
        toValue: 60,
        duration: 150,
        useNativeDriver: true,
      }).start()
    } else {
      Animated.timing(changePositionX, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start()
    }
  }

  useEffect(() => {
    animate()
  }, [showSelect])

  return (
    <View>
      <Modal
        animationType="fade"
        statusBarTranslucent
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
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
                onPress={() => setModalVisible(false)}
              >
                <XmarkWhite />
              </CloseIconSignUp>
            </LinearGradient>

            <ModalContent>
              <ModalContentItems style={{ width: '100%' }}>
                <ModalItem
                  style={{ width: '100%' }}
                  onPress={() => {
                    changeLanguage('pt')
                    setModalVisible(false)
                  }}
                >
                  <CountryFlag
                    isoCode="br"
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 20 / 2,
                      marginBottom: 5,
                    }}
                  />

                  <SelectCountryText style={{ marginLeft: 10 }}>
                    PT-BR
                  </SelectCountryText>
                </ModalItem>
                <ModalItem
                  onPress={() => {
                    changeLanguage('en')
                    setModalVisible(false)
                  }}
                >
                  <CountryFlag
                    isoCode="us"
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 20 / 2,
                      marginBottom: 5,
                    }}
                  />

                  <SelectCountryText style={{ marginLeft: 10 }}>
                    EN-US
                  </SelectCountryText>
                </ModalItem>
              </ModalContentItems>
            </ModalContent>
          </ModalView>
        </CenteredView>
      </Modal>

      <Label>{t('select-language-label')}</Label>

      <Select onPress={() => setModalVisible((prev) => !prev)}>
        <SelectCountry>
          <CountryFlag
            isoCode={i18n.language === 'pt' ? 'br' : 'us'}
            style={{ width: 20, height: 20, borderRadius: 20 / 2 }}
          />

          <SelectCountryText>
            {i18n.language === 'pt' ? 'PT-BR' : 'EN-US'}
          </SelectCountryText>
        </SelectCountry>

        <ArrowDownFilled />
      </Select>

      {/* <Animated.View
        pointerEvents={showSelect ? 'auto' : 'none'}
        style={[
          styles.animated,
          {
            transform: [{ translateY: changePositionX }],
            opacity: changePositionX,
          },
        ]}
      >
        <OpenSelect>
          <Select
            onPress={() => {
              if (showSelect) {
                changeLanguage('pt')
                setShowSelect(false)
              }
            }}
          >
            <SelectCountry>
              <CountryFlag
                isoCode="br"
                style={{ width: 20, height: 20, borderRadius: 20 / 2 }}
              />

              <SelectCountryText>PT-BR</SelectCountryText>
            </SelectCountry>
          </Select>
          <Select
            onPress={() => {
              if (showSelect) {
                changeLanguage('en')
                setShowSelect(false)
              }
            }}
            style={{ marginTop: 10 }}
          >
            <SelectCountry>
              <CountryFlag
                isoCode="us"
                style={{ width: 20, height: 20, borderRadius: 20 / 2 }}
              />

              <SelectCountryText>EN-US</SelectCountryText>
            </SelectCountry>
          </Select>
        </OpenSelect>
      </Animated.View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  animated: {
    zIndex: 1,
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
