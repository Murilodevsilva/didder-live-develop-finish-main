import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Tag } from 'src/contexts/LiveContextProvider';

type TagsListProps = {
  tags: Tag[];
};

function TagsList({ tags }: TagsListProps) {
  return (
    <ScrollView horizontal={true} style={styles.container} showsHorizontalScrollIndicator={false}>
      {tags.map((tag, index) => (
        <View key={index} style={styles.tag}>
          <Text style={styles.tagText}>#{tag.name.toLowerCase()}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tag: {
    backgroundColor: '#f1f1f1',
    padding: 5,
    borderRadius: 12,
    marginRight: 5,
    marginBottom: 5,
  },
  tagText: {
    fontSize: 16,
    color:'#4568DC'
  },
});

export default TagsList;
