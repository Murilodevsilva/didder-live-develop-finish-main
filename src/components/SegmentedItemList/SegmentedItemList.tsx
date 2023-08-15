import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native'
import { CoinShop } from 'src/assets/svg/coin-shop'

// Definição do tipo para os itens
export interface Item {
  name: string
  value: number
  image: string | any
  category: string
  handleItemPress?: () => void
}

interface SegmentedItemListProps {
  items: Item[]
}

const SegmentedItemList: React.FC<SegmentedItemListProps> = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const categories = [...new Set(items.map((item) => item.category))]

  const filteredItems = items.filter(
    (item) => item.category === selectedCategory || !selectedCategory
  )

  useEffect(() => {
    // Define a primeira categoria como selecionada por padrão
    if (categories.length > 0 && !selectedCategory) {
      setSelectedCategory(categories[0])
    }
  }, [categories])

  return (
    <View style={styles.container}>
      {/* Lista de Categorias */}
      <FlatList
        data={categories}
        horizontal
        renderItem={({ item: category }) => (
          <TouchableOpacity
            onPress={() => setSelectedCategory(category)}
            style={[styles.category]}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.selectedCategory,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />

      {/* Grid de Itens */}
      <FlatList
        data={filteredItems}
        numColumns={4}
        renderItem={({ item }) => <ListItem {...item} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  )
}

export default SegmentedItemList

const ListItem = (item: Item) => {
  const [loadState, setLoadState] = useState(false)
  return (
    <TouchableOpacity style={styles.item} onPress={item.handleItemPress}>
      <Image
        source={item.image}
        style={styles.itemImage}
        onLoadStart={() => setLoadState(true)}
        onLoadEnd={() => setLoadState(false)}
      />
      {loadState && <ActivityIndicator size="small" color="#f5f5f5" />}
      <Text style={{ color: '#fff' }}>{item.name}</Text>
      <View style={styles.itemValueContainer}>
        <CoinShop />
        <Text style={styles.itemValueText}>{item.value}</Text>
      </View>
    </TouchableOpacity>
  )
}

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  category: {
    marginRight: 10,
    padding: 10,
    borderRadius: 5,
  },
  selectedCategory: {
    color: '#ffb74d',
    fontWeight: 'bold',
  },
  categoryText: {
    fontSize: 12,
    color: '#fff',
  },
  item: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImage: {
    width: 50,
    height: 50,
  },
  itemValueContainer: {
    flexDirection: 'row',
    marginTop: 5
  },
  itemValueText: {
    color: '#fff',
    marginLeft: 5,
  }
})
