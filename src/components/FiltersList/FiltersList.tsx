import React, { useState, useRef, useEffect } from 'react'
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageRequireSource,
} from 'react-native'
import GradientBackground from '../GradientBackground/GradienteBackground'
import Spinner from '../Speener/Speener'

interface Filter {
  id: number
  name: string
  image: ImageRequireSource
}

interface FilterListProps {
  filters: Filter[]
  onFilterSelected: (filter: Filter) => void
}

const FilterList: React.FC<FilterListProps> = ({
  filters,
  onFilterSelected,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<Filter | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const scrollViewRef = useRef<ScrollView>(null)

  useEffect(() => {
    setLoading(true)
  }, [filters])

  const handleFilterPress = (filter: Filter) => {
    setSelectedFilter(filter)
    onFilterSelected(filter)
  }

  const handleOnLoad = () => {
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[
          styles.filtersContainer,
          { justifyContent: loading ? 'center' : 'flex-start' },
        ]}
      >
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter.id}
            onPress={() => handleFilterPress(filter)}
            style={[
              styles.filterItem,
              selectedFilter?.id === filter.id ? styles.selectedFilter : null,
            ]}
          >
            <Image
              style={styles.filterImage}
              source={filter.image}
              onLoad={handleOnLoad}
            />
            {selectedFilter?.id === filter.id && (
              <View style={styles.filterNameContainer}>
                <GradientBackground borderRadius={8}>
                  <Text style={styles.filterName}>{filter.name}</Text>
                </GradientBackground>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
      {loading && (
        <View style={styles.spinnerContainer}>
          <Spinner />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    alignItems: 'center',
  },
  filtersContainer: {
    paddingHorizontal: 8,
    flexDirection: 'row',
  },
  filterItem: {
    borderRadius: 50,
    marginRight: 8,
    borderWidth: 2,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
  },
  selectedFilter: {
    borderColor: '#4568DC',
    width: 80,
    height: 80,
  },
  filterImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    resizeMode: 'cover',
    position: 'absolute',
  },
  filterName: {
    fontSize: 12,
    color: '#fff',
    padding: 4,
  },
  filterNameContainer: {
    position: 'absolute',
    padding: 4,
    borderRadius: 12,
    bottom: -7,
    overflow: 'hidden',
  },
  spinnerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default FilterList
