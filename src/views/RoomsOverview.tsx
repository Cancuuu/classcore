import { FlatList, Pressable } from 'react-native'
import React from 'react'
import Layout from '../layout'
import { useStore } from '../store'
import RoomCard from '../components/RoomCard'
import EmptyList from '../components/EmptyList'
import Routes from '../routes'

interface IRoomOverviewProps {
  navigation: any
}

const RoomsOverview = ({ navigation }: IRoomOverviewProps) => {
  const useRooms = useStore((state) => state.Store_rooms)

  return (
    <Layout titleHeader="Rooms overview" rightEmoji="🎓" backButton>
      <FlatList
        style={{
          paddingHorizontal: 12
        }}
        data={useRooms}
        ListEmptyComponent={<EmptyList listName="rooms" />}
        renderItem={(room) => (
          <Pressable
            onPress={() =>
              navigation.navigate(Routes.ROOM, {
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
