import { Text } from 'react-native'
import { colors } from '../constants/theme'

type TCustomText = { text: string; color?: string }

const Title = ({ text, color }: TCustomText) => (
  <Text
    style={{
      fontSize: 36,
      color: color || colors.darkGray
    }}
  >
    {text}
  </Text>
)

const TitleMD = ({ text, color }: TCustomText) => (
  <Text
    style={{
      fontSize: 32,
      color: color || colors.darkGray
    }}
  >
    {text}
  </Text>
)

const TitleSM = ({ text, color }: TCustomText) => (
  <Text
    style={{
      fontSize: 28,
      color: color || colors.darkGray
    }}
  >
    {text}
  </Text>
)

const Subtitle = ({ text, color }: TCustomText) => (
  <Text
    style={{
      fontSize: 22,
      color: color || colors.darkGray
    }}
  >
    {text}
  </Text>
)

const Paragraph = ({ text, color }: TCustomText) => (
  <Text
    style={{
      fontSize: 16,
      color: color || colors.darkGray
    }}
  >
    {text}
  </Text>
)

const Label = ({ text, color }: TCustomText) => (
  <Text
    style={{
      fontSize: 18,
      color: color || colors.darkGray
    }}
  >
    {text}
  </Text>
)

const LabelSM = ({ text, color }: TCustomText) => (
  <Text
    style={{
      fontSize: 12,
      color: color || colors.darkGray
    }}
  >
    {text}
  </Text>
)

export { Title, TitleMD, TitleSM, Subtitle, Paragraph, Label, LabelSM }
