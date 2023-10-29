import { View } from 'react-native'
import React from 'react'
import { Subtitle, Title } from './Text'

const EmptyList = ({ listName }: { listName: string }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Title text={`☹️`} />
      <Subtitle text={`No ${listName} created`} />
    </View>
  )
}

export default EmptyList
