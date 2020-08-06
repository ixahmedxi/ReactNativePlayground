import React, {createContext, useContext, useState} from 'react'
import {v4} from 'uuid'

interface Item {
  id: string
  text: string
}

interface IContext {
  items: Item[]
  addItem: (text: string) => void
  removeItem: (id: string) => void
}

export const TodosContext = createContext<IContext>({
  items: [],
  addItem: () => null,
  removeItem: () => null
})

export const TodosProvider: React.FC = ({children}) => {
  const [items, setItems] = useState<Item[]>([])

  const addItem = (text: string) => setItems([...items, {id: v4(), text}])

  const removeItem = (id: string) =>
    setItems(items.filter((item) => !(item.id === id)))

  return (
    <TodosContext.Provider value={{items, addItem, removeItem}}>
      {children}
    </TodosContext.Provider>
  )
}

export const useTodos = () => useContext(TodosContext)
