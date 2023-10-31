import { Pressable, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Subtitle } from '../components/Text'
import { useNavigation } from '@react-navigation/native'
import { lightShadow } from '../constants/theme'

export interface LayoutProps {
  children: React.ReactNode
  titleHeader?: string
  backButton: boolean
  rightEmoji?: string
}

const Layout = ({ children, titleHeader, backButton, rightEmoji }: LayoutProps) => {
  const { top } = useSafeAreaInsets()
  const navigator = useNavigation()

  return (
    <>
      <View
        style={[
          { padding: 12, backgroundColor: '#F5F7F8', flex: 1 },
          top > 0 && { paddingTop: top + 12 }
        ]}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {backButton && (
            <Pressable onPress={() => navigator.goBack()}>
              <Text
                style={{
                  fontSize: 36
                }}
              >
                👈
              </Text>
            </Pressable>
          )}
          {titleHeader && (
            <View style={{ marginBottom: 36 }}>
              <Subtitle text={titleHeader} />
            </View>
          )}
          {rightEmoji && (
            <View style={{ marginBottom: 36 }}>
              <Text
                style={{
                  fontSize: 28
                }}
              >
                {rightEmoji}
              </Text>
            </View>
          )}
        </View>

        {children}
      </View>
    </>
  )
}

const ErrorMessage = ({ top, message }: { top: number; message?: string }) => (
  <View
    style={[
      {
        position: 'absolute',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#FFF',
        padding: 12,
        zIndex: 100,
        ...lightShadow
      },
      top > 0 && { marginTop: top + 12 }
    ]}
  >
    <Subtitle text={`🚨 ${message}`} />
  </View>
)

export default Layout
