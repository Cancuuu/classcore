import { Pressable, View, Text } from 'react-native'
import React from 'react'
import Layout from '../layout'
import { Subtitle, Title } from '../components/Text'
import { Link } from '@react-navigation/native'
import { MainButton } from '../components/MainButton'
import { colors } from '../constants/theme'
import { reset } from '../store'

const Home = () => (
  <Layout backButton={false} rightEmoji={''}>
    <View style={{ marginTop: 12 }}>
      <Title text={`Welcome to ClassCore`} />
      <View style={{ marginTop: 48, gap: 12 }}>
        <Link to={'/AddRoom'}>
          <MainButton title="Add Room" color={colors.pink} />
        </Link>
        <Link to={'/RoomsOverview'}>
          <MainButton title="Rooms" color={colors.green} />
        </Link>
        <Link to={'/AddStudent'}>
          <MainButton title="Add Student" color={colors.orange} />
        </Link>
      </View>
    </View>
    <Pressable onPress={() => reset()}>
      <View style={{ marginTop: 24 }}>
        <Text>DELETE STATE</Text>
      </View>
    </Pressable>
  </Layout>
)

export default Home
