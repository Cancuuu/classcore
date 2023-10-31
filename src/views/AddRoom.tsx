import { View, Text, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Layout from '../layout'
import { colors, lightShadow } from '../constants/theme'
import { useForm } from '../hooks/useForm'
import { ColorPicker } from '../components/ColorPicker'
import { StyledTextInput } from '../components/StyledTextInput'
import { ROOM_SCHEMA } from '../constants/schemas'
import {
  COLOR,
  DEFAULT_ROOM_FORM,
  DESCRIPTION,
  ID,
  NAME,
  SUBJECT,
  TIMESTAMP_CREATION
} from '../constants'
import { Store_addRoom, Store_editRoom } from '../store'
import Routes from '../routes'
import uuid from 'react-native-uuid'

const AddRoom = ({ navigation, route }: { navigation: any; route: any }) => {
  const { isEditing, titleHeader, editRoomForm } = route?.params
  const { formValues, handleFormValueChange, setFormValues, validateForm, resetForm } = useForm(
    editRoomForm || DEFAULT_ROOM_FORM
  )
  const [color, setColor] = useState<string | null>(editRoomForm?.color || null)

  useEffect(() => {
    if (isEditing) return
    initial()
  }, [])

  const initial = () => {
    handleFormValueChange(TIMESTAMP_CREATION, Date.now())
    handleFormValueChange(ID, uuid.v4())
  }

  const setRoomColor = (color: string) => {
    setColor(color)
    handleFormValueChange(COLOR, color)
  }

  const resetAll = () => {
    resetForm()
    setColor(null)
    setFormValues(DEFAULT_ROOM_FORM)
    initial()
  }

  const handleSubmit = async () => {
    try {
      await validateForm(ROOM_SCHEMA)
      if (isEditing) {
        Store_editRoom(formValues)
        resetAll()
        navigation.navigate(Routes.ROOMS_OVERVIEW)
      } else {
        Store_addRoom(formValues)
        resetAll()
      }
    } catch (error: any) {
      console.log('😮 There was an error', error)
      Alert.alert(error.toString(), '', [{ text: 'OK' }])
    }
  }

  return (
    <Layout titleHeader={titleHeader || 'Create new room'} rightEmoji="✏️" backButton>
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
              {isEditing ? 'Edit Room' : 'Create Room'}
            </Text>
          </View>
        </Pressable>
      </View>
    </Layout>
  )
}

export default AddRoom
