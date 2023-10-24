import { View, Pressable } from 'react-native'
import { colors } from '../constants/theme'

const COLORS_FOR_PICK = [colors.green, colors.pink, colors.orange, colors.turquoise]

export const ColorPicker = ({
  setColor,
  colorSelected
}: {
  setColor: Function
  colorSelected: string | null
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24
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
              width: 70,
              height: 70
            }}
          />
        </Pressable>
      ))}
    </View>
  )
}
