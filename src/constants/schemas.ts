import * as Yup from 'yup'
import {
  ADDRESS,
  AGE,
  COLOR,
  DESCRIPTION,
  EMAIL,
  GENDER,
  ID,
  LAST_NAME,
  NAME,
  SUBJECT,
  TIMESTAMP_CREATION
} from '../constants'

const ROOM_SCHEMA = Yup.object().shape({
  [NAME]: Yup.string().required(),
  [SUBJECT]: Yup.string().required(),
  [DESCRIPTION]: Yup.string().required(),
  [COLOR]: Yup.string().required(),
  [TIMESTAMP_CREATION]: Yup.number().required()
})

const STUDENT_SCHEMA = Yup.object().shape({
  [NAME]: Yup.string().required(),
  [LAST_NAME]: Yup.string().required(),
  [AGE]: Yup.string().required(),
  [GENDER]: Yup.string()
    .oneOf(['male', 'female', 'other'] as const)
    .defined(),
  [EMAIL]: Yup.string().email(),
  [ADDRESS]: Yup.string().required(),
  [TIMESTAMP_CREATION]: Yup.number().required()
})

export { ROOM_SCHEMA, STUDENT_SCHEMA }