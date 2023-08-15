import { View } from 'react-native'
import React from 'react'

export const RadioButtonVariant = (props: any) => {
  return (
    <View
      style={[
        {
          height: 24,
          width: 24,
          borderRadius: 24 / 2,
          backgroundColor: `${props.selected ? '#3B4781' : '#fff'}`,
          alignItems: 'center',
          justifyContent: 'center',
          ...(props.selected && { borderColor: 'transparent' }),
          ...(!props.selected && { borderWidth: 2 }),
          ...(!props.selected && { borderColor: '#424242' }),
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
            backgroundColor: '#fff',
          }}
        />
      ) : null}
    </View>
  )
}
