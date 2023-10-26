import { TextInput, View, Text } from 'react-native'
import { colors, lightShadow } from '../constants/theme'

type TInput = {
  onChangeText: (text: string) => void
  label: string
  value?: any
  placeholder?: string
  key?: string | number
  errorMessage?: string
}

export const StyledTextInput = ({ onChangeText, label, value, key, errorMessage }: TInput) => (
  <View>
    <TextInput
      autoCorrect={false}
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
    {errorMessage && (
      <View
        style={{
          marginLeft: 12,
          marginTop: 8
        }}
      >
        <Text
          style={{
            color: 'red',
            fontSize: 18
          }}
        >
          {errorMessage}
        </Text>
      </View>
    )}
  </View>
)
