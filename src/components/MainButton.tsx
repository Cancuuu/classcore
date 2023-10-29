import { View } from 'react-native'
import { Paragraph } from '../components/Text'
import { colors, lightShadow } from '../constants/theme'

export const MainButton = ({ title, color }: { title: string; color?: string }) => (
  <View
    style={[
      {
        backgroundColor: color || colors.darkGreen,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12
      },
      lightShadow
    ]}
  >
    <Paragraph text={title} color={colors.white} />
  </View>
)
