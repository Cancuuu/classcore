import { View, Text } from 'react-native'
import React from 'react'
import { TRoom } from '../types'
import { lightShadow } from '../constants/theme'
import { Paragraph, TitleMD } from './Text'

const RoomCard = ({ room }: { room: TRoom }) => (
  <View
    key={room.timestampCreation}
    style={{
      backgroundColor: room.color,
      padding: 12,
      borderRadius: 12,
      height: 150,
      marginBottom: 18,
      ...lightShadow
    }}
  >
    <View style={{ flexDirection: 'row' }}>
      <TitleMD text={room.name + ' - ' + room.subject} />
    </View>
    <View style={{ marginTop: 12 }}>
      <Paragraph text={room.description} />
    </View>
  </View>
)

export default RoomCard
