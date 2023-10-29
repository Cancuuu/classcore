import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import RoomCard from '../components/RoomCard'
import { Subtitle } from '../components/Text'
import { colors, lightShadow } from '../constants/theme'

interface ISelectionModalProps {
  navigation: any
  route: any
}

const SelectionModal = ({ navigation, route }: ISelectionModalProps) => {
  const { options, lastRoute, prevSelectedOptions } = route.params
  const [selectedOptions, setSelectedOptions] = useState<any>(prevSelectedOptions || [])
  const wasSelected = (option: any) => selectedOptions.includes(option)

  const selectOption = (option: any) => {
    if (wasSelected(option)) {
      setSelectedOptions(selectedOptions.filter((selectedOption: any) => selectedOption !== option))
    } else {
      setSelectedOptions((prevOptions: any) => [...prevOptions, option])
    }
  }

  const sendOptionsToLastRoute = () =>
    navigation.navigate(lastRoute, {
      selectedOptions
    })

  return (
    <View style={{ padding: 12, flex: 1, alignItems: 'center' }}>
      <View
        style={{
          marginTop: 12,
          marginBottom: 24
        }}
      >
        <Subtitle text="Select an option" />
      </View>
      {options.map((option: any) => (
        <Pressable style={{ width: '100%' }} key={option.id} onPress={() => selectOption(option)}>
          <RoomCard room={option} />
          <View style={{ position: 'absolute', bottom: 24, right: 5 }}>
            <Text style={{ fontSize: 42 }}>{wasSelected(option) ? '✅' : ''}</Text>
          </View>
        </Pressable>
      ))}
      <View
        style={{
          position: 'absolute',
          bottom: 42,
          width: '100%'
        }}
      >
        <Pressable
          style={{
            backgroundColor: colors.darkGray,
            borderRadius: 24,
            padding: 18,
            width: '100%',
            ...lightShadow
          }}
          onPress={() => sendOptionsToLastRoute()}
        >
          <Text
            style={{
              fontSize: 18,
              color: '#FFF',
              textAlign: 'center'
            }}
          >
            DONE
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default SelectionModal
