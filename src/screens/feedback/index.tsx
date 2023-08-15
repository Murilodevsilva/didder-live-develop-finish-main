import React, { useEffect, useState } from 'react';
import { Image, InteractionManager, StatusBar, Text, TextInput, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import { HeaderBasic } from 'src/components/headers/header-basic';
import { BusyIndicator, Container } from 'src/styles/basic';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';

export const Feedback = () => {
  const [ready, setReady] = useState(false);
  const [activeTabs, setActiveTabs] = useState([]);
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const handleImageUpload = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.granted === false) {
        throw new Error('Permissão de acesso à galeria de mídia negada.');
      }

      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!pickerResult.cancelled) {
        setImageUri(pickerResult.uri);
      }
    } catch (error) {
      Alert.alert('Erro', error.message);
    }
  };

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setReady(true);
    });
  }, []);

  const handleTabPress = (index) => {
    const newActiveTabs = [...activeTabs];

    if (newActiveTabs.includes(index)) {
      const indexToRemove = newActiveTabs.indexOf(index);
      newActiveTabs.splice(indexToRemove, 1);
    } else {
      // Adiciona o item caso contrário
      newActiveTabs.push(index);
    }

    setActiveTabs(newActiveTabs);
  };

  const renderButton = (text, index) => {
    const isActive = activeTabs.includes(index);

    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.button,
          { backgroundColor: isActive ? '#ccc' : '#566FD7' },
          index !== 1 && styles.buttonMarginRight
        ]}
        onPress={() => handleTabPress(index)}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      {!ready ? (
        <BusyIndicator />
      ) : (
        <>
          <HeaderBasic title='FeedBack' back={true} icon='?' />
          <View style={styles.optionsContainer}>
            <Text style={styles.optionsText}>Opções</Text>
          </View>
          <View style={styles.buttonContainer}>
            {[
              'Recarga',
              'Presentes',
              'Lives',
              'Eventos',
              'Sugestões',
              'Outros'
            ].map((text, index) => renderButton(text, index + 1))}
          </View>
          <View style={styles.formContainer}>
            <View style={styles.formContent}>
              <Text style={{color:'#BBB',fontWeight:'bold',fontSize:14}}>Email:</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
              />
              <Text style={{color:'#BBB',fontWeight:'bold',fontSize:14,marginTop:15}}>Descrição:</Text>
              <TextInput
                style={[styles.inputDesc, styles.multilineInput]}
                value={description}
                onChangeText={setDescription}
                placeholder='Descreva a situação ocorrida.'
                multiline
              />
               <Text style={{color:'#BBB',fontWeight:'bold',fontSize:14,marginTop:21,marginBottom:15, fontFamily:'Poppins'}}>Anexar imagens</Text>
              <TouchableOpacity
                style={styles.imageUploadButton}
                onPress={handleImageUpload}
              >
                {imageUri ? (
                  <Image source={{ uri: imageUri }} style={styles.imagePreview} />
                ) : (
                  <Image style={{width:40,height:40}} source={{uri:'https://i.ibb.co/8dXJ157/Add-Circle.png'}}/>
                )}
              </TouchableOpacity>
              <TouchableOpacity style={{marginTop:56}}>
              <LinearGradient colors={['#4568DC','#3B4781']} start={{x:0,y:0}} end={{x:1 , y:0}} style={{width:331,height:51,alignItems:'center',justifyContent:'center',borderRadius:50}}><Text style={{color:'#fff',fontSize:16,fontFamily:'Poppins'}}>Enviar</Text></LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
      <StatusBar translucent={true} />
    </Container>
  );
};

// Estilos CSS
const styles = StyleSheet.create({
  optionsContainer: {
    marginLeft: 15,
    marginTop: 10
  },
  optionsText: {
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: '500',
    marginTop:15,
    marginLeft:20
  },
  buttonContainer: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignSelf:'center',
    margin: 10,
    
  },
  button: {
    backgroundColor: '#566FD7',
    width: '25%',
    height: 33,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin:10
  },
  buttonMarginRight: {
    marginRight: 20
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFF'
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  formContent: {
    width: '90%',
    paddingHorizontal: 20,
    marginTop:20
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    height: 50,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#CCC',
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  inputDesc:{
    height: 30,
    width: '100%',
    borderWidth: 1,
    borderColor: '#CCC',
    marginBottom: 10,
    paddingHorizontal: 5,
    marginTop:20
  },
  multilineInput: {
    height: 116,
    textAlignVertical: 'top',
    padding:16,
    paddingLeft:16
  },
  imageUploadButton: {
    width: 88,
    height: 88,
    backgroundColor:'#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  imagePreview: {
    width: 88,
    height: 88,
  },
  imageUploadText: {
    fontSize: 24,
    color: 'gray'
  }
});
