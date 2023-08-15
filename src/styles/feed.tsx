import React from 'react'
import { ActivityIndicator } from 'react-native'
import { StyleSheet, View } from 'react-native'
import styled from 'styled-components/native'

export const Center = styled.View`
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 5%;
  height: auto;
`
export const BoxTitle = styled.View`
  margin-left: 5%;
`
export const BoxButton = styled.View`
  margin-left: 5%;
`
export const ButtonRow = styled.TouchableOpacity`
  flex-direction: row;
`
export const TitleName = styled.Text`
  font-family: 'PoppinsLight';
  color: #000;
  margin-top: 50px;
`
export const BoxAvatar = styled.View`
  margin-top: 10%;
`

export const TextComents = styled.Text`
  font-family: 'PoppinsLight';
  color: #757575;
  font-size: 12px;
  padding-left: 3%;
  padding-right: 6% 
  margin-top: 10px;
`
export const TitleModal = styled.Text`
  font-size:20px;
  color:'#01174A'
  font-style: normal;
  font-weight: 500;

`
export const BoxOptions = styled.View`
  border-width: 0.5px;
  border-color: #eeee;
  width: 100%;
  height: 70px;
`
export const BoxModalShare = styled.View`
  height: 100%;
  width: 100%;
  margin-top: 70%;
  background-color: white;
  border-radius: 20px;
`

export const BoxInput = styled.View`
  border-width: 1px;
  border-radius: 4px;
  border-color: #f5f5f5;
  width: 90%;
  height: 50px;
  margin-top: 5%;
`
export const Boxpleople = styled.View`
  margin-top: 20%;
`

export const ContainerPeople = styled.View`
  height: 120px;
  border-width: 1px;
  border-radius: 4px;
  border-color: #f5f5f5;
`

export const Agrupate = styled.View`
  flex-direction: row;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
  align-items: center;
  justify-content: space-between;
`
export const ButtonShare = styled.View`
    border-width: 0.5px;
    border-color: #673AB3
    justify-content: center;
    align-items: center;
    border-radius: 23px;
    margin-left: 10%;
    margin-top: 10%;
    width: 110px;
    height: 40px;
`





