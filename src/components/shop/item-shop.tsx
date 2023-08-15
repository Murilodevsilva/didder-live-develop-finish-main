import React, { FC, useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { CloseIconSignUp } from 'src/screens/sign-up/styles'
import { Xmark } from 'src/assets/svg'
import { CoinShop } from 'src/assets/svg/coin-shop'
import { Silver } from 'src/assets/svg/silver'
import { Time } from 'src/assets/svg/time'
import { BoxItem, ButtonItem, Line, TitleModalSucess } from 'src/styles/item'
import { modalStyle } from '../modals/shop'
import { useTranslation } from 'react-i18next'
import { LinearGradient } from 'expo-linear-gradient'
import {
  CenteredView,
  CloseModalContent,
  ContentCenter,
  Label,
  ModalAlternativeContent,
  ModalView,
  Row,
  SubTitle,
  TextCommon,
  Title,
  ViewMarginBottomSmall,
  basic,
} from 'src/styles'
import {
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import {
  ModaOptionTextEditProfile,
  ModalCancelAreaEditProfile,
  ModalCancelTextEditProfile,
  ModalEditPhotoContentEditProfile,
  ModalEditPhotoViewEditProfile,
  ModalOptionAreaEditProfile,
  ModalTitleEditPhotoEditProfile,
} from 'src/screens/profile/edit-profile/styles'
import {
  IconAreaCenterGifts,
  ModalCloseTextGifts,
  ModalTextGifts,
} from 'src/screens/profile/gifts-receiveds/styles'

type props = {
  time?: boolean
  permanent?: boolean
}

export const ItemShop: FC<props> = ({ time, permanent }) => {
  const { t, i18n } = useTranslation()

  const [isFirstModalVisible, openFirstModal] = useState(false)
  const [isModalConfirmVisible, openConfirmModal] = useState(false)
  const [isModalSuccessVisible, openSuccessModal] = useState(false)
  const navigation: NativeStackNavigationProp<any, any> = useNavigation()

  return (
    <BoxItem style={{ marginTop: '15%', marginBottom: '14%' }}>
      <Line />
      <ContentCenter>
        {time && (
          <Row style={[styles.row, { width: '24%' }]}>
            <Time />
            <SubTitle style={{ fontSize: 9 }}>
              7 {t('shop-modal-days')}
            </SubTitle>
          </Row>
        )}

        {permanent && (
          <Row style={[styles.row, { width: '36%' }]}>
            <Time />
            <SubTitle style={{ fontSize: 9 }}>
              {t('shop-item-permanent')}
            </SubTitle>
          </Row>
        )}

        {!permanent && !time && (
          <Row style={[styles.row, { width: '36%', height: '10.5%' }]} />
        )}

        <Silver />
        <Row style={styles.rowCoin}>
          <CoinShop />
          <TextCommon>5000</TextCommon>
        </Row>
        <SubTitle style={{ marginTop: '10%' }}>Silver Magnetic</SubTitle>

        <TouchableOpacity onPress={() => openFirstModal(true)}>
          <ButtonItem>
            <Title style={{ color: '#673AB3', fontSize: 10 }}>
              {t('shop-item-buy')}
            </Title>
          </ButtonItem>
        </TouchableOpacity>
      </ContentCenter>

      {/* First Modal */}
      <Modal
        visible={isFirstModalVisible}
        animationType="fade"
        transparent={true}
        statusBarTranslucent
        onRequestClose={() => {
          openFirstModal(!isFirstModalVisible)
        }}
      >
        <CenteredView
          style={{
            justifyContent: 'flex-end',
          }}
        >
          <ModalEditPhotoViewEditProfile
            style={[
              modalStyle.modalViewShadow,
              { width: '100%' },
              { height: '40%' },
            ]}
          >
            <ModalEditPhotoContentEditProfile>
              <ViewMarginBottomSmall style={{ padding: '2%' }}>
                <ModalTitleEditPhotoEditProfile>
                  {t('shop-item-name')}
                </ModalTitleEditPhotoEditProfile>
              </ViewMarginBottomSmall>

              <Row style={modalStyle.rowBorder}>
                <Row style={[modalStyle.row, { marginRight: '5%' }]}>
                  <CoinShop />
                  <TextCommon>5000</TextCommon>
                </Row>

                <Row style={[modalStyle.row, { width: '14%' }]}>
                  <Time />
                  <SubTitle style={{ fontSize: 12 }}>7 dias</SubTitle>
                </Row>
              </Row>
              <ModalOptionAreaEditProfile
                onPress={() => {
                  openFirstModal(false)
                  openConfirmModal(true)
                }}
              >
                <ModaOptionTextEditProfile>
                  {t('shop-buy-for-me')}
                </ModaOptionTextEditProfile>
              </ModalOptionAreaEditProfile>
              <ModalOptionAreaEditProfile
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#EEEEEE',
                }}
                onPress={() => {
                  openFirstModal(false)
                  navigation.navigate('People-Share-Shop')
                }}
              >
                <ModaOptionTextEditProfile>
                  {t('shop-buy-buddy')}
                </ModaOptionTextEditProfile>
              </ModalOptionAreaEditProfile>
              <ModalCancelAreaEditProfile>
                <Pressable onPress={() => openFirstModal(false)}>
                  <ModalCancelTextEditProfile>
                    {t('edit-profile-photo-modal-cancel')}
                  </ModalCancelTextEditProfile>
                </Pressable>
              </ModalCancelAreaEditProfile>
            </ModalEditPhotoContentEditProfile>
          </ModalEditPhotoViewEditProfile>
        </CenteredView>
      </Modal>

      {/* Confirm Modal */}
      <Modal
        statusBarTranslucent
        visible={isModalConfirmVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => {
          openConfirmModal(!isModalConfirmVisible)
        }}
      >
        <CenteredView>
          <ModalView
            style={[styles.modalShadow, { height: '50%', width: '95%' }]}
          >
            <CloseModalContent>
              <View></View>
              <CloseIconSignUp onPress={() => openConfirmModal(false)}>
                <Xmark />
              </CloseIconSignUp>
            </CloseModalContent>

            <ModalAlternativeContent>
              <IconAreaCenterGifts style={{ height: '100%' }}>
                <ModalTextGifts style={{ marginVertical: '10%', fontSize: 17 }}>
                  {t('shop-confirm-buy')}
                </ModalTextGifts>

                <TextCommon>{t('shop-modal-balance')}0</TextCommon>
                <Row style={{ marginTop: '10%', marginBottom: '16%' }}>
                  <Row style={styles.row}>
                    <Time width={30} height={19} viewBox="0 1 10 11" />
                    <SubTitle style={{ fontSize: 20 }}>
                      7 {t('shop-modal-days')}
                    </SubTitle>
                  </Row>

                  <Row
                    style={[styles.row, { marginLeft: '15%', width: '25%' }]}
                  >
                    <CoinShop />
                    <TextCommon style={{ fontSize: 20 }}>5000</TextCommon>
                  </Row>
                </Row>

                <TouchableOpacity
                  onPress={() => {
                    openConfirmModal(false)
                    openSuccessModal(true)
                  }}
                  style={basic.contentCenter}
                >
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.buttonModal}
                    colors={['#4568DC', '#3B4781']}
                  >
                    <Label>{t('shop-confirm-purchase')}</Label>
                  </LinearGradient>
                </TouchableOpacity>
                <Pressable onPress={() => openConfirmModal(false)}>
                  <ModalCloseTextGifts>{t('gift-close')}</ModalCloseTextGifts>
                </Pressable>
              </IconAreaCenterGifts>
            </ModalAlternativeContent>
          </ModalView>
        </CenteredView>
      </Modal>

      {/* Success Modal */}
      <Modal
        statusBarTranslucent
        visible={isModalSuccessVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => {
          openSuccessModal(!isModalSuccessVisible)
        }}
      >
        <CenteredView>
          <ModalView
            style={[styles.modalShadow, { height: '50%', width: '95%' }]}
          >
            <CloseModalContent>
              <View></View>
              <CloseIconSignUp onPress={() => openSuccessModal(false)}>
                <Xmark />
              </CloseIconSignUp>
            </CloseModalContent>

            <ModalAlternativeContent style={{ marginTop: '-20%' }}>
              <TitleModalSucess>
                {t('shop-success-modal-title')}
              </TitleModalSucess>
              <View style={{ marginTop: '10%', alignItems: 'center' }}>
                <Silver />
              </View>

              <View style={{ alignItems: 'center' }}>
                <Row style={[styles.row, { marginTop: '10%', width: '28%' }]}>
                  <Time height={20} viewBox="0 0 11 12" />
                  <SubTitle style={{ fontSize: 20 }}>
                    7 {t('shop-modal-days')}
                  </SubTitle>
                </Row>
              </View>

              <TouchableOpacity
                onPress={() => openSuccessModal(true)}
                style={[basic.contentCenter, { marginTop: '15%' }]}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.buttonModal}
                  colors={['#4568DC', '#3B4781']}
                >
                  <Label>{t('shop-success-modal-button')}</Label>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openSuccessModal(false)}>
                <ModalCloseTextGifts>{t('gift-close')}</ModalCloseTextGifts>
              </TouchableOpacity>
            </ModalAlternativeContent>
          </ModalView>
        </CenteredView>
      </Modal>
    </BoxItem>
  )
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '22%',
    marginBottom: '4%',
  },
  rowCoin: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5%',
    width: '30%',
  },
  buttonModal: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    padding: 15,
    borderRadius: 60,
  },
  modalShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    height: '40%',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})
