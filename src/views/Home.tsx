import { View, Pressable } from 'react-native'
import React from 'react'
import Layout from '../layout'
import { Subtitle, Title, TitleSM } from '../components/Text'
import { colors, lightShadow } from '../constants/theme'
import { resetStateAndStorage } from '../store'
import Routes from '../routes'

const Home = ({ navigation }: any) => (
  <Layout backButton={false}>
    <View style={{ marginTop: 12 }}>
      <Title text={`Welcome to ClassCore`} />
      <View style={{ marginTop: 48, gap: 12 }}>
        <MainButton
          title="Add Room"
          color={colors.pink}
          onPress={() => navigation.navigate(Routes.ADD_ROOM)}
        />
        <MainButton
          title="Rooms"
          color={colors.green}
          onPress={() => navigation.navigate(Routes.ROOMS_OVERVIEW)}
        />

        <MainButton
          title="Add Student"
          color={colors.orange}
          onPress={() => navigation.navigate(Routes.ADD_STUDENT)}
        />
      </View>

      <View style={{ marginTop: 48, gap: 12 }}>
        <View>
          <Subtitle text="🚨 Below actions are irreversible" />
        </View>
        <MainButton title="REMOVE ALL" color={colors.pink} onPress={() => resetStateAndStorage()} />
      </View>
    </View>
  </Layout>
)

const MainButton = ({
  title,
  color,
  onPress
}: {
  title: string
  color?: string
  onPress?: () => void
}) => (
  <Pressable
    onPress={onPress}
    style={[
      {
        backgroundColor: color || colors.darkGreen,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12
      },
      lightShadow
    ]}
  >
    <TitleSM text={title} color={colors.white} />
  </Pressable>
)

export default Home
