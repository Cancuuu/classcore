import { View } from 'react-native'
import React from 'react'
import Layout from '../layout'
import { Subtitle, Title } from '../components/Text'
import { Link } from '@react-navigation/native'
import { MainButton } from '../components/MainButton'
import { colors } from '../constants/theme'

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
    <Layout>
      <Header />
      <View style={{ marginTop: 24 }}>
        <Title text={`Welcome to ClassCore`} />
        <View style={{ marginTop: 48, gap: 12 }}>
          <Link to={'/AddRoom'}>
            <MainButton title="Add Room" color={colors.pink} />
          </Link>
          <MainButton title="Watch Rooms" color={colors.green} />
        </View>
        <View style={{ marginTop: 48, gap: 12 }}>
          <MainButton title="Add Student" color={colors.orange} />
          <MainButton title="Watch Rooms" color={colors.turquoise} />
        </View>
      </View>
    </Layout>
  )
}

export default Home
