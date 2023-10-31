const AS_CLASSCORE_KEY = '@classcore'

const ID = 'id'
const NAME = 'name'
const LAST_NAME = 'lastName'
const SUBJECT = 'subject'
const DESCRIPTION = 'description'
const COLOR = 'color'
const TIMESTAMP_CREATION = 'timestampCreation'
const AGE = 'age'
const EMAIL = 'email'
const ADDRESS = 'address'
const GENDER = 'gender'
const STUDENTS = 'students'

export const DEFAULT_ROOM_FORM = {
  [ID]: null,
  [NAME]: '',
  [SUBJECT]: '',
  [DESCRIPTION]: '',
  [COLOR]: '',
  [TIMESTAMP_CREATION]: null,
  [STUDENTS]: []
}

export const DEFAULT_STUDENT_FORM = {
  [ID]: '',
  [NAME]: '',
  [LAST_NAME]: '',
  [AGE]: '',
  [GENDER]: '',
  [EMAIL]: '',
  [TIMESTAMP_CREATION]: ''
}

export {
  ID,
  AS_CLASSCORE_KEY,
  NAME,
  LAST_NAME,
  SUBJECT,
  DESCRIPTION,
  COLOR,
  TIMESTAMP_CREATION,
  AGE,
  EMAIL,
  ADDRESS,
  GENDER,
  STUDENTS
}
