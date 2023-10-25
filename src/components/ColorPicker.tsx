import { View, Pressable, Text } from 'react-native'
import { colors, lightShadow } from '../constants/theme'

const COLORS_FOR_PICK = [colors.green, colors.pink, colors.orange, colors.turquoise]

export const ColorPicker = ({
  setColor,
  colorSelected
}: {
  setColor: Function
  colorSelected: string | null
}) => {
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          marginBottom: 12,
          fontSize: 18
        }}
      >
        Select a color
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#FFF',
          borderRadius: 100,
          padding: 8,
          ...lightShadow
        }}
      >
        {COLORS_FOR_PICK.map((color) => (
          <Pressable key={color} onPress={() => setColor(color)}>
            <View
              style={{
                backgroundColor: color,
                borderWidth: colorSelected === color ? 2 : 0,
                borderColor: colors.darkGray,
                borderRadius: 100,
                width: 60,
                height: 60
              }}
            />
          </Pressable>
        ))}
      </View>
    </View>
  )
}
