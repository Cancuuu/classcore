import { TextInput, View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import Layout from '../layout'
import { Label } from '../components/Text'
import { colors, lightShadow } from '../constants/theme'
import { useForm } from '../hooks/useForm'
import { ColorPicker } from '../components/ColorPicker'
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'

const DEFAULT_ROOM_FORM = {
  id: '',
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
  }

  return (
    <Layout titleHeader="Create new room">
      <View style={{ gap: 28, paddingHorizontal: 8 }}>
        <View>
          <Label text="Select room color" />
          <ColorPicker setColor={setRoomColor} colorSelected={color} />
        </View>
        <Input label={'name'} onChange={handleFormValueChange} />
        <Input label={'subject'} onChange={handleFormValueChange} />
        <Input label={'description'} onChange={handleFormValueChange} />
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

type TInput = {
  onChange: any
  label: string
  placeholder?: string
}

const Input = ({ onChange, label }: TInput) => (
  <View key={label}>
    <TextInput
      style={{
        backgroundColor: '#FFF',
        borderRadius: 24,
        padding: 18,
        fontSize: 18,
        ...lightShadow
      }}
      onChangeText={(text) => onChange(label, text)}
      placeholder={label.charAt(0).toUpperCase() + label.slice(1)}
      placeholderTextColor={colors.darkGray}
    />
  </View>
)

export default AddRoom
