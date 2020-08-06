import React from 'react'
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native'
import {Input} from './components/Input'
import {RenderItems} from './components/RenderItems'
import {TodosProvider} from './contexts/TodosContext'

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30
  },
  title: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#06d6a0',
    textAlign: 'center'
  }
})

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <TodosProvider>
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>My Todo App</Text>
          <Input />
          <RenderItems />
        </SafeAreaView>
      </TodosProvider>
    </>
  )
}

export default App
