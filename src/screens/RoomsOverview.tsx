import { View, FlatList } from 'react-native'
import React from 'react'
import Layout from '../layout'
import { useStore } from '../store'
import { Label, Subtitle, Title, TitleMD, TitleSM } from '../components/Text'

const RoomsOverview = () => {
  const useRooms = useStore((state) => state.Store_rooms)

  return (
    <Layout titleHeader="Rooms overview" backButton>
      <FlatList
        data={useRooms}
        renderItem={(room) => (
          <View
            key={room.item.timestampCreation}
            style={{
              backgroundColor: room.item.color,
              padding: 12,
              borderRadius: 12,
              height: 150,
              marginTop: 18
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <TitleMD text={room.item.name + ' - ' + room.item.subject} />
            </View>
            <View style={{ marginTop: 24 }}>
              <Subtitle text={room.item.description} />
            </View>
          </View>
        )}
      />
    </Layout>
  )
}

export default RoomsOverview
