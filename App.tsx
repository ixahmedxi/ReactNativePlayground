import React from 'react'
import {SafeAreaView, StatusBar, Text} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import {v4} from 'uuid'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>{v4()}</Text>
        <Icon name="heart" size={30} color="hotpink" />
      </SafeAreaView>
    </>
  )
}

export default App
