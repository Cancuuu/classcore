import { InferType } from 'yup'
import { ROOM_SCHEMA, STUDENT_SCHEMA } from '../constants/schemas'

type TRoom = InferType<typeof ROOM_SCHEMA>
type TStudent = InferType<typeof STUDENT_SCHEMA>
type TSchemes = TRoom | TStudent

export { TRoom, TStudent, TSchemes }
