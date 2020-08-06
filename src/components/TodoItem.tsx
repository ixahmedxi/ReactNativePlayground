import React from 'react'
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import {useTodos} from '../contexts/TodosContext'

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30
  },
  text: {
    fontSize: 16
  }
})

export const TodoItem: React.FC<{text: string; id: string}> = ({text, id}) => {
  const {removeItem} = useTodos()
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{text}</Text>
      <TouchableHighlight onPress={() => removeItem(id)}>
        <View>
          <Icon name="trash-2" size={20} color="rgba(0, 0, 0, 0.5)" />
        </View>
      </TouchableHighlight>
    </View>
  )
}
