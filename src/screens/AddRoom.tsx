import { TextInput, View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import Layout from '../layout'
import { Label } from '../components/Text'
import { colors, lightShadow } from '../constants/theme'
import { useForm } from '../hooks/useForm'
import { ColorPicker } from '../components/ColorPicker'
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import { StyledTextInput } from '../components/StyledTextInput'

const DEFAULT_ROOM_FORM = {
  id: 0,
  name: '',
  subject: '',
  description: '',
  color: '',
  roomTimestamp: new Date(),
  timestampCreation: 0
}

const AddRoom = () => {
  const [formValues, handleFormValueChange] = useForm(DEFAULT_ROOM_FORM)
  const [color, setColor] = useState<string | null>(null)

  const setRoomColor = (color: string) => {
    setColor(color)
    handleFormValueChange('color', color)
  }

  const onChangeTimestamp = (event: DateTimePickerEvent, date?: Date | undefined) => {
    if (date) {
      handleFormValueChange('roomTimestamp', date)
    }
  }

  const handleSubmit = () => {
    const lastRoom = 0
    handleFormValueChange('id', lastRoom + 1)
    handleFormValueChange('timestampCreation', Date.now())
    console.log('formValues', formValues)
  }

  return (
    <Layout titleHeader="Create new room">
      <View style={{ gap: 28, paddingHorizontal: 8 }}>
        <View>
          <Label text="Select room color" />
          <ColorPicker setColor={setRoomColor} colorSelected={color} />
        </View>
        <StyledTextInput
          label="name"
          onChangeText={(text) => handleFormValueChange('name', text)}
        />
        <StyledTextInput
          label="subject"
          onChangeText={(text) => handleFormValueChange('subject', text)}
        />
        <StyledTextInput
          label="description"
          onChangeText={(text) => handleFormValueChange('description', text)}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Label text="Date and hour" />
          <DateTimePicker
            testID="dateTimePicker"
            value={formValues.roomTimestamp}
            mode="datetime"
            onChange={onChangeTimestamp}
            display="compact"
            minimumDate={new Date()}
            accentColor={color || '#000'}
          />
        </View>
      </View>
      <Pressable
        style={{
          marginTop: 48
        }}
        onPress={() => handleSubmit()}
      >
        <View
          style={{
            backgroundColor: color || colors.darkGray,
            borderRadius: 24,
            padding: 18,
            ...lightShadow
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: '#FFF',
              textAlign: 'center'
            }}
          >
            Create Room
          </Text>
        </View>
      </Pressable>
    </Layout>
  )
}

export default AddRoom
