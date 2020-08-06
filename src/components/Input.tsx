import React, {useState} from 'react'
import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import {useTodos} from '../contexts/TodosContext'

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    overflow: 'hidden'
  },
  input: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    flex: 1,
    paddingHorizontal: 15,
    color: '#111'
  },
  buttonWrapper: {
    backgroundColor: '#06d6a0',
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export const Input: React.FC = () => {
  const {addItem} = useTodos()
  const [val, setVal] = useState('')
  return (
    <View style={styles.wrapper}>
      <TextInput
        value={val}
        onChangeText={(text) => setVal(text)}
        placeholder="Add new todo item..."
        placeholderTextColor="rgba(0, 0, 0, 0.3)"
        style={styles.input}
      />
      <TouchableHighlight
        onPress={() => {
          addItem(val)
          setVal('')
          Keyboard.dismiss()
        }}>
        <View style={styles.buttonWrapper}>
          <Icon name="plus" size={24} color="#fff" />
        </View>
      </TouchableHighlight>
    </View>
  )
}
