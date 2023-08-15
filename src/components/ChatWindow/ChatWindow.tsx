import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

interface Message {
  type: 'user' | 'streamer';
  content: string;
}

interface ChatWindowProps {
  messages: Message[];
}

const ChatWindow = ({ messages }: ChatWindowProps) => {
  const renderItem = ({ item }: { item: Message }) => {
    const messageTypeStyle =
      item.type === 'user' ? styles.userMessage : styles.streamerMessage;
    return (
      <View style={[styles.messageContainer, messageTypeStyle]}>
        <Text style={styles.messageText}>{item.content}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => `${index}`}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
        inverted
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  messageContainer: {
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  userMessage: {
    backgroundColor: '#ccc',
    alignSelf: 'flex-start',
  },
  streamerMessage: {
    backgroundColor: 'lightblue',
    alignSelf: 'flex-end',
  },
  messageText: {
    fontSize: 16,
  },
});

export default ChatWindow;
