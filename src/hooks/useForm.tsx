import { useState } from 'react'

type TFormValue = string | number | Object
type TErrorsObject = {
  [key: string]: string
}

export const useForm = (values: Object) => {
  const [formValues, setFormValues] = useState<any>({
    ...values
  })
  const [formErrors, setFormErrors] = useState<TErrorsObject | null>(null)

  const handleFormValueChange = (key: string, value: TFormValue) => {
    setFormValues((prevFormValues: any) => ({
      ...prevFormValues,
      [key]: value
    }))
  }

  const validateForm = () => {}

  return [formValues, handleFormValueChange, setFormValues, validateForm, formErrors] as const
}
