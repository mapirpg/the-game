import {
  loots,
  allowLoots,
  allowSlots,
  allowEvents,
  allowTargets,
  initialTargets,
} from './Ground/constants'
import { rng } from '../../data/rng'
import { Center, View } from 'native-base'
import { roll100 } from '../../utils/roll'
import { Status } from '../../components/Status'
import { TargetProps } from '../../types/target'
import { useEffect, useMemo, useState } from 'react'
import { useGroundElements } from './Ground/elements'
import { Character } from '../../components/Character'
import { Inventory } from '../../components/Inventory'
import { useCharacter } from '../../hooks/useCharacter'
import { useInventory } from '../../hooks/useInventory'
import { useGroundElements2 } from './Ground2/elements'
import { useController } from '../../hooks/useController'
import { Environment } from '../../components/Environment'
import { dataItems } from '../../data/items'

export const UnknownWoods = () => {
  const { items, addItem } = useInventory({
    initialItems: [
      {
        ...dataItems.weapons.sword,
      },
    ],
  })
  const { movement, interaction, meleeAttack } = useController()
  const [targets, setTargets] = useState<TargetProps[]>(initialTargets)
  const { elements, mapSpots } = useGroundElements({ targets })
  const { elements2, mapSpots2 } = useGroundElements2({ targets: [] })
  const {
    move,
    attack,
    health,
    position,
    interact,
    direction,
    maxHealth,
    changeStatus,
    resetPosition,
  } = useCharacter({ initialPosition: { x: 2, y: 3 } })

  const weapon = useMemo(() => items.find((item) => item.id === 1), [items])

  useEffect(() => {
    move({ direction: movement, mapSpots, allowSlots })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movement])

  useEffect(() => {
    if (interaction) {
      allowEvents.forEach((event) => {
        if (event === 36 && weapon) return
        const existsEvent = targets.find((target) => target.id === event)
        const existsLoot = allowLoots.find((loot) => loot === event)

        if (existsEvent) {
          interact({
            mapSpots,
            allowEvents,
            event: event,
            dir: direction,
            doIt: () => {
              const newTargets = targets.map((target) => {
                if (target.id === event) {
                  target.active = true
                }
                return target
              })

              setTargets(newTargets)
              if (existsLoot) addItem(loots[event])
            },
          })
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interaction])

  useEffect(() => {
    if (meleeAttack && weapon) {
      allowTargets.forEach((target) => {
        attack({
          target,
          mapSpots,
          allowTargets,
          doIt: () => {
            const newTargets = targets.map((t) => {
              if (t.health && t.id === target) {
                t.health -= weapon.damage ?? 0
              }
              return t
            })

            if (roll100() < rng.damagedByFlowers * 100) {
              changeStatus({ damage: 1 })
            }
            setTargets(newTargets)
          },
        })
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meleeAttack])

  useEffect(() => {
    if (health === 0) {
      changeStatus({ cure: 4 })
      resetPosition()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [health])

  return (
    <Center flex={1} backgroundColor={'#252525'}>
      <View w={480} h={480}>
        <Status health={health} maxHealth={maxHealth} />
        <Inventory items={items} />
        <Environment zIndex={-1} elements={elements} mapSpots={mapSpots} />
        <Character
          name={'Player'}
          inventory={items}
          direction={direction}
          top={position.y * 16}
          left={position.x * 16}
          meleeAttack={meleeAttack}
        />
        <Environment
          zIndex={1}
          position={'absolute'}
          elements={elements2}
          mapSpots={mapSpots2}
        />
      </View>
    </Center>
  )
}
