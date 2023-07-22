import { useState } from 'react'
import { InventoryProps } from '../types/inventory'

interface Props {
  initialItems?: InventoryProps[]
}

export const useInventory = (props?: Props) => {
  const [items, setItems] = useState<InventoryProps[]>(
    props?.initialItems || []
  )

  return {
    items,
    addItem: (item: InventoryProps) => setItems([...items, item]),
    // eslint-disable-next-line prettier/prettier
    removeItem: (item: InventoryProps) => setItems(items.filter((i) => i.id !== item.id)),
  }
}
