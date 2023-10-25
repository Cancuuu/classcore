import { Pressable, View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Subtitle, Title } from '../components/Text'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../constants/theme'

export interface LayoutProps {
  children: React.ReactNode
  titleHeader?: string
  backButton: boolean
}

const Layout = ({ children, titleHeader, backButton }: LayoutProps) => {
  const { top } = useSafeAreaInsets()
  const navigator = useNavigation()

  return (
    <View style={[{ padding: 12, backgroundColor: '#F5F7F8' }, top > 0 && { paddingTop: top }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        {backButton && (
          <Pressable
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center'
            }}
            onPress={() => navigator.goBack()}
          >
            <Title text="👈" />
            <Text
              style={{
                fontSize: 12,
                color: colors.darkGray
              }}
            >
              Back
            </Text>
          </Pressable>
        )}
        {titleHeader && (
          <View style={{ marginBottom: 36, flex: 2.5 }}>
            <Subtitle text={titleHeader} />
          </View>
        )}
      </View>
      {children}
    </View>
  )
}

export default Layout

//
