import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { TRoom, TStudent } from '../types'
import { ASYNC_STORAGE_CONFIG } from './config'

interface IInitialGlobalState {
  Store_rooms: Map<string, TRoom>
  Store_students: Map<string, TStudent>
}

const INITIAL_GLOBAL_STATE: IInitialGlobalState = {
  Store_rooms: new Map(),
  Store_students: new Map()
}

export const useStore = create(persist(() => INITIAL_GLOBAL_STATE, ASYNC_STORAGE_CONFIG))

export const Store_addRoom = (newRoom: TRoom) =>
  useStore.setState((state: IInitialGlobalState) => ({
    Store_rooms: new Map(state.Store_rooms).set(newRoom.id, newRoom),
    Store_students: state.Store_students
  }))

export const Store_addStudentToRoom = (student: TStudent, roomIds: string[]) =>
  useStore.setState((state: IInitialGlobalState) => {
    const updatedRooms = new Map(state.Store_rooms)
    for (const roomId of roomIds) {
      if (updatedRooms.has(roomId)) {
        updatedRooms.get(roomId).students.push(student)
      }
    }

    return {
      Store_rooms: updatedRooms,
      Store_students: new Map(state.Store_students).set(student.id, student)
    }
  })

export const Store_editRoom = (roomToUpdate: TRoom) =>
  useStore.setState((state: IInitialGlobalState) => ({
    Store_rooms: new Map(state.Store_rooms).set(roomToUpdate.id, roomToUpdate),
    Store_students: state.Store_students
  }))

export const Store_deleteRoom = (roomId: string) =>
  useStore.setState((state: IInitialGlobalState) => {
    const updatedRooms = new Map(state.Store_rooms)
    updatedRooms.delete(roomId)
    return {
      Store_rooms: updatedRooms,
      Store_students: state.Store_students
    }
  })

// export const Store_deleteStudent = (studentId: string) =>
//   useStore.setState((state: IInitialGlobalState) => ({
//     Store_rooms: state.Store_rooms,
//     Store_students: new Map(state.Store_students).delete(studentId)
//   }))

export const resetStateAndStorage = () => useStore.setState(INITIAL_GLOBAL_STATE)
