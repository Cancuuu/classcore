import { TextInput } from 'react-native'
import { colors, lightShadow } from '../constants/theme'

type TInput = {
  onChangeText: (text: string) => void
  label: string
  value?: any
  placeholder?: string
  key?: string | number
}

export const StyledTextInput = ({ onChangeText, label, value, key }: TInput) => (
  <TextInput
    key={label}
    value={value}
    style={{
      backgroundColor: '#FFF',
      borderRadius: 24,
      padding: 18,
      fontSize: 18,
      ...lightShadow
    }}
    onChangeText={onChangeText}
    placeholder={label.charAt(0).toUpperCase() + label.slice(1)}
    placeholderTextColor={colors.darkGray}
  />
)
