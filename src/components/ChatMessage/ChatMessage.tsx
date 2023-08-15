import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ChatMessageProps {
  content: string;
  type: 'user' | 'system';
}

const ChatMessage: React.FC<ChatMessageProps> = ({ content, type }) => {
  return (
    <View style={type === 'user' ? styles.userMessageContainer : styles.systemMessageContainer}>
      <Text style={type === 'user' ? styles.userMessageText : styles.systemMessageText}>
        {content}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userMessageContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  systemMessageContainer: {
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  userMessageText: {
    fontSize: 16,
    color: '#333333',
  },
  systemMessageText: {
    fontSize: 14,
    color: '#666666',
  },
});

export default ChatMessage;
