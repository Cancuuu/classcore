import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { AS_CLASSCORE_KEY } from '../constants'

const ASYNC_STORAGE_CONFIG = {
  name: AS_CLASSCORE_KEY,
  getStorage: () => AsyncStorage // Add this here!
}

const INITIAL_GLOBAL_STATE = {
  Store_rooms: [],
  Store_students: []
}

export const useStore = create(persist(() => INITIAL_GLOBAL_STATE, ASYNC_STORAGE_CONFIG))
