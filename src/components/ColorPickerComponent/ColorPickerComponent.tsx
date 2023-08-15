import React, { useRef, useState } from 'react'
import { View, Button, TouchableOpacity } from 'react-native'
import { ColorPicker, fromHsv } from 'react-native-color-picker'
import ActionSheet from 'react-native-actions-sheet'
import GradientButton from '../GradientButton/GradientButton'

interface ColorPickerComponentProps {
  children: React.ReactNode
  onColorChange: (color: string) => void
}

const ColorPickerComponent: React.FC<ColorPickerComponentProps> = ({
  children,
  onColorChange,
}) => {
  const actionSheetRef = useRef(null)
  const colorPickerRef = useRef<any>(null)
  const [selectedColor, setSelectedColor] = useState<{
    h: number
    s: number
    v: number
  }>()

  const handleColorChange = (color: { h: number; s: number; v: number }) => {
    setSelectedColor(color)
  }

  const handleOpenActionSheet = () => {
    actionSheetRef.current?.show()
  }

  const handleCloseActionSheet = () => {
    actionSheetRef.current?.hide()
    if (selectedColor) {
      onColorChange(fromHsv(selectedColor))
    }
  }

  return (
    <TouchableOpacity onPress={handleOpenActionSheet}>
      <View>{children}</View>
      <ActionSheet ref={actionSheetRef} containerStyle={{ padding: 20 }}>
        <ColorPicker
          ref={colorPickerRef}
          onColorChange={handleColorChange}
          style={{ height: 200, width: '100%' }}
          hideSliders={false}
        />
        <GradientButton onPress={handleCloseActionSheet}>
          Confirmar
        </GradientButton>
      </ActionSheet>
    </TouchableOpacity>
  )
}

export default ColorPickerComponent
