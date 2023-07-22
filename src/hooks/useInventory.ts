import { useState } from 'react'
import { InventoryProps } from '../types/inventory'

export const useInventory = () => {
  const [items, setItems] = useState<InventoryProps[]>([])

  return {
    items,
    addItem: (item: InventoryProps) => setItems([...items, item]),
    // eslint-disable-next-line prettier/prettier
    removeItem: (item: InventoryProps) => setItems(items.filter((i) => i.id !== item.id)),
  }
}
