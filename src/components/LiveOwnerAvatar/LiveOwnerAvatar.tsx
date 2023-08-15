// LiveOwnerAvatar.tsx
import React, { useState } from "react"
import styled from "styled-components/native"
import {
  Image,
  TouchableOpacity,
  Text,
  View,
  Modal,
  StyleSheet,
} from "react-native"
import UserAddButtonIcon from "src/assets/svg/UserAddButtonIcon"
import GradientButton, {
  GradientButtonProps,
} from "../GradientButton/GradientButton"
import PersonSolidIcon from "src/assets/svg/PersonSolidIcon"
import BlueBadgeIcon from "src/assets/svg/BlueBadgeIcon"
import { LinearGradient } from "expo-linear-gradient"
import { useNavigation } from "@react-navigation/native"
import { NAVIGATORS } from "src/router/navigators"
import { ModalProfile } from "../../screens/modalFollow/modaltest"
import {
  SimpleLineIcons,
  FontAwesome5,
  AntDesign,
  Octicons,
  Foundation,
  Ionicons,
} from "@expo/vector-icons"
import { HeartFlames } from "src/assets/svg/family/heart-flames"
import { BiGenderMale } from "src/assets/svg"
import { IcoMedal } from "src/assets/svg/icon-live-medal"
import {
  ModalContent,
  ModalContainer,
  FollowButtonText,
  Footer,
  Username,
  Background,
  ProfileImage,
  FollowButton,
  ProfileContainer,
  Description,
} from "../../screens/modalFollow/style"

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  followButton: {
    backgroundColor: "#673AB3",
    width: 70,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  warningButton: {
    backgroundColor: "#212121",
    width: 28,
    height: 28,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    position: "absolute",
    right: 0,
  },
})

interface LiveOwnerAvatarProps {
  avatarURL: string
  username: string
  followersCount: number
  verified: boolean
  onAddUser: () => void
}

