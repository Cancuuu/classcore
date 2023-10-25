import * as Yup from 'yup'
import { COLOR, DESCRIPTION, ID, NAME, SUBJECT, TIMESTAMP_CREATION } from '../constants'

const roomSchema = Yup.object().shape({
  [ID]: Yup.number().required().positive().integer(),
  [NAME]: Yup.string().required(),
  [SUBJECT]: Yup.string().required(),
  [DESCRIPTION]: Yup.string().required(),
  [COLOR]: Yup.string().required(),
  [TIMESTAMP_CREATION]: Yup.number().required()
})

export { roomSchema }
