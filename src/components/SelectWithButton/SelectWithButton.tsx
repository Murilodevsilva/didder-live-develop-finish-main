import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import DropDownPicker from 'react-native-dropdown-picker'

interface SelectProps {
  options: { label: string; value: string }[]
  onSubmit: (selectedItem: string | null) => void
}

const SelectWithButton: React.FC<SelectProps> = ({ options, onSubmit }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    options[0]?.value || null
  )

  return (
    <View style={styles.wrapper}>


      <TouchableOpacity onPress={() => onSubmit(selectedOption)}>
        <LinearGradient
          colors={['#4568DC', '#B06AB3']}
          style={styles.submitButton}
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

export default SelectWithButton

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4568DC',
    borderRadius: 30,
    overflow: 'hidden',
  },
  picker: {
    height: 40,
    flex: 1,
  },
  submitButton: {
    padding: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
})
