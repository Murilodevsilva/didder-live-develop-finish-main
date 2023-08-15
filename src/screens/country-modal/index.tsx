import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet ,FlatList } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Flag} from 'react-native-svg-flagkit'

const countriesData = [
    { id: 1, name: 'Afghanistan', code: 'AF' },
    { id: 2, name: 'Albania', code: 'AL' },
  ];


const gendersData = ['Male', 'Female', 'Both'];

const ModalWithCountryAndGenderSelection = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countriesData[0]);
  const [selectedGender, setSelectedGender] = useState(gendersData[0]);

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const renderCountryItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.countryItem,
        selectedCountry.id === item.id && styles.countryItemSelected,
      ]}
      onPress={() => setSelectedCountry(item)}
    >
      <Flag id={item.code} size={32} />
      <Text style={[styles.countryName, selectedCountry.id === item.id && styles.selectedCountryName]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleModalOpen}>
        <Text style={styles.openButton}>Open Modal</Text>
      </TouchableOpacity>

      <Modal transparent visible={modalVisible} onRequestClose={handleModalClose}>
        <TouchableOpacity style={styles.modalBackground} onPress={handleModalClose}>
          <View style={styles.modalContent}>
          <TouchableOpacity
              style={styles.pickerButton}
              onPress={() => setModalVisible(true)}
            >
              <Flag id={selectedCountry.code} size={32} />
              <Text style={[styles.countryName, styles.selectedCountryName]}>
                {selectedCountry.name}
              </Text>
            </TouchableOpacity>
            <FlatList
              data={countriesData}
              renderItem={renderCountryItem}
              keyExtractor={(item) => item.id.toString()}
            />

            <Text style={styles.modalTitle}>Select Gender</Text>
            <View style={{ width: 327, height: 196, position: 'absolute', bottom: 0, right: -280 }}>
              {gendersData.map((gender) => (
                <TouchableOpacity
                  key={gender}
                  style={[
                    styles.radioButton,
                    selectedGender === gender && styles.radioButtonSelected,
                  ]}
                  onPress={() => setSelectedGender(gender)}
                >
                  {selectedGender === gender && (
                    <View style={styles.radioButtonSelectedGradient} />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openButton: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    height: 467,
    backgroundColor: 'rgba(3, 3, 3, 0.95)',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFF',
  },
  picker: {
    marginBottom: 20,
  },
  pickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  pickerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  countryItemSelected: {
    borderColor: 'transparent',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 12,
    width: 15,
    height: 15,
    justifyContent: 'center',
  },
  radioButtonSelected: {
    borderColor: 'transparent',
    backgroundColor: '#FFF',
  },
  radioButtonSelectedGradient: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: '#B06AB3',
  },
  radioLabel: {
    fontSize: 16,
    marginRight: 8,
  },
  countryName: {
    marginLeft: 10,
    color: '#FFF', 
  },
  selectedCountryName: {
    color: 'white',
  },

});

export default ModalWithCountryAndGenderSelection;
