import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Subtitle } from '../components/Text'

export interface LayoutProps {
  children: React.ReactNode
  titleHeader?: string
}

const Layout = ({ children, titleHeader }: LayoutProps) => {
  const { top } = useSafeAreaInsets()

  return (
    <View
      style={[{ flex: 1, padding: 12, backgroundColor: '#F5F7F8' }, top > 0 && { marginTop: top }]}
    >
      {titleHeader && (
        <View style={{ alignItems: 'center', marginBottom: 36 }}>
          <Subtitle text={titleHeader} />
        </View>
      )}
      {children}
    </View>
  )
}

export default Layout
