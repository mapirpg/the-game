import { InventoryProps } from '../types/inventory'

export const dataItems: Record<string, Record<string, InventoryProps>> = {
  weapons: {
    sword: {
      id: 1,
      name: 'Sword',
      damage: 1,
      type: 'weapon',
    },
  },
}
