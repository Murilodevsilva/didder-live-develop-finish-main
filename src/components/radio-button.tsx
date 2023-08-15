import { View } from 'react-native'
import React from 'react'

export const RadioButton = (props: any) => {
  return (
    <View
      style={[
        {
          height: 24,
          width: 24,
          borderRadius: 12,
          borderColor: '#3B4781',
          borderWidth: 3,
          alignItems: 'center',
          justifyContent: 'center',
        },
        props.style,
      ]}
    >
      {props.selected ? (
        <View
          style={{
            height: 12,
            width: 12,
            borderRadius: 500000,
            backgroundColor: '#3B4781',
          }}
        />
      ) : null}
    </View>
  )
}
