import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Layout from '../layout'
import { colors, lightShadow } from '../constants/theme'
import { useForm } from '../hooks/useForm'
import { ColorPicker } from '../components/ColorPicker'
import { StyledTextInput } from '../components/StyledTextInput'
import { ROOM_SCHEMA } from '../constants/schemas'
import { COLOR, DEFAULT_ROOM_FORM, DESCRIPTION, ID, NAME, SUBJECT } from '../constants'
import { Store_addRoom } from '../store'
import uuid from 'react-native-uuid'

const AddRoom = () => {
  const [
    formValues,
    handleFormValueChange,
    setFormValues,
    validateForm,
    formErrors,
    setFormErrors,
    resetForm
  ] = useForm(DEFAULT_ROOM_FORM)
  const [color, setColor] = useState<string | null>(null)

  useEffect(() => {
    console.log('form values', formValues)
  }, [formValues])

  const setRoomColor = (color: string) => {
    setColor(color)
    handleFormValueChange(COLOR, color)
  }

  const handleSubmit = async () => {
    const isFormValid = await validateForm(ROOM_SCHEMA)
    if (isFormValid) {
      console.log('Its valid! 🥳')
      Store_addRoom(formValues)
      resetForm()
      setColor(null)
    } else {
      // create an alert
      console.log('is not valid', formErrors)
    }
  }

  return (
    <Layout titleHeader="Create new room" rightEmoji="✏️" backButton>
      <View style={{ gap: 28 }}>
        <View>
          <ColorPicker setColor={setRoomColor} colorSelected={color} />
        </View>
        <StyledTextInput
          value={formValues[NAME]}
          label={NAME}
          onChangeText={(text) => handleFormValueChange(NAME, text)}
        />
        <StyledTextInput
          value={formValues[SUBJECT]}
          label={SUBJECT}
          onChangeText={(text) => handleFormValueChange(SUBJECT, text)}
        />
        <StyledTextInput
          value={formValues[DESCRIPTION]}
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
