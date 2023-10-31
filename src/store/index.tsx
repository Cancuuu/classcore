import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { AS_CLASSCORE_KEY } from '../constants'
import { TRoom, TStudent } from '../types'
import AsyncStorage from '@react-native-async-storage/async-storage'

// Define the initial global state
interface IInitialGlobalState {
  Store_rooms: Map<string, TRoom>
  Store_students: Map<string, TStudent>
}

const INITIAL_GLOBAL_STATE: IInitialGlobalState = {
  Store_rooms: new Map(),
  Store_students: new Map()
}

// Define a custom storage mechanism using AsyncStorage
const localStorageStorage = {
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

// Configure Zustand to use the custom AsyncStorage storage
const ASYNC_STORAGE_CONFIG = {
  name: AS_CLASSCORE_KEY,
  storage: localStorageStorage
}

// Create the Zustand store and persist the state
export const useStore = create(persist(() => INITIAL_GLOBAL_STATE, ASYNC_STORAGE_CONFIG))

// Define a function to add a new room to the store
export const Store_addRoom = (newRoom: TRoom) => {
  useStore.setState((state: IInitialGlobalState) => ({
    Store_rooms: new Map(state.Store_rooms).set(newRoom.id, newRoom),
    Store_students: state.Store_students
  }))
}

// export const Store_addStudent = (newStudent: TStudent) =>
//   useStore.setState((state: IInitialGlobaState) => ({
//     Store_students: [...state.Store_students, newStudent]
//   }))

// export const Store_addStudentToRoom = (student: TStudent, roomIds: string[]) =>
//   useStore.setState((state: IInitialGlobaState) => {
//     const updatedRooms = state.Store_rooms.map((room) => {
//       if (roomIds.includes(room.id)) {
//         return {
//           ...room,
//           students: [...room.students, student]
//         }
//       }
//       return room
//     })

//     return {
//       Store_rooms: updatedRooms,
//       Store_students: [...state.Store_students, student]
//     }
//   })

// export const Store_editRoom = (roomToUpdate: TRoom) =>
//   useStore.setState((state: IInitialGlobaState) => {
//     const updatedRooms = state.Store_rooms.map((room) => {
//       if (room.id === roomToUpdate.id) {
//         return roomToUpdate
//       }
//       return room
//     })

//     return {
//       Store_rooms: updatedRooms,
//       Store_students: state.Store_students
//     }
//   })

// export const Store_deleteRoom = (roomId: string) =>
//   useStore.setState((state: IInitialGlobaState) => {
//     const updatedRooms = state.Store_rooms.filter((room) => room.id !== roomId)

//     return {
//       Store_rooms: updatedRooms,
//       Store_students: state.Store_students
//     }
//   })

// // export const Store_deleteStudent = (studentId: string) =>
// //   useStore.setState((state: IInitialGlobaState) => {
// //     const updateStudents = state.Store_students.filter((student) => student.id !== studentId)

// //     return {
// //       Store_rooms: state.Store_rooms,
// //       Store_students: updateStudents
// //     }
// //   })

// export const resetStateAndStorage = () => useStore.setState(INITIAL_GLOBAL_STATE)
