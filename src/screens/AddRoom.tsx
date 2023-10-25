import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import Layout from '../layout'
import { Label } from '../components/Text'
import { colors, lightShadow } from '../constants/theme'
import { useForm } from '../hooks/useForm'
import { ColorPicker } from '../components/ColorPicker'
// import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import { StyledTextInput } from '../components/StyledTextInput'
import { roomSchema } from '../constants/schemas'
import {
  COLOR,
  DEFAULT_ROOM_FORM,
  DESCRIPTION,
  ID,
  NAME,
  SUBJECT,
  TIMESTAMP_CREATION
} from '../constants'

const AddRoom = () => {
  const [formValues, handleFormValueChange, setFormValues] = useForm(DEFAULT_ROOM_FORM)
  const [color, setColor] = useState<string | null>(null)

  const setRoomColor = (color: string) => {
    setColor(color)
    handleFormValueChange(COLOR, color)
  }

  const handleSubmit = async () => {
    handleFormValueChange(ID, 2)
    handleFormValueChange(TIMESTAMP_CREATION, Date.now())
    try {
      await roomSchema.validate(formValues)
      console.log('🥳🥳🥳🥳🥳')
    } catch (error) {
      console.log('Validation error:', error)
    }
  }

  return (
    <Layout titleHeader="Create new room">
      <View style={{ gap: 28, paddingHorizontal: 8 }}>
        <View>
          <Label text="Select room color" />
          <ColorPicker setColor={setRoomColor} colorSelected={color} />
        </View>
        <StyledTextInput label={NAME} onChangeText={(text) => handleFormValueChange(NAME, text)} />
        <StyledTextInput
          label={SUBJECT}
          onChangeText={(text) => handleFormValueChange(SUBJECT, text)}
        />
        <StyledTextInput
          label={DESCRIPTION}
          onChangeText={(text) => handleFormValueChange(DESCRIPTION, text)}
        />
        <Pressable onPress={() => handleSubmit()}>
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
      </View>
    </Layout>
  )
}

export default AddRoom