const LiveOwnerAvatar: React.FC<LiveOwnerAvatarProps> = ({
  avatarURL,
  username,
  followersCount,
  verified,
  onAddUser,
}) => {
  const navigation = useNavigation()

  const [isComponentVisible, setIsComponentVisible] = useState(false)
  const [modalProfileVisible, setModalProfileVisible] = useState(false)
  const toggleComponentVisibility = () => {
    setIsComponentVisible(!isComponentVisible)
  }
  const closeModal = () => {
    setModalProfileVisible(false)
  }
  const ModalProfile = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        setModalProfileVisible(!modalProfileVisible)
      }}
    >
      <ModalContainer>
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={() => setModalProfileVisible(false)}
        >
          <ModalContent>
            <Background colors={["#4568DC", "#B06AB3"]}>
              <ProfileImage
                source={{
                  uri: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
                }}
              />
            </Background>
            <View
              style={{
                position: "absolute",
                right: 50,
                paddingHorizontal: 40,
                top: 24,
              }}
            >
              <FollowButton onPress={() => setModalProfileVisible(false)}>
                <FollowButtonText>Seguir</FollowButtonText>
              </FollowButton>
              <TouchableOpacity style={styles.warningButton}>
                <AntDesign name="warning" size={12} color="white" />
              </TouchableOpacity>
            </View>
            <ProfileContainer>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    marginTop: 8,
                  }}
                >
                  <IcoMedal />
                </Text>
                <View
                  style={{
                    width: 12,
                    height: 12,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <HeartFlames />
                </View>
                <Text
                  style={{
                    color: "#3C4E97",
                    fontSize: 8,
                    fontWeight: "700",
                  }}
                >
                  (MNRV)
                </Text>
                <Username>sugeknight</Username>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 12,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#3C4E97",
                    width: 44,
                    height: 22,
                    alignItems: "center",
                    justifyContent: "center",
                    margin: 8,
                    borderRadius: 16,
                    flexDirection: "row",
                  }}
                >
                  <BiGenderMale />
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      borderRadius: 16,
                      fontSize: 10,
                      marginLeft: 5,
                    }}
                  >
                    22
                  </Text>
                </View>
                <Text
                  style={{
                    backgroundColor: "#566FD7",
                    color: "white",
                    width: 37,
                    height: 22,
                    textAlign: "center",
                    margin: 8,
                    borderRadius: 16,
                    fontSize: 10,
                    padding: 4,
                  }}
                >
                  Lv.2
                </Text>
                <Text
                  style={{
                    backgroundColor: "#673AB3",
                    color: "white",
                    width: 46,
                    height: 22,
                    textAlign: "center",
                    margin: 8,
                    borderRadius: 16,
                    fontSize: 10,
                    padding: 4,
                  }}
                >
                  Nv.94
                </Text>
              </View>
              <Description>
                Faço lives de segunda a segunda e meu foco principal é fazer
                você sorrir.
              </Description>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 24,
                  paddingRight: 20,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "700",
                    fontSize: 14,
                    textAlign: "center",
                    width: 50,
                    height: 25,
                  }}
                >
                  10K
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "700",
                    fontSize: 14,
                    textAlign: "center",
                    width: 50,
                    height: 25,
                  }}
                >
                  9999
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "700",
                    fontSize: 14,
                    textAlign: "center",
                    width: 50,
                    height: 25,
                  }}
                >
                  10K
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingRight: 20,
                }}
              >
                <Text
                  style={{
                    color: "#9E9E9E",
                    fontSize: 12,
                    fontWeight: "400",
                    textAlign: "center",
                    width: 50,
                    height: 15,
                  }}
                >
                  Seguidores
                </Text>
                <Text
                  style={{
                    color: "#9E9E9E",
                    fontSize: 12,
                    fontWeight: "400",
                    textAlign: "center",
                    width: 50,
                    height: 15,
                  }}
                >
                  Super Fãs
                </Text>
                <Text
                  style={{
                    color: "#9E9E9E",
                    fontSize: 12,
                    fontWeight: "400",
                    textAlign: "center",
                    width: 50,
                    height: 15,
                  }}
                >
                  Segue
                </Text>
              </View>
            </ProfileContainer>
            <Footer>
              <Ionicons name="at-sharp" size={26} color="white" />
              <SimpleLineIcons name="present" size={20} color="white" />
              <Octicons name="mail" size={22} color="white" />
            </Footer>
          </ModalContent>
        </TouchableOpacity>
      </ModalContainer>
    </Modal>
  )
  const toggleProfileVisibility = () => {
    setModalProfileVisible(true)
  }
  return (
    <Wrapper>
      <TouchableOpacity
        onPress={() => {
          // @ts-ignore
          navigation.navigate(NAVIGATORS.TOOLS)
        }}
      >
        <Avatar
          source={{
            uri: avatarURL,
          }}
        />
      </TouchableOpacity>
      <Info>
        <TopRow>
          {verified && (
            <BlueBadgeIcon
              style={{
                position: "absolute",
                top: -1,
                left: -5,
              }}
            />
          )}
          <Username2>{username}</Username2>
        </TopRow>

        <BottomRow>
          <PersonSolidIcon />

          <FollowersCount>{followersCount}</FollowersCount>
        </BottomRow>
      </Info>
      <TouchableOpacity
        style={{
          left: -35,
          top: -14,
        }}
        onPress={toggleProfileVisibility}
      >
        <LinearGradient
          style={{
            width: 44,
            height: 27,
            borderRadius: 22,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            right: 2,
          }}
          colors={["#4568DC80", "#B06AB380"]}
          start={{
            x: 0,
            y: 0,
          }}
          end={{
            x: 1,
            y: 0,
          }}
        >
          <Image source={require("src/assets/images/user-add.png")} />
        </LinearGradient>
      </TouchableOpacity>
      {modalProfileVisible && <ModalProfile />}
    </Wrapper>
  )
}

const Wrapper = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  flex-direction: row;
  align-items: center;
  border-radius: 30px;
  margin-top: 58px;
  width: 134px;
  height: 32px;
`

const Avatar = styled.Image`
  width: 28px;
  height: 28px;
  border-radius: 28px;
  margin-right: 2px;
  margin-left: 5px;
`

const Info = styled.View`
  padding: 3px;
  width: 134px;
  height: 32px;
`

const TopRow = styled.View`
  flex-direction: row;
  align-items: center;
`

const Username2 = styled.Text`
  color: white;
  font-weight: bold;
  margin-left: 15px;
  font-size: 8px;
`

const BottomRow = styled.View`
  flex-direction: row;
  align-items: center;
  bottom: -5px;
  left: 4px;
`

const FollowersCount = styled.Text`
  color: white;
  margin-left: 4px;
  font-size: 7px;
`

const AddUserButton: React.FC<GradientButtonProps> = styled(GradientButton)`
  align-items: center;
  margin-right: 4px;
  margin-top: 4px;
  margin-bottom: 4px;
  border: 1px solid #b06ab3;
  border-radius: 100%;
`

export default LiveOwnerAvatar
