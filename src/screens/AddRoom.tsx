import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import Layout from '../layout'
import { colors, lightShadow } from '../constants/theme'
import { useForm } from '../hooks/useForm'
import { ColorPicker } from '../components/ColorPicker'
import { StyledTextInput } from '../components/StyledTextInput'
import { ROOM_SCHEMA } from '../constants/schemas'
import { COLOR, DEFAULT_ROOM_FORM, DESCRIPTION, NAME, SUBJECT } from '../constants'

const AddRoom = () => {
  const [
    formValues,
    handleFormValueChange,
    setFormValues,
    validateForm,
    formErrors,
    setFormErrors
  ] = useForm(DEFAULT_ROOM_FORM)
  const [color, setColor] = useState<string | null>(null)

  const setRoomColor = (color: string) => {
    setColor(color)
    handleFormValueChange(COLOR, color)
  }

  const handleSubmit = async () => {
    const isFormValid = await validateForm(ROOM_SCHEMA)
    if (isFormValid) {
      // save the room
    } else {
      // show errors
    }
  }

  return (
    <Layout titleHeader="Create new room" backButton>
      <View style={{ gap: 28, marginTop: 24 }}>
        <View>
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
