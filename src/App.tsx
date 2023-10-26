import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import Home from './views/Home'
import AddRoom from './views/AddRoom'
import RoomsOverview from './views/RoomsOverview'
import AddStudent from './views/AddStudent'
import Room from './views/Room'

const Stack = createNativeStackNavigator()

function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddRoom" component={AddRoom} />
          <Stack.Screen name="RoomsOverview" component={RoomsOverview} />
          <Stack.Screen name="AddStudent" component={AddStudent} />
          <Stack.Screen name="Room" component={Room} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App
