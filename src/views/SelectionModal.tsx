import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'

interface ISelectionModalProps {
  navigation: any
  route: any
}
const SelectionModal = ({ navigation, route }: ISelectionModalProps) => {
  const { options } = route.params
  const [selectedOptions, setSelectedOptions] = useState<any>([])
  const wasSelected = (option: any) => selectedOptions.includes(option)

  const selectOption = (option: any) => {
    if (wasSelected(option)) {
      setSelectedOptions(selectedOptions.filter((selectedOption: any) => selectedOption !== option))
    } else {
      setSelectedOptions([...selectedOptions, option])
    }
  }

  return (
    <View style={{ padding: 12 }}>
      {options.map((option: any) => (
        <Pressable key={option} onPress={() => selectOption(option)}>
          <Text>{option}</Text>
          <Text>{wasSelected(option) ? '✅' : ''}</Text>
        </Pressable>
      ))}
    </View>
  )
}

export default SelectionModal
