import { Pressable, View } from 'react-native'
import React from 'react'
import { Label, LabelSM, Paragraph, Subtitle } from '../components/Text'
import { lightShadow } from '../constants/theme'
import { AGE, LAST_NAME, NAME, TIMESTAMP_CREATION } from '../constants'

const StudentCard = ({ student }: any) => {
  const studentCreatedAt = new Date(student[TIMESTAMP_CREATION]).toLocaleDateString('es-AR')

  return (
    <View
      style={{
        backgroundColor: '#FFF',
        padding: 8,
        width: '100%',
        borderRadius: 12,
        marginBottom: 12,
        gap: 8,
        ...lightShadow
      }}
    >
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Subtitle text={`${student[NAME]} ${student[LAST_NAME]}`} />
            <Subtitle text=" ~ " />
            <Subtitle text={`${student[AGE]} y/o`} />
          </View>
          <LabelSM text={`created: ${studentCreatedAt}`} />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 12 }}>
          <Label text={`📧 ${student.email.toLowerCase()}`} />
        </View>
      </View>
    </View>
  )
}

export default StudentCard
