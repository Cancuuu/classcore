import { View, FlatList, Pressable } from 'react-native'
import React from 'react'
import Layout from '../layout'
import { useStore } from '../store'
import { LabelSM, Paragraph, Subtitle, TitleMD } from '../components/Text'
import { lightShadow } from '../constants/theme'
import { useNavigation } from '@react-navigation/native'
import RoomCard from '../components/RoomCard'

interface IRoomOverviewProps {
  navigation: any
}

const RoomsOverview = ({ navigation }: IRoomOverviewProps) => {
  const useRooms = useStore((state) => state.Store_rooms)

  console.log('useRooms', useRooms)

  return (
    <Layout titleHeader="Rooms overview" rightEmoji="🎓" backButton>
      <FlatList
        style={{
          paddingHorizontal: 12
        }}
        data={useRooms}
        renderItem={(room) => (
          <Pressable
            onPress={() =>
              navigation.navigate('Room', {
                room
              })
            }
          >
            <RoomCard room={room.item} />
          </Pressable>
        )}
      />
    </Layout>
  )
}

export default RoomsOverview
