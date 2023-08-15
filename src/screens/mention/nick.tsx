import React, { useState } from 'react';
import { View, TextInput, Text, FlatList, TouchableOpacity } from 'react-native';
import { HeartFlames } from 'src/assets/svg/family/heart-flames';
import { IcoMedal } from 'src/assets/svg/icon-live-medal';
import styled from 'styled-components/native';


  function Nick(){
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginTop: 8 }}>
                    <IcoMedal />
                  </Text>
                  <View style={{ width: 12, height: 12, alignItems: 'center', justifyContent: 'center' }}>
                    <HeartFlames />
                  </View>
                  <Text style={{ color: '#3C4E97', fontSize: 8, fontWeight: '700' }}>(MNRV)</Text>
                  <Username>sugeknight</Username>
                </View>
    )
}

const Username = styled.Text`
font-size: 18px;
color: black;
font-weight: bold;
margin-left: 17px;
margin-right:17px;
`;

export default Nick;
