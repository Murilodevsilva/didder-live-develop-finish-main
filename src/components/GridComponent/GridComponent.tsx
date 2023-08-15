import React from 'react';
import { View, StyleSheet } from 'react-native';

interface GridComponentProps {
  numberOfBlocks: number;
  size?: number;
  width?: number;
  active?: boolean;
}

const GridComponent: React.FC<GridComponentProps> = ({
  numberOfBlocks,
  size = 200,
  width = 200,
  active = false,
}) => {
  const calculateRows = () => {
    if (numberOfBlocks === 3) return 2;
    return Math.ceil(Math.sqrt(numberOfBlocks));
  };

  const calculateColumns = () => {
    if (numberOfBlocks === 3) return 2;
    return Math.ceil(numberOfBlocks / calculateRows());
  };

  const rows = calculateRows();
  const columns = calculateColumns();

  const blockSize = (width - (columns - 1) * 10) / columns;

  const generateBlocks = () => {
    const blocks = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const index = i * columns + j;
        if (index >= numberOfBlocks) break;

        blocks.push(
          <View
            key={`${i}-${j}`}
            style={[
              styles.block,
              {
                width: blockSize,
                height: blockSize,
                opacity: active ? 1 : 0.5,
              },
            ]}
          />
        );
      }
    }
    return blocks;
  };

  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          flexDirection: 'row',
          flexWrap: 'wrap',
        },
      ]}
    >
      {generateBlocks()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  block: {
    backgroundColor: 'blue',
    margin: 5,
  },
});

export default GridComponent;
