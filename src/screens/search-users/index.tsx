import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, FlatList, StyleSheet, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HeartFlames } from 'src/assets/svg/family/heart-flames';
import { IcoMedal } from 'src/assets/svg/icon-live-medal';
import { LinearGradient } from 'expo-linear-gradient';
import ScanIcon from './scan-icon-gradient';
import { SearchIcon } from 'src/assets/svg/search';
import styled from 'styled-components/native';
import { ArrowLeft } from 'src/assets/svg';

const InviteModal = ({ visible, onAccept, onDecline }) => {
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [selectedInvite, setSelectedInvite] = useState(null);
  const [activeTab, setActiveTab] = useState('solicitando');
  const [searchQuery, setSearchQuery] = useState('');

  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Mike Johnson'},
  ]);

  const handleAccept = (item) => {
    onAccept(item);
    setSelectedInvite(item);
    setNotificationVisible(true);
    setTimeout(() => {
      setSelectedInvite(null);
      setNotificationVisible(false);
    }, 2000);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const Username = styled.Text`
    font-size: 12px;
    color: #FFF;
    font-weight: bold;
    margin-left: 10px;
  `;

  const ProfileImage = styled.Image`
    width: 42px;
    height: 42px;
    border-radius: 40px;
  `;

  const Background = styled(LinearGradient)`
    width: 47px;
    height: 47px;
    border-radius: 40px;
    align-items: center;
    justify-content: center;
    top: -8;
    left: 10;
  `;

  const TextSolicitation = styled.Text`
    color:#FAFAFA;
    font-size:14px;
    font-weight:500;
    text-align:center;
    width:200px;
  `;

  const ContainerSolicitation = styled.View`
    height:278px;
    align-items:center;
    justify-content:center;
  `;

  const ContentAdd = styled.View`
    flex-direction:row;
    border-top-width:1px;
    border-color:#9e9e9e;
    padding-vertical:16px;
  `;
  const AcceptButton = styled(LinearGradient)`
    height:20px;
    width:20px;
    border-radius:20px;
    justify-content:center;
    align-items:center;
    margin-left:10px;
  `;

  const DeclineButton = styled.TouchableOpacity`
    height:24px;
    width:24px;
    border-radius:20px;
    justify-content:center;
    align-items:center;
    margin-left:10px;
  `;

  const ButtonChoice = styled.TouchableOpacity`
    flex-direction:row;
    height:24px;
    width:92px;
    position:absolute;
    right:0;
    border:1px solid white;
    align-items:center;
    justify-content:center;
    border-radius:20px;
    top:25
  `;

  const renderItem = ({ item }) => (
    <ContentAdd>
    <Background colors={['#4568DC', '#B06AB3']}>
      <ProfileImage
        source={{
          uri:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        }}
      />
    </Background>
    <View style={{ flexDirection: 'row', alignItems: 'center', top: -20, left: 20 }}>
      <Text style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginTop: 8 }}>
        <IcoMedal />
      </Text>
      <View style={{ width: 12, height: 12, alignItems: 'center', justifyContent: 'center' }}>
        <HeartFlames />
      </View>
      <Text style={{ color: '#3C4E97', fontSize: 8, fontWeight: '700' }}>(MNRV)</Text>
      <Username>sugeknight</Username>
    </View>
    <Text style={{ position: 'absolute', left: '19%', bottom:20,color:'#EEEEEE' }}>User ID: 456764575 </Text>
   <ButtonChoice>
   <Text style={{color:'#FFF'}}>Convidar</Text>
</ButtonChoice>
    </ContentAdd>
  );

  const switchToSolicitandoTab = () => {
    setActiveTab('solicitando');
  };

  const switchToAdicionarTab = () => {
    setActiveTab('adicionar');
  };

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
            <View style={{flexDirection:'row',marginBottom:20}}>
                <ArrowLeft />
        <Text style={{color:'#FFF',fontWeight: '500',fontSize:18,position:'absolute',left:'35%'}}>Selecionar PK</Text>
        </View>
          <View style={styles.tabContainer}>
            
            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'solicitando' && styles.activeTabButton]}
              onPress={switchToSolicitandoTab}
            >
              <Text style={[styles.tabButtonText, activeTab === 'solicitando' && styles.activeTabButtonText]}>
              Aleatório
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'adicionar' && styles.activeTabButton]}
              onPress={switchToAdicionarTab}
            >
              <Text style={[styles.tabButtonText, activeTab === 'adicionar' && styles.activeTabButtonText]}>
              Amigos
              </Text>
            </TouchableOpacity>
          </View>
          {activeTab === 'solicitando' && (
            <View style={styles.tabContent}>
              <ContainerSolicitation>
                <ScanIcon/>
                <TextSolicitation>Sem solicitações de ligação nesse momento.</TextSolicitation>
              </ContainerSolicitation>
            </View>
          )}
          {activeTab === 'adicionar' && (
            <View style={styles.tabContent}>
                <View style={styles.searchInput}>
                    <SearchIcon style={{margin:5,marginRight:15}}/>
              <TextInput
                placeholder="Pesquisar usuário"
                placeholderTextColor={'#9e9e9e'}
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
              </View>
              <Text style={{fontWeight:'600',color:'#FFF',marginBottom:12,marginTop:16}}>Seguidores sugeridos</Text>
              <FlatList
                data={filteredUsers}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
              />
            </View>
          )}
        </View>
        {notificationVisible && (
          <View style={styles.notificationContainer}>
            <Text style={styles.notificationText}>
              {selectedInvite ? `${selectedInvite.name} foi adicionado!` : ''}
            </Text>
          </View>
        )}
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
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: '100%',
    bottom: 0,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    color: '#CCC',
  },
  activeTabButton: {
    color: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#FFF',
  },
  tabButtonText: {
    color: '#9E9E9E',
    fontSize: 18,
  },
  activeTabButtonText: {
    color: '#FFF',
    fontWeight: '700',
  },
  tabContent: {
    marginTop: 10,
    height: 285,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  name: {
    flex: 1,
    fontSize: 16,
  },
  acceptButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  declineButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  searchInput: {
    backgroundColor: '#000',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    borderWidth:1,
    borderColor:'#9e9e9e',
    flexDirection:'row',
    width:'100%',
    






  
    
  },
  notificationContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 8,
    padding: 10,
  },
  notificationText: {
    color: 'white',
    fontSize: 14,
  },
});

export default InviteModal;
