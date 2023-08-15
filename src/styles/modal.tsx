import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const CenteredView = styled.Pressable`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`
export const ModalView = styled.View`
  margin: 20px;
  background-color: white;
  height: 25%;
  border-radius: 10px;
  align-items: center;
`
export const CloseModalContent = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  margin-top: 5px;
  justify-content: space-between;
  padding: 10px;
`
export const ModalEditPhotoView = styled.View`
  background-color: white;
  height: 100%;
  border-radius: 10px;
  align-items: center;
`
export const ModalContent = styled.View`
  height: 100%;
  width: 100%;
  padding: 35px;
  align-items: center;
`
export const ModalAlternativeContent = styled.View`
  height: 60%;
  width: 100%;
  padding: 35px;
  align-items: center;
`
export const ModalContentItems = styled.View`
  height: 100%;
  justify-content: center;
  margin-top: 20px;
`
export const ModalTitle = styled.Text`
  text-align: center;
  font-family: 'Poppins';
`
export const ModalItem = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: #eeeeee;
  margin-bottom: 20px;
`
export const ModalItemText = styled.Text`
  margin-left: 20px;
  font-family: 'PoppinsLight';
`

export const modalStyle = StyleSheet.create({
  modalViewShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})
