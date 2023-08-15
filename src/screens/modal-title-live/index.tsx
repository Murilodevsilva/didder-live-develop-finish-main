import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import TitleIcon from './icon-title-live'

const TitleModal = ({ visible, onClose }) => {
  const [currentTitle, setCurrentTitle] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  const handleTogglePrivacy = () => {
    setIsPrivate(!isPrivate);
  };

  const handleConfirm = () => {
    // Do something with the currentTitle, newTitle, and isPrivate values
    // ...
    onClose();
  };

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Título atual</Text>
          <View style={styles.input}>
            <TitleIcon style={{marginRight:8}}/>
          <TextInput
            
            placeholder="Live da produção"
            value={currentTitle}
            onChangeText={setCurrentTitle}
          />
          </View>
         
          <Text style={styles.title}>Novo título</Text>
          <View style={styles.input}>
          <TitleIcon style={{marginRight:8}}/>
          <TextInput
            
            placeholder="Título limitado a 40 caracteres."
            value={newTitle}
            onChangeText={setNewTitle}
          />
          </View>
          <TouchableOpacity style={styles.privacyButton} onPress={handleTogglePrivacy}>
          <Text style={styles.privacyButtonText}>
              {isPrivate ? 'Privado' : 'Público'}
            </Text>
            <Ionicons
              name={isPrivate ? 'lock-closed-outline' : 'lock-open-outline'}
              size={24}
              
            />
           
          </TouchableOpacity>
         <TouchableOpacity>
          <LinearGradient colors={['#B06AB3','#4568DC']} start={{x:1,y:1}} end={{x:0,y:0}} style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>Confirmar</Text>
          </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    width:321,
    height:298
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
    color:'#9e9e9e'
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    flexDirection:'row',
    alignItems:'center'
  },
  privacyButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems:'center',
    marginBottom: 20,
  },
  privacyButtonText: {
    marginRight: 5,
  },
  confirmButton: {
    width:289,
    height:44,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center'
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginVertical:4
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default TitleModal;
