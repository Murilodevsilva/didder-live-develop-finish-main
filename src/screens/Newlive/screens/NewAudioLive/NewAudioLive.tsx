import React from "react"
import { Body, Container } from "./newaudiolive.styled"
import AddLiveTitle from "../../../../components/Addlivetitle"
import NewLiveAudioHeader from "../../components/NewLiveAudioHeader/NewLiveAudioHeader"
import BlockSelector from "src/components/BlockSelector/BlockSelector"
import LivePeopleCounterSelect from "../../components/LivePeopleCounterSelect"
import { useLiveContext } from "src/contexts/LiveContextProvider"
import GradientButton from "src/components/GradientButton/GradientButton"
import { Mic } from "src/assets/svg/icon-live-mic"

const NewAudioLive = () => {
  const { numberOfPeople, setNumberOfPeople } = useLiveContext()
  return (
    <Container>
      <NewLiveAudioHeader />
      <AddLiveTitle />
      <Body></Body>
      <LivePeopleCounterSelect
        items={[
          <BlockSelector
            isSelected={numberOfPeople === 4}
            onPress={() => setNumberOfPeople(4)}
            blocks={4}
          />,
          <BlockSelector
            isSelected={numberOfPeople === 8}
            onPress={() => setNumberOfPeople(8)}
            blocks={8}
          />,
          <BlockSelector
            isSelected={numberOfPeople === 16}
            onPress={() => setNumberOfPeople(16)}
            blocks={16}
          />,
        ]}
      />

      <GradientButton bold onPress={() => {}} leftIcon={<Mic />}>
        Iniciar Live
      </GradientButton>
    </Container>
  )
}

export default NewAudioLive
