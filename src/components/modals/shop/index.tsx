import { StyleSheet } from 'react-native'

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
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '15%',
  },
  rowBorder: {
    borderBottomWidth: 1,
    borderColor: '#f6f6f6',
    width: '100%',
    justifyContent: 'center',
    paddingBottom: '5%',
  },
})
