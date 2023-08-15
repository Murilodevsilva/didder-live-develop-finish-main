import React, { useState } from "react"
import { View, Text } from "react-native"
import { Body, Container } from "./newlivewithguests.styled"
import NewVideoliveHeader from "../../components/Newvideoliveheader/Newvideoliveheader"
import AddLiveTitle from "../../../../components/Addlivetitle"
import SideMenu from "../../components/Sidemenu/Sidemenu"
import LivePeopleCounterSelect from "../../components/LivePeopleCounterSelect"
import BlockSelector from "src/components/BlockSelector/BlockSelector"
import { useLiveContext } from "src/contexts/LiveContextProvider"
import { FiltersContainer } from "../NewVideoLive/newvideolive.styled"
import FilterList from "src/components/FiltersList/FiltersList"
import GradientButton from "src/components/GradientButton/GradientButton"
import { Video } from "src/assets/svg"

const filters = [
  {
    id: 1,
    name: "4k Ultra",
    image: require("src/assets/images/filters/4kultra.png"),
  },
  {
    id: 2,
    name: "4k Ultra",
    image: require("src/assets/images/filters/4kultra.png"),
  },
  {
    id: 3,
    name: "4k Ultra",
    image: require("src/assets/images/filters/4kultra.png"),
  },
  {
    id: 4,
    name: "4k Ultra",
    image: require("src/assets/images/filters/4kultra.png"),
  },
  {
    id: 5,
    name: "4k Ultra",
    image: require("src/assets/images/filters/4kultra.png"),
  },
  {
    id: 6,
    name: "4k Ultra",
    image: require("src/assets/images/filters/4kultra.png"),
  },
  {
    id: 7,
    name: "4k Ultra",
    image: require("src/assets/images/filters/4kultra.png"),
  },
  {
    id: 8,
    name: "4k Ultra",
    image: require("src/assets/images/filters/4kultra.png"),
  },
]

const NewLiveWithGuests = () => {
  const [selectedFilter, setFilters] = useState(null)
  const { numberOfPeople, setNumberOfPeople, filterListVisible } =
    useLiveContext()
  return (
    <Container>
      <NewVideoliveHeader />
      <AddLiveTitle />
      <Body>
        <SideMenu />
        <FiltersContainer>
          {filterListVisible && (
            <FilterList onFilterSelected={setFilters} filters={filters} />
          )}
        </FiltersContainer>
      </Body>
      {!filterListVisible && (
        <LivePeopleCounterSelect
          items={[
            <BlockSelector
              isSelected={numberOfPeople === 3}
              onPress={() => setNumberOfPeople(3)}
              blocks={3}
            />,
            <BlockSelector
              isSelected={numberOfPeople === 6}
              onPress={() => setNumberOfPeople(6)}
              blocks={6}
            />,
            <BlockSelector
              isSelected={numberOfPeople === 9}
              onPress={() => setNumberOfPeople(9)}
              blocks={9}
            />,
          ]}
        />
      )}

      <GradientButton bold onPress={() => {}} leftIcon={<Video />}>
        Iniciar Live
      </GradientButton>
    </Container>
  )
}

export default NewLiveWithGuests
