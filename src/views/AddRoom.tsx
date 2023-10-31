import { View, Text, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import Layout from '../layout'
import { colors, lightShadow } from '../constants/theme'
import { useForm } from '../hooks/useForm'
import { ColorPicker } from '../components/ColorPicker'
import { StyledTextInput } from '../components/StyledTextInput'
import { ROOM_SCHEMA } from '../constants/schemas'
import { COLOR, DEFAULT_ROOM_FORM, DESCRIPTION, ID, NAME, SUBJECT } from '../constants'
import { Store_addRoom } from '../store'

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

  const setRoomColor = (color: string) => {
    setColor(color)
    handleFormValueChange(COLOR, color)
  }

  const handleSubmit = async () => {
    try {
      await validateForm(ROOM_SCHEMA)
      Store_addRoom(formValues)
      resetForm()
      setColor(null)
    } catch (error: any) {
      console.log('😮 There was an error', error)
      Alert.alert(error.toString(), '', [{ text: 'OK' }])
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
