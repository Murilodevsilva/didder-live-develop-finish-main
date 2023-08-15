import React, { useState, useEffect } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Animated,
} from "react-native"
import SwitchScreen from "../../components/switch-modal"

const ModalWithAnimation = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const translateY = useState(new Animated.Value(300))[0]

  useEffect(() => {
    if (modalVisible) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start()
    } else {
      Animated.timing(translateY, {
        toValue: 300,
        duration: 300,
        useNativeDriver: true,
      }).start()
    }
  }, [modalVisible])

  const handleModalOpen = () => {
    setModalVisible(true)
  }

  const handleModalClose = () => {
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleModalOpen}>
        <Text style={styles.openButton}>Open Modal</Text>
      </TouchableOpacity>

      <Modal
        transparent
        visible={modalVisible}
        onRequestClose={handleModalClose}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={handleModalClose}
        >
          <Animated.View
            style={[styles.modalContent, { transform: [{ translateY }] }]}
          >
            <View style={{ marginBottom: 24, marginTop: 24, marginLeft: 16 }}>
              <Text style={{ fontSize: 14, fontWeight: "400", color: "#fff" }}>
                Configurações da live
              </Text>
            </View>
            <View style={{ marginBottom: 24, marginLeft: 16 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  marginBottom: 8,
                  color: "#fff",
                }}
              >
                Anúncio de presente na sala de live
              </Text>
              <Text style={{ color: "#fff" }}>Lorem ipsum dolor sit amet.</Text>
              <View style={{ position: "absolute", right: 16 }}>
                <SwitchScreen />
              </View>
            </View>
            <View style={{ marginBottom: 24, marginLeft: 16 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  marginBottom: 8,
                  color: "#fff",
                }}
              >
                Anúncio de presente na sala de live
              </Text>
              <Text style={{ color: "#fff" }}>Lorem ipsum dolor sit amet.</Text>
              <View style={{ position: "absolute", right: 16 }}>
                <SwitchScreen />
              </View>
            </View>
            <View style={{ marginBottom: 24, marginLeft: 16 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  marginBottom: 8,
                  color: "#fff",
                }}
              >
                Anúncio de presente na sala de live
              </Text>
              <Text style={{ color: "#fff" }}>Lorem ipsum dolor sit amet.</Text>
              <View style={{ position: "absolute", right: 16 }}>
                <SwitchScreen />
              </View>
            </View>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  openButton: {
    fontSize: 18,
    color: "blue",
    textDecorationLine: "underline",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end", // Alinha o modal à parte inferior da tela
  },
  modalContent: {
    backgroundColor: "rgba(3, 3, 3, 0.95)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 274,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    color: "blue",
    textDecorationLine: "underline",
    marginTop: 10,
  },
})

export default ModalWithAnimation
