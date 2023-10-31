import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { AS_CLASSCORE_KEY } from '../constants'
import { TRoom, TStudent } from '../types'

interface IInitialGlobaState {
  Store_rooms: Array<TRoom>
  Store_students: Array<TStudent>
}

const ASYNC_STORAGE_CONFIG = {
  name: AS_CLASSCORE_KEY,
  getStorage: () => AsyncStorage
}

const INITIAL_GLOBAL_STATE: IInitialGlobaState = {
  Store_rooms: [],
  Store_students: []
}

export const useStore = create(persist(() => INITIAL_GLOBAL_STATE, ASYNC_STORAGE_CONFIG))

export const Store_addRoom = (newRoom: TRoom) =>
  useStore.setState((state: IInitialGlobaState) => ({
    Store_rooms: [...state.Store_rooms, newRoom]
  }))

export const Store_addStudent = (newStudent: TStudent) =>
  useStore.setState((state: IInitialGlobaState) => ({
    Store_students: [...state.Store_students, newStudent]
  }))

export const Store_addStudentToRoom = (student: TStudent, roomIds: string[]) =>
  useStore.setState((state: IInitialGlobaState) => {
    const updatedRooms = state.Store_rooms.map((room) => {
      if (roomIds.includes(room.id)) {
        return {
          ...room,
          students: [...room.students, student]
        }
      }
      return room
    })

    return {
      Store_rooms: updatedRooms,
      Store_students: [...state.Store_students, student]
    }
  })

export const Store_editRoom = (roomToUpdate: TRoom) =>
  useStore.setState((state: IInitialGlobaState) => {
    const updatedRooms = state.Store_rooms.map((room) => {
      if (room.id === roomToUpdate.id) {
        return roomToUpdate
      }
      return room
    })

    return {
      Store_rooms: updatedRooms,
      Store_students: state.Store_students
    }
  })

export const Store_deleteRoom = (roomId: string) =>
  useStore.setState((state: IInitialGlobaState) => {
    const updatedRooms = state.Store_rooms.filter((room) => room.id !== roomId)

    return {
      Store_rooms: updatedRooms,
      Store_students: state.Store_students
    }
  })

// export const Store_deleteStudent = (studentId: string) =>
//   useStore.setState((state: IInitialGlobaState) => {
//     const updateStudents = state.Store_students.filter((student) => student.id !== studentId)

//     return {
//       Store_rooms: state.Store_rooms,
//       Store_students: updateStudents
//     }
//   })

export const resetStateAndStorage = () => useStore.setState(INITIAL_GLOBAL_STATE)
