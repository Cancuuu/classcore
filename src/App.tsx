import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import AddRoom from './screens/AddRoom'
import { StatusBar } from 'expo-status-bar'

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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App
