import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Nick from './nick';

const initialSuggestions = ['Olá', 'Tudo bem?', 'Como vai você?'];

const MentionInput = () => {
  const [text, setText] = useState('');
  const [displayComponent, setDisplayComponent] = useState(null);
  const [suggestions, setSuggestions] = useState(initialSuggestions);

  return (
    <View style={styles.container}>
      <View style={styles.suggestionsContainer}>
        {suggestions.map((suggestion) => (
          <TouchableOpacity
            key={suggestion}
            style={styles.suggestion}
            onPress={() => {
              setText(text + suggestion + ' ');
              setSuggestions(suggestions.filter((item) => item !== suggestion));
            }}
          >
            <Text>{suggestion}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.inputContainer}>
        {displayComponent && <Nick />}
        <TextInput
          style={styles.input}
          placeholder="Digite aqui"
          onChangeText={(text) => {
            setText(text);
            if (text.endsWith('@')) {
              setDisplayComponent(<Nick />);
            }
          }}
          value={text}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      position:'absolute',
      bottom:0
    },
    suggestionsContainer: {
      backgroundColor: '#EEEEEE',
      borderRadius: 5,
      padding: 5,
      marginBottom: 10,
      flexDirection:'row',
      position:'absolute',
      bottom:30
    },
    suggestion: {
      padding: 5,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      borderRadius: 5,
      padding: 10,
    },
  });
export default MentionInput;
