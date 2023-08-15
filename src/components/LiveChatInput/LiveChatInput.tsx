import React, { useState, useEffect, useImperativeHandle, forwardRef, useRef } from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import Modal from 'react-native-modal'; 
import { useTranslation } from 'react-i18next'
import '../../locales/i18n';

import i18n from 'src/locales/i18n';

interface User {
  id: number;
  username: string;
}






interface LiveChatInputProps {
  onSendMessage: (message: string) => void;
  value: string;
  onChangeText: (text: string) => void;
}

const LiveChatInput = forwardRef(({ onSendMessage }: LiveChatInputProps, ref) => {
  const { t, i18n } = useTranslation();
  const [input, setInput] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const textInputRef = useRef<TextInput>(null);

  const mockUsers: User[] = [
    { id: 1, username: t('text-ballon-sender-1') },
    { id: 2, username: t('text-ballon-sender-2')},
    { id: 3, username: t('text-ballon-sender-support') },
    // Adicione mais usuários aqui...
  ];

  useEffect(() => {
    const words = input.split(' ');
    const lastWord = words[words.length - 1];

    if (lastWord.startsWith('@')) {
      const searchTerm = lastWord.slice(1); // Remove o '@'
      const foundUsers = mockUsers.filter((user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setUsers(foundUsers);
    } else {
      setUsers([]);
    }
  }, [input]);

  useImperativeHandle(ref, () => ({
    toggleVisibility() {
      setIsVisible(!isVisible);
      if (!isVisible) {
        setTimeout(() => {
          if (textInputRef.current) {
            textInputRef.current.focus();
          }
        }, 100); // Aguarda um pouco para focar
      }
    },
  }));

  const selectUser = (user: User) => {
    const words = input.split(' ');
    words[words.length - 1] = user.username;
    const newInput = words.join(' ') + ' ';
    setInput(newInput);
    setUsers([]);
  };

  const closeKeyboard = () => {
    setInput('');
    setIsVisible(false);
  };
  const handleSendMessage = () => {
    if (input.trim() !== '') {
      onSendMessage(input);
      setInput('');
      setUsers([]);
    }
  };

  const handleKeyPress = (event) => {
    if (event.nativeEvent.key === 'Enter') {
      handleSendMessage();
    }
  };

  
  return (
    <Modal
    isVisible={isVisible}
    onBackdropPress={closeKeyboard}
    onBackButtonPress={closeKeyboard}
  >
    <TouchableWithoutFeedback onPress={closeKeyboard}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.centeredView}
      >
        {users.length > 0 && (
          <View style={styles.userList}>
            {users.map((user) => (
              <TouchableOpacity
                key={user.id}
                style={styles.userItem}
                onPress={() => selectUser(user)}
              >
                <Text>{user.username}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <View style={styles.modalView}>
          <View style={styles.content}>
            <TextInput
              ref={textInputRef}
              style={styles.input}
              multiline
              placeholder="Digite sua mensagem..."
              value={input}
              onChangeText={setInput}
              onKeyPress={handleKeyPress} // Adicione este evento
              onSubmitEditing={handleSendMessage}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  </Modal>
);
});


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingBottom: 30,
    bottom:-20,
  },
  header: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  closeButton: {
    padding: 10,
  },
  content: {
   
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    backgroundColor:'#fff',
    marginTop:10,

  },
  userList: {
    flex: 1,
    backgroundColor:'#FFF',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection:'row',
    position:'absolute',
    bottom:55,
    width:'100%',
    alignSelf:'center',
    height:50
  },
  userItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default LiveChatInput;
