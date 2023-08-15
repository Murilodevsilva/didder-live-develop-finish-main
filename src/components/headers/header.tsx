import { LinearGradient } from 'expo-linear-gradient'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'src/assets/svg/arrow-left'
import { Chat } from 'src/assets/svg/chat'
import { BackgroundHeader, TextHeader } from './header-basic'
import { FC, useState } from 'react'
import { QuestionMark } from 'src/assets/svg/question-mark'
import { Ticket } from 'src/assets/svg/level/ticket'
import styled from 'styled-components/native'
import { LevelUp } from 'src/assets/svg/level/level-up'
import { ThreeDots } from 'src/assets/svg/three-dots'
import {
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import {
  CenteredView,
  Row,
  ViewMarginBottomSmall,
  modalStyle,
} from 'src/styles'
import {
  ModaOptionTextEditProfile,
  ModalCancelAreaEditProfile,
  ModalCancelTextEditProfile,
  ModalEditPhotoContentEditProfile,
  ModalEditPhotoViewEditProfile,
  ModalOptionAreaEditProfile,
  ModalTitleEditPhotoEditProfile,
} from 'src/screens/profile/edit-profile/styles'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Media } from 'src/assets/svg/media'

const TitleFaqModal = styled.Text`
  font-family: 'Poppins';
  font-size: 16px;
  color: #424242;
  margin-left: 10px;
`
const FaqContentModal = styled.View`
  width: 80%;
  justify-content: center;
  align-items: center;
`
const ItemFaqModal = styled.Text`
  font-family: 'Poppins400';
  font-size: 12px;
  color: #757575;
  margin-top: 10px;
`
const SeeAllFaqModal = styled.Text`
  color: #212121;
  font-family: 'Poppins';
  text-decoration: underline;
  margin-top: 10px;
`

type Props = {
  title: string
  back?: boolean
  icon: string
  routeName?: string
}

