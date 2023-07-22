import {
  loots,
  allowLoots,
  allowSlots,
  allowEvents,
  allowTargets,
  initialTargets,
} from './constants'
import { useElements } from './elements'
import { Center, View } from 'native-base'
import { TargetProps } from '../../types/target'
import { useEffect, useMemo, useState } from 'react'
import { Character } from '../../components/Character'
import { Inventory } from '../../components/Inventory'
import { useCharacter } from '../../hooks/useCharacter'
import { useInventory } from '../../hooks/useInventory'
import { useController } from '../../hooks/useController'
import { Environment } from '../../components/Environment'

export const UnknownWoods = () => {
  const { items, addItem } = useInventory()
  const { movement, interaction, meleeAttack } = useController()
  const [targets, setTargets] = useState<TargetProps[]>(initialTargets)
  const { elements, mapSpots } = useElements({ targets })
  const { direction, position, move, interact, attack } = useCharacter()

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

            setTargets(newTargets)
          },
        })
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meleeAttack])

  return (
    <Center flex={1} backgroundColor={'#252525'}>
      <View w={480} h={480}>
        <Inventory items={items} />
        <Environment
          targets={targets}
          elements={elements}
          mapSpots={mapSpots}
        />
        <Character
          name={'Player'}
          inventory={items}
          direction={direction}
          top={position.y * 16}
          left={position.x * 16}
          meleeAttack={meleeAttack}
        />
      </View>
    </Center>
  )
}
