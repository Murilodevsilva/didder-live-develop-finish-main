import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SimpleLineIcons, Feather } from '@expo/vector-icons';
import Immersive from 'react-native-immersive';

const UserProfileModal = () => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>setModalVisible(true)} style={styles.profileButton}>
        <LinearGradient colors={['#4568DC', '#B06AB3']} style={styles.profileButtonBackground}>
          <Text style={styles.profileButtonText}>Perfil</Text>
        </LinearGradient>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent={true} onRequestClose={()=>setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={()=>setModalVisible(false)} style={styles.closeButton}>
              <Feather name="x" size={20} color="white" />
            </TouchableOpacity>

            <LinearGradient colors={['#4568DC', '#B06AB3']} style={styles.background}>
              <Image
                style={styles.profileImage}
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
                }}
              />
            </LinearGradient>

            <View style={styles.profileContainer}>
              <Text style={styles.username}>Nome do usuário</Text>
              <Text style={styles.description}>
                Faço lives de segunda a segunda e meu foco principal é fazer você sorrir.
              </Text>
              <TouchableOpacity style={styles.followButton}>
                <Text style={styles.followButtonText}>Seguir</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.footer}>
              <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerButtonText}>@</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerButton}>
                <SimpleLineIcons name="present" size={18} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerButton}>
                <Feather name="mail" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
  profileButton: {
    width: 100,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  profileButtonBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    backgroundColor: '#030303',
    borderTopLeftRadius: 16,
    borderTopRightRadius:16,
    padding: 20,
    height:340,
    bottom:0,
    position:'absolute',
    zIndex:100
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 999,
  },
  background: {
    width: 77,
    height: 77,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    top:-40
  },
  profileImage: {
    width: 72,
    height: 72,
    borderRadius: 40,
  },
  profileContainer: {
    marginBottom: 30,
    marginLeft: 30,
  },
  username: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  followButton: {
    backgroundColor: '#673AB3',
    width: 70,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  followButtonText: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#FFF',
    paddingTop: 24,
    marginTop:60
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonText: {
    fontSize: 20,
    color: 'white',
  },
});

export default UserProfileModal;
