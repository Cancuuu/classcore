import { useState } from 'react'
import * as Yup from 'yup'

type TFormValue = string | number | Object

export const useForm = (values: Object) => {
  const [formValues, setFormValues] = useState<any>({
    ...values
  })
  const [formErrors, setFormErrors] = useState<Object | null>(null)

  const handleFormValueChange = (key: string, value: TFormValue) => {
    setFormValues((prevFormValues: any) => ({
      ...prevFormValues,
      [key]: value
    }))
  }

  const validateForm = async (schema: Yup.ObjectSchema<any>) => {
    try {
      await schema.validate(formValues)
    } catch (error) {
      throw error
    }
  }

  const resetForm = () => {
    setFormValues({
      ...values
    })
  }

  return {
    formValues,
    handleFormValueChange,
    setFormValues,
    validateForm,
    formErrors,
    setFormErrors,
    resetForm
  } as const
}
