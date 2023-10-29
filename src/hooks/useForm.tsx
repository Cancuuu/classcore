import { useEffect, useState } from 'react'
import { TIMESTAMP_CREATION, ID } from '../constants'
import * as Yup from 'yup'
import uuid from 'react-native-uuid'

type TFormValue = string | number | Object

export const useForm = (values: Object) => {
  const [formValues, setFormValues] = useState<any>({
    ...values
  })
  const [formErrors, setFormErrors] = useState<Object | null>(null)

  useEffect(() => {
    initial()
  }, [])

  const initial = () => {
    handleFormValueChange(TIMESTAMP_CREATION, Date.now())
    handleFormValueChange(ID, uuid.v4())
  }

  const handleFormValueChange = (key: string, value: TFormValue) => {
    setFormValues((prevFormValues: any) => ({
      ...prevFormValues,
      [key]: value
    }))
  }

  const validateForm = async (schema: Yup.ObjectSchema<any>) => {
    try {
      await schema.validate(formValues)
      return true
    } catch (error) {
      if (error) {
        setFormErrors(error)
        return false
      }
    }
  }

  const resetForm = () => {
    setFormValues({
      ...values
    })
    initial()
  }

  return [
    formValues,
    handleFormValueChange,
    setFormValues,
    validateForm,
    formErrors,
    setFormErrors,
    resetForm
  ] as const
}