export const Header: FC<Props> = ({ title, back, icon, routeName }) => {
  const { t, i18n } = useTranslation()
  const navigation: NativeStackNavigationProp<any, any> = useNavigation()
  const [modalLevelVisible, setModalLevelVisible] = useState(false)
  const [modalFamilyVisible, setModalFamilyVisible] = useState(false)
  let backProp: boolean

  if (back === undefined || back === true) {
    backProp = true
  } else {
    backProp = false
  }

  const handleOpenLevelModal = () => {
    if (routeName !== 'Level') return
    setModalLevelVisible(true)
  }
  const handleOpenFamilyModal = () => {
    if (routeName !== 'Family') return
    setModalFamilyVisible(true)
  }

  return (
    <>
      {/* Modal in Level Screen starts here */}
      <Modal
        animationType="fade"
        transparent={true}
        statusBarTranslucent
        visible={modalLevelVisible}
        onRequestClose={() => {
          setModalLevelVisible(!modalLevelVisible)
        }}
      >
        <CenteredView
          onPress={() => setModalLevelVisible(false)}
          style={{
            justifyContent: 'flex-end',
            marginBottom: -Dimensions.get('window').height / 3,
          }}
        >
          <ModalEditPhotoViewEditProfile
            style={[
              modalStyle.modalViewShadow,
              { width: '100%' },
              { height: '90%' },
            ]}
          >
            <ModalEditPhotoContentEditProfile>
              <ViewMarginBottomSmall>
                <ModalTitleEditPhotoEditProfile style={{ marginTop: 10 }}>
                  {t('level-modal-title')}
                </ModalTitleEditPhotoEditProfile>
              </ViewMarginBottomSmall>
              <FaqContentModal>
                <Row style={{ width: '100%', alignItems: 'center' }}>
                  <Ticket />
                  <TitleFaqModal>{t('level-modal-first-label')}</TitleFaqModal>
                </Row>
                <View style={{ width: '100%' }}>
                  <ItemFaqModal>
                    * Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </ItemFaqModal>
                  <ItemFaqModal>
                    * Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </ItemFaqModal>
                  <ItemFaqModal>
                    * Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </ItemFaqModal>
                  <ItemFaqModal>
                    * Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </ItemFaqModal>
                </View>

                <SeeAllFaqModal>{t('level-modal-see-all')}</SeeAllFaqModal>
              </FaqContentModal>

              <FaqContentModal style={{ marginTop: 20 }}>
                <Row style={{ width: '100%', alignItems: 'center' }}>
                  <LevelUp />
                  <TitleFaqModal>{t('level-modal-second-label')}</TitleFaqModal>
                </Row>
                <View style={{ width: '100%' }}>
                  <ItemFaqModal>
                    * Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </ItemFaqModal>
                  <ItemFaqModal>
                    * Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </ItemFaqModal>
                  <ItemFaqModal>
                    * Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </ItemFaqModal>
                  <ItemFaqModal>
                    * Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </ItemFaqModal>
                </View>
              </FaqContentModal>

              <ModalCancelAreaEditProfile></ModalCancelAreaEditProfile>
            </ModalEditPhotoContentEditProfile>
          </ModalEditPhotoViewEditProfile>
        </CenteredView>
      </Modal>
      {/* Modal in Level Screen ends here */}

      {/* Modal in Family Screen starts here */}
      <Modal
        animationType="fade"
        transparent={true}
        statusBarTranslucent
        visible={modalFamilyVisible}
        onRequestClose={() => {
          setModalFamilyVisible(!modalFamilyVisible)
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
              { width: '100%', height: '58%', justifyContent: 'center' },
            ]}
          >
            <ModalEditPhotoContentEditProfile>
              <ViewMarginBottomSmall style={{ marginTop: '6%' }}>
                <ModalTitleEditPhotoEditProfile>
                  {t('family-force-modal-title')}
                </ModalTitleEditPhotoEditProfile>
              </ViewMarginBottomSmall>

              <ModalOptionAreaEditProfile
                onPress={() => {
                  setModalFamilyVisible(false)
                  navigation.navigate('Edit-Family')
                }}
              >
                <ModaOptionTextEditProfile>
                  {t('family-force-modal-edit-family')}
                </ModaOptionTextEditProfile>
              </ModalOptionAreaEditProfile>
              <ModalOptionAreaEditProfile
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#EEEEEE',
                }}
              >
                <ModaOptionTextEditProfile>
                  {t('family-force-modal-delete-family')}
                </ModaOptionTextEditProfile>
              </ModalOptionAreaEditProfile>
              <ModalOptionAreaEditProfile
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#EEEEEE',
                }}
              >
                <ModaOptionTextEditProfile>
                  {t('family-force-modal-transfer-family')}
                </ModaOptionTextEditProfile>
              </ModalOptionAreaEditProfile>
              <ModalOptionAreaEditProfile
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#EEEEEE',
                }}
              >
                <ModaOptionTextEditProfile>
                  {t('family-force-modal-invite-friends')}
                </ModaOptionTextEditProfile>
              </ModalOptionAreaEditProfile>
              <ModalOptionAreaEditProfile
                onPress={() => {
                  setModalFamilyVisible(false)
                  navigation.navigate('About-Family')
                }}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#EEEEEE',
                }}
              >
                <ModaOptionTextEditProfile>
                  {t('family-force-modal-about-family')}
                </ModaOptionTextEditProfile>
              </ModalOptionAreaEditProfile>
              <ModalOptionAreaEditProfile
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#EEEEEE',
                }}
              >
                <ModaOptionTextEditProfile>
                  {t('family-force-modal-leave-family')}
                </ModaOptionTextEditProfile>
              </ModalOptionAreaEditProfile>
              <ModalCancelAreaEditProfile style={{ justifyContent: 'center' }}>
                <Pressable
                  onPress={() => setModalFamilyVisible(!modalFamilyVisible)}
                >
                  <ModalCancelTextEditProfile>
                    {t('edit-profile-photo-modal-cancel')}
                  </ModalCancelTextEditProfile>
                </Pressable>
              </ModalCancelAreaEditProfile>
            </ModalEditPhotoContentEditProfile>
          </ModalEditPhotoViewEditProfile>
        </CenteredView>
      </Modal>
      {/* Modal in Family Screen ends here */}

      <BackgroundHeader>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.background}
          colors={['#4568DC', '#3B4781']}
        >
          <View style={styles.centralizer}>
            {backProp ? (
              <Pressable onPress={() => navigation.goBack()}>
                <ArrowLeft />
              </Pressable>
            ) : (
              <View style={{ height: 24, width: 24 }}></View>
            )}

            <TextHeader style={{ marginBottom: -5 }}>
              {t(`${title}`)}
            </TextHeader>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              {icon === 'Chat' && <Chat />}

              {icon === 'Media' && <Media />}

              {icon === 'Faq' && (
                <TouchableOpacity onPress={handleOpenLevelModal}>
                  <QuestionMark />
                </TouchableOpacity>
              )}

              {icon === 'Three-Dots' && (
                <TouchableOpacity onPress={handleOpenFamilyModal}>
                  <ThreeDots />
                </TouchableOpacity>
              )}
            </View>
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
