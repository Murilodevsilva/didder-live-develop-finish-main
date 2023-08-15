import React, { FC, useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'

import {
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { IconAdorra } from '../../../../src/assets/svg/flags/flag-andorra';
import { IconAngola } from '../../../../src/assets/svg/flags/flag-angola';
import { IconCanada } from '../../../../src/assets/svg/flags/flag-canada';
import { IconChina } from '../../../../src/assets/svg/flags/flag-china';
import { IconCuba } from '../../../../src/assets/svg/flags/flag-cuba';
import { IconIsland } from 'src/assets/svg/flags/flag-island'
import { IconLiveLanguageBrazil } from 'src/assets/svg/icon-live-language-brazil'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { IconModalCheck } from 'src/assets/svg/icon-modal-check'
import { ButtonAreaSend } from 'src/styles'
import { LinearGradient } from 'expo-linear-gradient'
import { IconUsa } from 'src/assets/svg/flags/flag-usa'
import { IconJapan } from 'src/assets/svg/flags/flag-japan'
import { IconJamaica } from 'src/assets/svg/flags/flag-jamaica'
import { IconBelguim } from 'src/assets/svg/flags/flag-belguim'
import { IconIsreal } from 'src/assets/svg/flags/flag-israel'
import { IconArgentina } from 'src/assets/svg/flags/flag-argentina'
import { IconMexico } from 'src/assets/svg/flags/flag-mexico'
import { IconBarbados } from 'src/assets/svg/flags/flag-barbados'
import { IconItaly } from 'src/assets/svg/flags/flag-italy-'
import { IconNigeria } from 'src/assets/svg/flags/flag-nigeria'
import { IconParaguay } from 'src/assets/svg/flags/flag-paraguay'
import { IconMongolia } from 'src/assets/svg/flags/flag-mongolia'

type Props = {
  modalVisible: boolean
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}
export const ModalLanguage: FC<Props> = ({ modalVisible, setModalVisible }) => {
  const { t, i18n } = useTranslation()
  const [selectedItems, setSelectedItems] = useState([])
  const [selectedNewItems, setSelectedNewItems] = useState([])

  useEffect(() => {
    if (selectedNewItems.length > 0) {
      setModalVisible(false)
      const newArray = selectedNewItems.map(({ id, name }) => ({ id, name }))
      const json = JSON.stringify(newArray)
      AsyncStorage.setItem('langagueOptions', json)
    }
  }, [selectedNewItems])

  const saveSelectedItems = async () => {
    if (selectedItems.length === 0) {
      toggleItemSelection({ id: 2, name: 'brazil' }) 
    }
    setSelectedNewItems(selectedItems)

  }

  const toggleItemSelection = (item) => {
    // Verificar se o item já está selecionado
    const index = selectedItems.findIndex((i) => i.id === item.id)
    if (index >= 0) {
      // O item já está selecionado, removê-lo da lista
      const updatedItems = [...selectedItems]
      updatedItems.splice(index, 1)
      setSelectedItems(updatedItems)
    } else {
      // Item não está selecionado, adicione-o à lista
      setSelectedItems([...selectedItems, item])
    }
  }

  const countries = [
    {
      id: 1,
      name: 'china',
      icon: <IconChina />,
    },
    {
      id: 2,
      name: 'brazil',
      icon: <IconLiveLanguageBrazil />,
    },
    {
      id: 3,
      name: 'canada',
      icon: <IconCanada />,
    },
    {
      id: 4,
      name: 'angola',
      icon: <IconAngola />,
    },
    {
      id: 5,
      name: 'insland',
      icon: <IconIsland />,
    },
    {
      id: 6,
      name: 'cuba',
      icon: <IconCuba />,
    },
    {
      id: 7,
      name: 'adorra',
      icon: <IconAdorra />,
    },
    {
      id: 8,
      name: 'usa',
      icon: <IconUsa />,
    },
    {
      id: 10,
      name: 'japan',
      icon: <IconJapan />,
    },
    {
      id: 11,
      name: 'jamaica',
      icon: <IconJamaica />,
    },
    {
      id: 12,
      name: 'belgium',
      icon: <IconBelguim />,
    },
    {
      id: 13,
      name: 'israel',
      icon: <IconIsreal />,
    },
    {
      id: 14,
      name: 'argentina',
      icon: <IconArgentina />,
    },
    {
      id: 15,
      name: 'mexico',
      icon: <IconMexico />,
    },
    {
      id: 16,
      name: 'barbados',
      icon: <IconBarbados />,
    },
    {
      id: 17,
      name: 'italy',
      icon: <IconItaly />,
    },
    {
      id: 18,
      name: 'nigeria',
      icon: <IconNigeria />,
    },
    {
      id: 19,
      name: 'paraguay',
      icon: <IconParaguay />,
    },
    {
      id: 20,
      name: 'mongolia',
      icon: <IconMongolia />,
    },
  ]

  const renderItem = ({ item }) => {
    // verificar se foi selecionado
    const isSelected = selectedItems.some((i) => i.id === item.id)

    return (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          isSelected ? styles.selectedItemContainer : null,
        ]}
        onPress={() => toggleItemSelection(item)}
      >
        {isSelected && (
          <View style={{ top: 12, left: 2, alignSelf: 'flex-end' }}>
            <IconModalCheck />
          </View>
        )}
        <View
          style={{
            backgroundColor: isSelected ? 'rgba(0, 194, 71, 0.15)' : 'white',
            width: 64,
            height: 64,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            borderRadius: 4,
          }}
        >
          {item.icon}
          <Text style={styles.itemName}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View
              style={{
                width: 134,
                height: 5,
                borderRadius: 100,
                backgroundColor: '#EEEEEE',
                alignSelf: 'center',
                marginBottom: 24,
              }}
            />
            <Text style={styles.title}>Filtrar por país</Text>
            <FlatList
              data={countries.sort((a, b) => a.name.localeCompare(b.name))}
              numColumns={Math.floor(
                (Dimensions.get('window').width - 40) / 80
              )}
              contentContainerStyle={styles.flatListContainer}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
              ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
            />
            <ButtonAreaSend
              style={{ marginTop: 0, marginBottom: 0 }}
              onPress={saveSelectedItems}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.buttonArea}
                colors={['#4568DC', '#3B4781']}
              >
                <Text style={styles.buttonLabel}>Salvar</Text>
              </LinearGradient>
            </ButtonAreaSend>
          </View>
        </View>
      </Modal>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: '700',
    color:'#181A20'
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  selectedItemContainer: {
    backgroundColor: ' #00C24726',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '100%',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 500,
  },
  modalText: {
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: '700',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  closeButton: {
    backgroundColor: 'rgba(0, 194, 71, 0.15)',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  itemContainer: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  itemName: {
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
  },
  flatListContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  buttonArea: {
    display: 'flex',
    width: '90%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 60,
  },
  buttonLabel: {
    color: '#fff',
    fontFamily: 'Poppins',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
  },
  gradient: {
    position: 'relative',
    top: 0,
    left: 0,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
})
