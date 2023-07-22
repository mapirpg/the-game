import { InventoryProps } from '../types/inventory'

export const itemsData: Record<string, Record<string, InventoryProps>> = {
  weapons: {
    sword: {
      id: 1,
      damage: 1,
      name: 'Sword',
      type: 'weapon',
    },
  },
  consumables: {
    health1: {
      id: 2,
      cure: 1,
      name: 'Health Potion',
      type: 'consumable',
      quantity: 0,
    },
  },
}
