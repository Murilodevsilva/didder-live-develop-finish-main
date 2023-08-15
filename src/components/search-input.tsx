import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  useWindowDimensions,
} from 'react-native';
import { IconLiveSearchShop } from 'src/assets/svg/icon-live-seach-shop';
import { QrCode } from 'src/assets/svg/qr-code';

interface SearchInputProps {
  placeholder: string
  onSubmitEditing: () => void
  iconRight: boolean
  setIsSearchOpen: () => void
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  onSubmitEditing,
  iconRight,
  setIsSearchOpen,
}) => {
  const { width } = useWindowDimensions()
  const containerWidth = width // caso precise (espacamento) ficará: width -1;  16 (left padding) + 16 (right padding)

  return (
    <>
      <View style={[styles.container, { width: containerWidth }]}>
        <View style={styles.searchContainer}>
          <IconLiveSearchShop />
          <TextInput
            placeholder={placeholder}
            style={styles.input}
            onSubmitEditing={onSubmitEditing}
          />
          {iconRight === true ? <QrCode /> : null}
        </View>
        <TouchableOpacity style={styles.cancelButton} onPress={setIsSearchOpen}>
          <Text style={styles.cancelText}>Cancelar</Text>
        </TouchableOpacity>
      </View>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    position: 'absolute',
  },
  content: {
    flex: 1,
    position: 'absolute',
    top: 63,
    width: '100%',
    display: 'flex',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 8,
    height: 40,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 8,
    fontFamily: 'Poppins',
    alignSelf: 'center',
    top: 2,
  },

  cancelButton: {
    marginLeft: 8,
  },
  cancelText: {
    color: 'white',
    fontWeight: '400',
    fontFamily: 'Poppins',
    fontSize: 12,
  },
})

export default SearchInput
