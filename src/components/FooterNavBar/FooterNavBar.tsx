// CustomTabBar.tsx
import React from 'react';
import { TouchableOpacity, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const TabBar = styled.View`
  flex-direction: row;
  height: 56px;
  align-items: center;
  justify-content: space-around;
`;

const SelectedItemLine = styled.View`
  width: 100%;
  height: 2px;
  background-color: white;
  position: absolute;
  bottom: 0;
`;


const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ backgroundColor: 'transparent' }}
    >
      <TabBar>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                padding:12,
                marginRight: 10.5
              }}
            >
              <Text
                style={{
                  color: isFocused ? '#fff' : '#fff',
                  fontWeight: isFocused ? 'bold' : 'normal',
                }}
              >
                {typeof label === 'string' && label || ''}
              </Text>
              {isFocused && <SelectedItemLine />}
            </TouchableOpacity>
          );
        })}
      </TabBar>
    </ScrollView>
  );
};

export default CustomTabBar;
