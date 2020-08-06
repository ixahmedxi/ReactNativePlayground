import React from 'react'
import {FlatList} from 'react-native'
import {useTodos} from '../contexts/TodosContext'
import {TodoItem} from './TodoItem'

export const RenderItems: React.FC = () => {
  const {items} = useTodos()
  return (
    <FlatList
      data={items}
      renderItem={({item}) => <TodoItem text={item.text} id={item.id} />}
    />
  )
}
