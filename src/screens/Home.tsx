import { Pressable, View, Text } from 'react-native'
import React from 'react'
import Layout from '../layout'
import { Subtitle, Title } from '../components/Text'
import { Link } from '@react-navigation/native'
import { MainButton } from '../components/MainButton'
import { colors } from '../constants/theme'
import { reset } from '../store'

const Header = () => (
  <View
    style={{
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center'
    }}
  >
    <Subtitle text="Home" />
    <Subtitle text="user" />
  </View>
)

const Home = () => {
  return (
    <Layout backButton={false}>
      <View style={{ marginTop: 12 }}>
        <Title text={`Welcome to ClassCore`} />
        <View style={{ marginTop: 48, gap: 12 }}>
          <Link to={'/AddRoom'}>
            <MainButton title="Add Room" color={colors.pink} />
          </Link>
          <Link to={'/RoomsOverview'}>
            <MainButton title="Rooms" color={colors.green} />
          </Link>
        </View>
        <View style={{ marginTop: 48, gap: 12 }}>
          <MainButton title="Add Student" color={colors.orange} />
          <MainButton title="Watch Rooms" color={colors.turquoise} />
        </View>

        <Pressable onPress={() => reset()}>
          <View>
            <Text>DELETE STATE</Text>
          </View>
        </Pressable>
      </View>
    </Layout>
  )
}

export default Home
