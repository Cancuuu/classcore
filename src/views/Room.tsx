import { View, Pressable, FlatList, Alert } from 'react-native'
import React from 'react'
import Layout from '../layout'
import { Label, Paragraph, Subtitle } from '../components/Text'
import RoomCard from '../components/RoomCard'
import { lightShadow } from '../constants/theme'
import { useNavigation } from '@react-navigation/native'
import { TRoom } from '../types'
import EmptyList from '../components/EmptyList'
import Routes from '../routes'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import StudentCard from '../components/StudentsCard'
import { Store_deleteRoom } from '../store'

interface IRoomProps {
  navigation: any
  route: any
}

const Room = ({ route }: IRoomProps) => {
  const room = route.params.room.item

  return (
    <Layout backButton titleHeader="Room" rightEmoji={'🍎'}>
      <FlatList
        style={{
          paddingHorizontal: 8
        }}
        ListHeaderComponent={<Header room={room} />}
        ListEmptyComponent={<EmptyList listName="students" />}
        data={room.students}
        renderItem={(item) => <StudentCard student={item.item} />}
      />
    </Layout>
  )
}

const Header = ({ room }: { room: TRoom }) => {
  const navigator = useNavigation<NativeStackNavigationProp<any>>()

  const deleteRoom = () => {
    Store_deleteRoom(room.id)
    navigator.goBack()
  }

  return (
    <>
      <RoomCard room={room} />
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
        <Pressable
          style={{ alignItems: 'center', gap: 4 }}
          onPress={() =>
            navigator.navigate(Routes.ADD_ROOM, {
              isEditing: true,
              titleHeader: 'Edit Room',
              editRoomForm: room
            })
          }
        >
          <Paragraph text="✏️" />
          <Label text="Edit Room" />
        </Pressable>
        <Pressable
          style={{ alignItems: 'center', gap: 4 }}
          onPress={() =>
            Alert.alert('Are you sure?', '🚨 This action is irreversible', [
              { text: 'OK', onPress: () => deleteRoom() },
              {
                text: 'Cancel',
                style: 'cancel'
              }
            ])
          }
        >
          <Paragraph text="❌" />
          <Label text="Delete Room" />
        </Pressable>
        <Pressable
          style={{ alignItems: 'center', gap: 4 }}
          onPress={() =>
            navigator.navigate(Routes.ADD_ROOM, {
              isEditing: false,
              titleHeader: null,
              editRoomForm: null
            })
          }
        >
          <Paragraph text="👌" />
          <Label text="New Room" />
        </Pressable>
      </View>
      <View style={{ marginTop: 24, marginBottom: 12 }}>
        <Subtitle text="Students" />
      </View>
    </>
  )
}

export default Room
