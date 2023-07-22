export type InventoryItemProps = 'Sword' | 'Shield' | 'Potion'

export type InventoryProps = {
  id: number
  damage?: number
  quantity?: number
  name: InventoryItemProps
  type: 'weapon' | 'armor' | 'potion'
}
