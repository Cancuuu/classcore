import { useState } from 'react'

type FormValue = string | number | Object

export const useForm = (values: Object) => {
  const [formValues, setFormValues] = useState<any>({
    ...values
  })

  const handleFormValueChange = (key: string, value: FormValue) => {
    setFormValues({
      ...formValues,
      [key]: value
    })
  }

  return [formValues, handleFormValueChange, setFormValues] as const
}
