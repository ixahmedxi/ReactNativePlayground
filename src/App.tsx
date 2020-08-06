import React from 'react'
import {
  Keyboard,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import {Input} from './components/Input'
import {RenderItems} from './components/RenderItems'
import {TodosProvider} from './contexts/TodosContext'

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
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
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.app}>
            <SafeAreaView style={styles.container}>
              <Text style={styles.title}>My Todo App</Text>
              <Input />
              <RenderItems />
            </SafeAreaView>
          </View>
        </TouchableWithoutFeedback>
      </TodosProvider>
    </>
  )
}

export default App
