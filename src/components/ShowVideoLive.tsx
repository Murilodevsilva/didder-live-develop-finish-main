import React, { useRef, useState } from "react"
import { Image, View, StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import shortid from "shortid"
import FullScreenVideo from "src/components/FullScreenVideo/FullScreenVideo"
import LiveHeader from "src/components/LiveHeader/LiveHeader"
import LiveFooter from "src/components/Livefooter"
import LiveChatInput from "src/components/LiveChatInput/LiveChatInput"
import ChatWindow from "src/components/ChatWindow/ChatWindow"
import AnimatedComponent from "src/components/AnimatedComponent/AnimatedComponent"
import GiftsActionSheet from "./GiftsActionSheet"
import ActionSheetWrapper from "src/components/ActionSheetWrapper/ActionSheetWrapper"
import UserOptions from "./UserOptions"
import Chat from "./Chat"

import { useTranslation } from "react-i18next"
import "../locales/i18n"

import i18n from "src/locales/i18n"

const ShowVideoLive = () => {
  const giftsActionSheetRef = useRef(null)
  const userOptionsActionSheetRef = useRef(null)
  const chatInputRef = useRef(null)

  const [elements, setElements] = useState([])
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")

  const { t, i18n } = useTranslation()

  const handleSendMessage = (newMessage) => {
    if (newMessage.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: t("text-ballon-sender-1"), // Ou defina o remetente desejado
          content: newMessage.trim(),
        },
      ])
    }
  }

  const handleAction = () => {
    setElements((prevElements) => [
      ...prevElements,
      <Image
        key={shortid.generate()}
        source={require("../../assets/images/green_red_circle/1.png")}
      />,
    ])
  }

  const handleComplete = (index) => {
    setElements((prevElements) => prevElements.filter((_, i) => i !== index))
  }

  const handleChatButtonClick = () => {
    chatInputRef.current.toggleVisibility()
  }

  const handleOpenGiftsActionSheet = () => {
    giftsActionSheetRef.current.show()
  }

  const handleOpenUserOptionsActionSheet = () => {
    userOptionsActionSheetRef.current.show()
  }

  return (
    <FullScreenVideo>
      <View style={styles.contentContainer}>
        <LiveHeader />
        <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
          <LiveFooter
            handleOpenGiftsActionSheet={handleOpenGiftsActionSheet}
            handleShowEvent={handleAction}
            onOpenChat={handleChatButtonClick}
            handleOpenUserOptionsActionSheet={handleOpenUserOptionsActionSheet}
          />
        </View>
        <LiveChatInput
          ref={chatInputRef}
          onSendMessage={handleSendMessage}
          value={message}
          onChangeText={setMessage}
        />
        <View style={{ bottom: 0, position: "absolute", width: "95%" }}>
          <Chat messages={messages} />
        </View>

        {elements.map((element, index) => (
          <AnimatedComponent
            key={index}
            content={element}
            onComplete={() => handleComplete(index)}
          />
        ))}
        <ActionSheetWrapper ref={giftsActionSheetRef}>
          <GiftsActionSheet />
        </ActionSheetWrapper>

        <ActionSheetWrapper ref={userOptionsActionSheetRef}>
          <UserOptions />
        </ActionSheetWrapper>
      </View>
    </FullScreenVideo>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  chatContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
})

export default ShowVideoLive
