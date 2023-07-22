import { useState } from 'react'
import { InventoryProps } from '../types/inventory'

interface Props {
  initialItems?: InventoryProps[]
}

export const useInventory = (props?: Props) => {
  const [items, setItems] = useState<InventoryProps[]>(
    props?.initialItems || []
  )

  const addItem = (item: InventoryProps) => {
    if (item.type === 'consumable') {
      const consumable = items.find((i) => i.id === item.id)
      if (consumable) {
        const newItems = items.map((invItem) => {
          if (invItem.id === item.id) {
            if (invItem.quantity !== undefined) {
              return {
                ...invItem,
                quantity: (invItem.quantity || 0) + (item.quantity || 1),
              }
            }
          }
          return invItem
        })

        setItems(newItems)
      }
    } else {
      setItems([...items, item])
    }
  }

  const removeItem = (item: InventoryProps) => {
    if (item.type === 'consumable') {
      const consumable = items.find((i) => i.id === item.id)
      if (consumable) {
        const newItems = items.map((invItem) => {
          if (invItem.id === item.id) {
            if (invItem.quantity !== undefined) {
              return {
                ...invItem,
                quantity: (invItem.quantity || 0) - (item.quantity || 1),
              }
            }
          }
          return invItem
        })

        setItems(newItems)
      }
    } else {
      const newItems = items.filter((invItem) => invItem.id !== item.id)
      setItems(newItems)
    }
  }

  return {
    items,
    addItem,
    removeItem,
  }
}
