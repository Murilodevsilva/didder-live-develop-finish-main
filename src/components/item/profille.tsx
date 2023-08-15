import React, { useEffect, useState } from 'react'
import { InteractionManager, Text } from 'react-native'
import { AroundPhoto } from 'src/assets/svg/around-photo'
import { HeaderBasic } from 'src/components/headers/header-basic'
import { Post } from 'src/components/post'
import { ButtonPost } from 'src/components/post/button-post'
import { Body } from 'src/styles'

import {
  BusyIndicator,
  Container,
  ContainerScroll,
  ContentCenter,
  Space,
} from 'src/styles/basic'
import { BoxAroundPhoto } from 'src/styles/item'

export const Profille = () => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setReady(true)
    })
  }, [])
  return (
  
   
      <BoxAroundPhoto>
       <AroundPhoto></AroundPhoto>
        </BoxAroundPhoto>       
       


   

  
  )
}
