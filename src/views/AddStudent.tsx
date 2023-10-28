import { Pressable, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Layout from '../layout'
import { useForm } from '../hooks/useForm'
import { ADDRESS, AGE, DEFAULT_STUDENT_FORM, EMAIL, LAST_NAME, NAME } from '../constants'
import { StyledTextInput } from '../components/StyledTextInput'
import { STUDENT_SCHEMA } from '../constants/schemas'
import { colors, lightShadow } from '../constants/theme'
import { Picker } from '@react-native-picker/picker'
import { TRoom } from '../types'
import { useStore } from '../store'

interface IAddStudentProps {
  navigation: any
  route: any
}

const AddStudent = ({ navigation, route }: IAddStudentProps) => {
  const [
    formValues,
    handleFormValueChange,
    setFormValues,
    validateForm,
    formErrors,
    setFormErrors,
    resetForm
  ] = useForm(DEFAULT_STUDENT_FORM)
  const [selectedRooms, setSelectedRooms] = useState<Array<any>>([])
  const rooms = useStore((state) => state.Store_rooms)
  const qtySelectedRooms = selectedRooms?.length

  useEffect(() => {
    if (route.params.selectedOptions) {
      setSelectedRooms(route.params.selectedOptions)
    }
  }, [route.params])

  const handleSubmit = async () => {
    const isFormValid = await validateForm(STUDENT_SCHEMA)
    if (isFormValid) {
      console.log('Its valid! 🥳')
      resetForm()
    } else {
      console.log('is not valid', formErrors)
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
            navigation.navigate('SelectionModal', {
              lastRoute: 'AddStudent',
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
