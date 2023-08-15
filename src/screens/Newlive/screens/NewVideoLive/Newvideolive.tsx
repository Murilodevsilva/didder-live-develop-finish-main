import React, { useState } from "react"
import { View, Text } from "react-native"
import { Body, Container, FiltersContainer } from "./newvideolive.styled"
import NewVideoliveHeader from "../../components/Newvideoliveheader/Newvideoliveheader"
import AddLiveTitle from "../../../../components/Addlivetitle"
import SideMenu from "../../components/Sidemenu/Sidemenu"
import FilterList from "src/components/FiltersList/FiltersList"
import GradientButton from "src/components/GradientButton/GradientButton"
import { Video } from "src/assets/svg"
import { useLiveContext } from "src/contexts/LiveContextProvider"

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

const NewVideoLive = () => {
  const [selectedFilter, setFilters] = useState(null)
  const { filterListVisible } = useLiveContext()
  console.log(
    "🚀 ~ file: Newvideolive.tsx:58 ~ NewVideoLive ~ filterListVisible:",
    filterListVisible
  )
  return (
    <Container>
      <View>
        <NewVideoliveHeader />
        <AddLiveTitle />
      </View>
      <Body>
        <SideMenu />
        <FiltersContainer>
          {filterListVisible && (
            <FilterList onFilterSelected={setFilters} filters={filters} />
          )}
        </FiltersContainer>
      </Body>

      <GradientButton bold onPress={() => {}} leftIcon={<Video />}>
        Iniciar Live
      </GradientButton>
    </Container>
  )
}

export default NewVideoLive
