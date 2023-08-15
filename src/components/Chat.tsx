import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View, Text,ScrollView } from 'react-native';
import Nick from './NickLive';
import {NickBallon} from './styles'
import { useTranslation } from 'react-i18next'
import '../../locales/i18n'

import i18n from 'src/locales/i18n';



const Chat = ({messages}) => {
  const { t, i18n } = useTranslation();
  return (
    <View style={styles.container}>
    <ScrollView style={{height:'90%',width:'90%'}}>
      {messages.map((message, index) => (
        <View key={index} style={styles.balloonContainer}>
          <LinearGradient
            style={styles.balloon}
            colors={['#4568DC80', '#B06AB380']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
        
          <View style={styles.balloon}>
            <NickBallon>
              <Nick />
              <Text style={styles.sender}>{message.sender}</Text>
            </NickBallon>
            <Text style={styles.message}>{message.content}</Text>
          </View>
          </LinearGradient>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom:70,
    alignSelf:'flex-start'
  },
  balloonContainer: {
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:10,
    width:300,
    marginBottom:30,
    left:0
  },
  sender: {
    fontWeight: 'bold',
    margin: 5,
    color:'#FFF',
    
  },
  sender2: {
    fontWeight: 'bold',
    margin: 5,
    color:'#00BCD3'
  },
  balloon: {
    padding: 5,
    borderRadius: 10,
  },
  balloon2: {
    padding: 10,
    borderRadius: 10,
    backgroundColor:'rgba(0,0,0,0.5)',
    width:280,
    marginLeft:10,
    paddingVertical:15
  },
  balloon3: {
    padding: 10,
    borderRadius: 10,
    backgroundColor:'#B704BB40',
    width:280,
    marginLeft:10,
    paddingVertical:15
  },
  message: {
    fontSize: 16,
    color:'#FFF',
    marginBottom:5
  },
});

export default Chat;
