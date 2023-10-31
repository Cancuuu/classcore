import AsyncStorage from '@react-native-async-storage/async-storage'
import { AS_CLASSCORE_KEY } from '../constants'

const asyncStorageConfig = {
  getItem: async (name: any) => {
    const str = await AsyncStorage.getItem(name)
    if (!str) return null
    const { state } = JSON.parse(str)
    return {
      state: {
        ...state,
        Store_rooms: new Map(state.Store_rooms),
        Store_students: new Map(state.Store_students)
      }
    }
  },
  setItem: (name: any, newValue: any) => {
    const str = JSON.stringify({
      state: {
        ...newValue.state,
        Store_rooms: Array.from(newValue.state.Store_rooms.entries()),
        Store_students: Array.from(newValue.state.Store_students.entries())
      }
    })
    AsyncStorage.setItem(name, str)
  },
  removeItem: (name: any) => AsyncStorage.removeItem(name)
}

export const ASYNC_STORAGE_CONFIG = {
  name: AS_CLASSCORE_KEY,
  storage: asyncStorageConfig
}
