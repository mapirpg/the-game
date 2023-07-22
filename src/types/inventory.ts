export type InventoryItemProps = 'weapon' | 'armor' | 'consumable'
export type ConsumableProps = 'health' | 'mana'

export type InventoryProps = {
  id: number
  name: string
  cure?: number
  damage?: number
  quantity?: number
  type: InventoryItemProps
}

export type LootProps = {
  id: number
  chance: number
  quantity: number
}
