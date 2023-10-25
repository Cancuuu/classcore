import { useEffect, useState } from 'react'
import { TIMESTAMP_CREATION } from '../constants'
import * as Yup from 'yup'

type TFormValue = string | number | Object

export const useForm = (values: Object) => {
  const [formValues, setFormValues] = useState<any>({
    ...values
  })
  const [formErrors, setFormErrors] = useState<Object | null>(null)

  useEffect(() => {
    handleFormValueChange(TIMESTAMP_CREATION, Date.now())
  }, [])

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

  return [
    formValues,
    handleFormValueChange,
    setFormValues,
    validateForm,
    formErrors,
    setFormErrors
  ] as const
}
