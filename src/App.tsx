import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import Home from './views/Home'
import AddRoom from './views/AddRoom'
import RoomsOverview from './views/RoomsOverview'
import AddStudent from './views/AddStudent'
import Room from './views/Room'
import Routes from './routes'
import SelectionModal from './views/SelectionModal'

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
          initialRouteName={Routes.HOME}
        >
          <Stack.Screen name={Routes.HOME} component={Home} />
          <Stack.Screen name={Routes.ADD_ROOM} component={AddRoom} />
          <Stack.Screen name={Routes.ROOMS_OVERVIEW} component={RoomsOverview} />
          <Stack.Screen name={Routes.ADD_STUDENT} component={AddStudent} />
          <Stack.Screen name={Routes.ROOM} component={Room} />
          <Stack.Screen
            name={Routes.SELECTION_MODAL}
            component={SelectionModal}
            options={{
              presentation: 'modal'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App
