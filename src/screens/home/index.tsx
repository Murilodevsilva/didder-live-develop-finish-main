import React, { useEffect, useState } from 'react'
import { InteractionManager } from 'react-native'
import { HeaderLiveGlobal } from 'src/components/headers/header-live-global'
import RenderTabContent from 'src/components/headers/header-live-global-components/tab-current'
import { ModalLanguage } from 'src/components/modals/language'

import { BusyIndicator, Container } from 'src/styles/basic'

export const Home = () => {
  const [ready, setReady] = useState(false)
  const [activeTab, setActiveTab] = useState(1)
  const [modalVisible, setModalVisible] = useState(false)
  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setReady(true)
    })
  }, [])

  return (
    <Container>
      {!ready ? (
        <BusyIndicator />
      ) : (
        <>
          <HeaderLiveGlobal
            title="red"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            titleTabOne="LIVES"
            titleTabTwo="AUDIO"
            titleTabThree="CUTS"
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          <RenderTabContent activeTab={activeTab} />
          {modalVisible && (
            <ModalLanguage
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          )}
        </>
      )}
    </Container>
  )
}
