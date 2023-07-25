/* eslint-disable prettier/prettier */
import { rngData } from '../../../data/rng'
import { itemsData } from '../../../data/items'
import { timersData } from '../../../data/timers'
import { TargetProps } from '../../../types/target'
import { EnvDamageProps } from '../../../types/environment'
import { environmentData } from '../../../data/environment'
import { InventoryProps, LootProps } from '../../../types/inventory'

export const headquarters = [
  [29, 24, 24, 24, 22, 23, 23, 23, 23, 23, 23, 23, 23, 18, 4, 4, 4, 4, 31, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23],
  [29, 24, 51, 24, 21, 24, 24, 24, 24, 24, 24, 24, 24, 17, 5, 5, 5, 5, 30, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24],
  [29, 52, 52, 52, 20, 19, 19, 19, 19, 19, 19, 19, 19, 15, 6, 6, 6, 6, 16, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
  [29, 52, 52, 52, 52, 52, 123, 113, 0, 0, 0, 0, 0, 12, 8, 8, 8, 8, 14, 0, 0, 0, 53, 58, 63, 68, 73, 0, 0],
  [29, 52, 52, 52, 52, 52, 122, 0, 0, 0, 0, 0, 0, 11, 5, 10, 10, 10, 13, 0, 0, 0, 54, 59, 64, 69, 74, 0, 0],
  [29, 116, 117, 119, 120, 118, 124, 53, 58, 63, 68, 73, 0, 11, 10, 10, 5, 10, 14, 0, 0, 0, 55, 0, 0, 0, 75, 0, 0],
  [29, 0, 0, 0, 0, 0, 0, 54, 59, 64, 69, 74, 0, 12, 5, 10, 10, 10, 14, 52, 0, 0, 56, 0, 0, 0, 76, 0, 0],
  [29, 0, 0, 0, 0, 0, 0, 55, 103, 0, 0, 75, 109, 12, 10, 10, 5, 10, 13, 0, 0, 104, 57, 62, 67, 72, 77, 105, 0],
  [29, 0, 0, 52, 0, 0, 0, 56, 0, 0, 0, 76, 0, 12, 10, 5, 10, 10, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [29, 0, 0, 0, 0, 0, 40, 57, 62, 67, 72, 77, 39, 12, 10, 10, 10, 10, 14, 0, 0, 0, 52, 0, 0, 0, 0, 0, 0],
  [29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 10, 10, 10, 5, 14, 0, 0, 0, 0, 0, 0, 52, 0, 0, 0],
  [29, 0, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 10, 5, 10, 10, 13, 0, 0, 52, 0, 0, 0, 0, 0, 0, 0],
  [29, 0, 0, 0, 0, 52, 0, 0, 0, 0, 0, 52, 0, 11, 5, 10, 10, 10, 13, 110, 0, 0, 0, 0, 0, 0, 52, 0, 0],
  [29, 0, 0, 53, 58, 63, 68, 73, 0, 0, 0, 0, 0, 12, 10, 10, 10, 10, 13, 111, 0, 0, 114, 52, 0, 0, 0, 0, 0],
  [29, 0, 0, 54, 59, 64, 69, 74, 0, 52, 0, 0, 0, 11, 10, 10, 10, 10, 13, 0, 0, 0, 0, 0, 0, 52, 0, 0, 0],
  [29, 0, 0, 55, 0, 0, 0, 75, 0, 0, 0, 0, 0, 11, 10, 5, 10, 10, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [29, 0, 0, 56, 0, 0, 0, 76, 0, 0, 0, 0, 108, 11, 10, 5, 10, 10, 13, 0, 52, 0, 0, 0, 0, 0, 0, 0, 0],
  [29, 0, 38, 57, 62, 67, 72, 77, 37, 0, 0, 52, 0, 11, 10, 10, 10, 10, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 5, 10, 10, 10, 14, 0, 0, 0, 52, 0, 0, 115, 0, 0, 0],
  [29, 0, 0, 52, 0, 0, 0, 0, 52, 0, 0, 0, 0, 11, 5, 10, 10, 10, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [29, 0, 0, 52, 52, 0, 0, 0, 0, 0, 0, 0, 0, 12, 10, 25, 10, 10, 14, 112, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 10, 5, 10, 10, 14, 0, 0, 0, 0, 0, 52, 0, 0, 0, 0],
  [29, 0, 53, 58, 63, 68, 73, 0, 0, 0, 0, 0, 0, 12, 10, 10, 10, 10, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [29, 0, 54, 59, 64, 69, 74, 0, 0, 52, 0, 0, 0, 11, 10, 10, 10, 10, 14, 0, 52, 0, 0, 78, 83, 0, 93, 98, 0],
  [29, 0, 55, 0, 0, 0, 75, 0, 0, 0, 0, 0, 108, 11, 10, 10, 10, 5, 13, 0, 0, 0, 0, 79, 84, 0, 94, 99, 0],
  [29, 0, 56, 0, 0, 0, 76, 0, 0, 0, 0, 0, 0, 32, 33, 33, 33, 33, 34, 0, 0, 0, 0, 80, 0, 0, 0, 100, 0],
  [29, 41, 57, 62, 67, 72, 77, 42, 0, 0, 0, 0, 109, 12, 5, 10, 10, 10, 13, 52, 0, 0, 0, 81, 0, 0, 0, 101, 0],
  [29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 10, 5, 10, 10, 14, 0, 0, 0, 106, 82, 87, 92, 97, 102, 107],
  [28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 10, 5, 10, 10, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [26, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 48, 48, 49, 10, 10, 10, 5, 50, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48],
]

export const allowEvents = [36, 51]
export const allowSlots = [0, 11, 12, 13, 14, 32, 33, 34, 35, 51, 52, 67]
export const allowTargets = [37, 38, 39, 40, 41, 42, 43, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 123, 125]
export const allowEnvDamage: EnvDamageProps[] = [
  {
    id: 52,
    timer: timersData.envFireDot,
    damage: environmentData.fireDamage
  }
]
export const allowLoots: LootProps[] = [
  { id: 36, chance: 1, quantity: 1 },
  { id: 37, chance: rngData.flowerDropPotion, quantity: 1 },
  { id: 38, chance: rngData.flowerDropPotion, quantity: 1 },
  { id: 39, chance: rngData.flowerDropPotion, quantity: 1 },
  { id: 40, chance: rngData.flowerDropPotion, quantity: 1 },
  { id: 41, chance: rngData.flowerDropPotion, quantity: 1 },
  { id: 42, chance: rngData.flowerDropPotion, quantity: 1 },
  { id: 43, chance: rngData.flowerDropPotion, quantity: 1 },
  { id: 103, chance: rngData.flowerDropPotion, quantity: 1},
  { id: 104, chance: rngData.flowerDropPotion, quantity: 1},
  { id: 105, chance: rngData.flowerDropPotion, quantity: 1},
  { id: 106, chance: rngData.flowerDropPotion, quantity: 1},
  { id: 107, chance: rngData.flowerDropPotion, quantity: 1},
  { id: 108, chance: rngData.flowerDropPotion, quantity: 1},
  { id: 109, chance: rngData.flowerDropPotion, quantity: 1},
  { id: 110, chance: rngData.flowerDropPotion, quantity: 1},
  { id: 111, chance: rngData.flowerDropPotion, quantity: 1},
  { id: 112, chance: rngData.flowerDropPotion, quantity: 1},
  { id: 113, chance: rngData.flowerDropPotion, quantity: 1},
  { id: 114, chance: rngData.flowerDropPotion, quantity: 1},
  { id: 115, chance: rngData.flowerDropPotion, quantity: 1},
]

export const loots: Record<number, InventoryProps> = {
  36: itemsData.weapons.sword,
  37: itemsData.consumables.health1,
  38: itemsData.consumables.health1,
  39: itemsData.consumables.health1,
  40: itemsData.consumables.health1,
  41: itemsData.consumables.health1,
  42: itemsData.consumables.health1,
  103: itemsData.consumables.health1,
  104: itemsData.consumables.health1,
  105: itemsData.consumables.health1,
  106: itemsData.consumables.health1,
  107: itemsData.consumables.health1,
  108: itemsData.consumables.health1,
  109: itemsData.consumables.health1,
  110: itemsData.consumables.health1,
  111: itemsData.consumables.health1,
  112: itemsData.consumables.health1,
  113: itemsData.consumables.health1,
  114: itemsData.consumables.health1,
  115: itemsData.consumables.health1,
}

export const initialTargets: TargetProps[] = [
  { id: 36, active: false, },
  { id: 37, health: 1},
  { id: 38, health: 1},
  { id: 39, health: 1},
  { id: 40, health: 1},
  { id: 41, health: 1},
  { id: 42, health: 1},
  { id: 43, health: 1},
  { id: 103, health: 1},
  { id: 104, health: 1},
  { id: 105, health: 1},
  { id: 106, health: 1},
  { id: 107, health: 1},
  { id: 108, health: 1},
  { id: 109, health: 1},
  { id: 110, health: 1},
  { id: 111, health: 1},
  { id: 112, health: 1},
  { id: 113, health: 1},
  { id: 114, health: 1},
  { id: 115, health: 1},
  { id: 116, health: 3},
  { id: 117, health: 3},
  { id: 118, health: 3},
  { id: 119, health: 3},
  { id: 120, health: 3},
  { id: 121, health: 3},
  { id: 122, health: 3},
  { id: 123, health: 3},
  { id: 124, health: 3},

]
