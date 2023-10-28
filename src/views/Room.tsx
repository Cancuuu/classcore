import { View, Text, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import Layout from '../layout'
import { Label, LabelSM, Paragraph, Subtitle, Title } from '../components/Text'
import RoomCard from '../components/RoomCard'
import { lightShadow } from '../constants/theme'
import { useNavigation } from '@react-navigation/native'

interface IRoomProps {
  navigation: any
  route: any
}

const Room = ({ navigation, route }: IRoomProps) => {
  const room = route.params.room.item

  console.log('The room', room)

  return (
    <Layout backButton titleHeader="Room" rightEmoji={'🍎'}>
      <FlatList
        style={{
          paddingHorizontal: 8
        }}
        ListHeaderComponent={
          <>
            <RoomCard room={room} />
            <RoomsButtons />
            <View style={{ marginTop: 24 }}>
              <Subtitle text="Students" />
            </View>
          </>
        }
        data={room.participants}
        renderItem={() => (
          <View>
            <Label text="Edit Room" />
          </View>
        )}
      />
    </Layout>
  )
}

const RoomsButtons = () => {
  const navigator = useNavigation()
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        padding: 12,
        borderRadius: 12,
        ...lightShadow
      }}
    >
      <Pressable>
        <View style={{ alignItems: 'center', gap: 4 }}>
          <Paragraph text="✏️" />
          <Label text="Edit Room" />
        </View>
      </Pressable>
      <Pressable>
        <View style={{ alignItems: 'center', gap: 4 }}>
          <Paragraph text="❌" />
          <Label text="Delete Room" />
        </View>
      </Pressable>
      <Pressable onPress={() => navigator.navigate('AddRoom')}>
        <View style={{ alignItems: 'center', gap: 4 }}>
          <Paragraph text="👌" />
          <Label text="New Room" />
        </View>
      </Pressable>
    </View>
  )
}

export default Room
