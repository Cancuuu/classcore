import { View, Pressable, FlatList } from 'react-native'
import React from 'react'
import Layout from '../layout'
import { Label, LabelSM, Paragraph, Subtitle } from '../components/Text'
import RoomCard from '../components/RoomCard'
import { lightShadow } from '../constants/theme'
import { useNavigation } from '@react-navigation/native'
import { AGE, LAST_NAME, NAME, TIMESTAMP_CREATION } from '../constants'
import { TRoom } from '../types'
import EmptyList from '../components/EmptyList'
import Routes from '../routes'

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

const Header = ({ room }: { room: TRoom }) => (
  <>
    <RoomCard room={room} />
    <RoomsButtons />
    <View style={{ marginTop: 24, marginBottom: 12 }}>
      <Subtitle text="Students" />
    </View>
  </>
)

const StudentCard = ({ student }: any) => (
  <View
    style={{
      backgroundColor: '#FFF',
      padding: 12,
      width: '100%',
      borderRadius: 12,
      marginBottom: 12,
      gap: 8,
      ...lightShadow
    }}
  >
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
      <LabelSM
        text={`created: ${new Date(student[TIMESTAMP_CREATION]).toLocaleDateString('es-AR')}`}
      />
    </View>
    <View style={{ flexDirection: 'row' }}>
      <Label text={`📧 ${student.email} `} />
    </View>
  </View>
)

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
      <Pressable onPress={() => navigator.navigate(Routes.ADD_ROOM)}>
        <View style={{ alignItems: 'center', gap: 4 }}>
          <Paragraph text="👌" />
          <Label text="New Room" />
        </View>
      </Pressable>
    </View>
  )
}

export default Room
