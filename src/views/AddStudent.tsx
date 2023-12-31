import { Pressable, View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Layout from '../layout'
import { useForm } from '../hooks/useForm'
import {
  AGE,
  DEFAULT_STUDENT_FORM,
  EMAIL,
  ID,
  LAST_NAME,
  NAME,
  TIMESTAMP_CREATION
} from '../constants'
import { StyledTextInput } from '../components/StyledTextInput'
import { STUDENT_SCHEMA } from '../constants/schemas'
import { colors, lightShadow } from '../constants/theme'
import { Store_addStudentToRoom, useStore } from '../store'
import Routes from '../routes'
import uuid from 'react-native-uuid'

// @todo add picker for gender field

interface IAddStudentProps {
  navigation: any
  route: any
}

const AddStudent = ({ navigation, route }: IAddStudentProps) => {
  const { formValues, handleFormValueChange, validateForm, resetForm } =
    useForm(DEFAULT_STUDENT_FORM)
  const [selectedRooms, setSelectedRooms] = useState<Array<any>>([])
  const rooms = Array.from(useStore((state) => state.Store_rooms))
  const qtySelectedRooms = selectedRooms?.length

  useEffect(() => {
    if (route.params?.selectedOptions) {
      setSelectedRooms(route.params.selectedOptions)
    }
  }, [route.params?.selectedOptions])

  useEffect(() => {
    initial()
  }, [])

  const initial = () => {
    handleFormValueChange(TIMESTAMP_CREATION, Date.now())
    handleFormValueChange(ID, uuid.v4())
  }

  const handleSubmit = async () => {
    const roomsIds = selectedRooms.map((room) => room.id)
    if (roomsIds.length === 0) {
      Alert.alert('Select Rooms', '', [{ text: 'OK' }])
      return
    }

    try {
      await validateForm(STUDENT_SCHEMA)
      Store_addStudentToRoom(formValues, roomsIds)
      setSelectedRooms([])
      resetForm()
      initial()
    } catch (error: any) {
      console.log('😮 There was an error', error)
      Alert.alert(error.toString(), '', [{ text: 'OK' }])
    }
  }

  return (
    <Layout titleHeader="Add Student" rightEmoji="🎒" backButton>
      <View style={{ gap: 28 }}>
        <StyledTextInput
          value={formValues[NAME]}
          label={NAME}
          onChangeText={(text) => handleFormValueChange(NAME, text)}
        />
        <StyledTextInput
          value={formValues[LAST_NAME]}
          label={'Last name'}
          onChangeText={(text) => handleFormValueChange(LAST_NAME, text)}
        />
        <StyledTextInput
          value={formValues[AGE]}
          label={AGE}
          onChangeText={(text) => handleFormValueChange(AGE, text)}
          keyboardType="numeric"
        />
        <StyledTextInput
          value={formValues[EMAIL]}
          label={EMAIL}
          onChangeText={(text) => handleFormValueChange(EMAIL, text)}
          keyboardType="email-address"
        />
        <Pressable
          onPress={() =>
            navigation.navigate(Routes.SELECTION_MODAL, {
              lastRoute: Routes.ADD_STUDENT,
              options: rooms,
              prevSelectedOptions: selectedRooms
            })
          }
        >
          <View
            style={{
              backgroundColor: '#FFF',
              borderRadius: 24,
              padding: 18,
              ...lightShadow
            }}
          >
            {qtySelectedRooms === 0 ? (
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  textAlign: 'center'
                }}
              >
                Select Rooms
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  textAlign: 'center'
                }}
              >
                {qtySelectedRooms} Rooms selected
              </Text>
            )}
          </View>
        </Pressable>
        <Pressable onPress={() => handleSubmit()}>
          <View
            style={{
              backgroundColor: colors.darkGray,
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
              Create Student
            </Text>
          </View>
        </Pressable>
      </View>
    </Layout>
  )
}

export default AddStudent
