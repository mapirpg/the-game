import {
  loots,
  allowLoots,
  allowSlots,
  allowEvents,
  allowTargets,
  initialTargets,
  allowEnvDamage,
} from './Ground/constants'
import { Ground } from './Ground'
import { Layer2 } from './Layer2'
import { Layer3 } from './Layer3'
import { rngData } from '../../data/rng'
import { Center, View } from 'native-base'
import { roll100 } from '../../utils/roll'
import { itemsData } from '../../data/items'
import { Tips } from '../../components/Tips'
import { Status } from '../../components/Status'
import { TargetProps } from '../../types/target'
import { findSpots } from '../../utils/findSpots'
import { TipsProps } from '../../types/interface'
import { useEffect, useMemo, useState } from 'react'
import { useGroundElements } from './Ground/elements'
import { useLayer2Elements } from './Layer2/elements'
import { useLayer3Elements } from './Layer3/elements'
import { Character } from '../../components/Character'
import { Inventory } from '../../components/Inventory'
import { useCharacter } from '../../hooks/useCharacter'
import { useInventory } from '../../hooks/useInventory'
import { useController } from '../../hooks/useController'
import { useNavigation } from '@react-navigation/native'

export const UnknownWoods = () => {
  const [lifes, setLifes] = useState(3)
  const navigation = useNavigation()
  const { items, addItem, removeItem } = useInventory({
    initialItems: [itemsData.consumables.health1],
  })

  const { movement, interaction, meleeAttack, consume } = useController()
  const [tips, setTips] = useState<TipsProps>()
  const { elements2, mapSpots2 } = useLayer2Elements()
  const { elements3, mapSpots3 } = useLayer3Elements()
  const [targets, setTargets] = useState<TargetProps[]>(initialTargets)
  const { elements, mapSpots, hideChest } = useGroundElements({ targets })
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
  } = useCharacter({ initialPosition: { x: 26, y: 17 }, initialHealth: 1 })

  const weapon = useMemo(() => items.find((item) => item.id === 1), [items])

  // MOVE
  useEffect(() => {
    move({ direction: movement, mapSpots, allowSlots })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movement])

  // INTERACTION
  useEffect(() => {
    if (interaction) {
      allowEvents.forEach((event) => {
        if (event === 36 && weapon) return
        const existsEvent = targets.find((target) => target.id === event)
        const existsLoot = allowLoots.find((loot) => loot.id === event)

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

  // TIPS
  useEffect(() => {
    allowEvents.forEach((event) => {
      if (event === 36) {
        const spotDirections = {
          left: mapSpots[position.y][position.x - 1],
          right: mapSpots[position.y][position.x + 1],
          down: mapSpots[position.y + 1][position.x],
          up: mapSpots[position.y - 1][position.x],
        }

        const nextSpot = spotDirections[direction || 'down']

        if (nextSpot === 36 && event === 36 && !weapon) {
          setTips({
            show: true,
            text: 'Press [Space] to interact with the chest.',
          })
        } else {
          setTips(undefined)
        }
      }
    })
  })

  // ATTACK
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

            if (roll100() < rngData.damagedByFlowers * 100) {
              changeStatus({ damage: 1 })
            }

            // eslint-disable-next-line prettier/prettier
            const isDeadTarget = newTargets.find((t) => t.id === target)?.health === 0
            if (isDeadTarget) {
              const isLooteable = allowLoots.find((loot) => loot.id === target)
              if (isLooteable) {
                addItem(loots[target])
              }
            }

            setTargets(newTargets)
          },
        })
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meleeAttack])

  // ENVIRONMENT DAMAGE
  useEffect(() => {
    allowEnvDamage.forEach((event) => {
      const spots = findSpots(event.id, mapSpots)

      if (spots.length > 0) {
        spots.forEach((spot) => {
          if (spot.x === position.x && spot.y === position.y) {
            if (event.timer) {
              setTimeout(() => {
                changeStatus({ damage: event.damage })
              }, event.timer)
            } else {
              changeStatus({ damage: event.damage })
            }
          }
        })
      }
    })
  }, [changeStatus, position, mapSpots])

  // CONSUME
  useEffect(() => {
    if (consume && consume === 'health' && health < maxHealth * 4) {
      const potion = items.find((item) => item.id === 2)
      if (potion?.quantity !== undefined && potion.quantity > 0) {
        changeStatus({ cure: potion.cure })
        removeItem({ ...potion, quantity: 1 })
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [consume])

  // DIE
  useEffect(() => {
    if (health === 0) {
      changeStatus({ cure: 1 })
      resetPosition()
      setLifes((prev) => prev - 1)
    }

    if (lifes <= 0) {
      alert('Game Over')
      navigation.goBack()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [health])

  // WIN
  useEffect(() => {
    const currentSpot = mapSpots[position.y][position.x]
    if (currentSpot === 51) {
      alert('You Win!')
      navigation.goBack()
    }
  })

  useEffect(() => {
    hideChest()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Center flex={1} backgroundColor={'#252525'}>
      <View w={480} h={480}>
        <Status health={health} maxHealth={maxHealth} />

        <Inventory items={items} />

        <Ground zIndex={-1} elements={elements} mapSpots={mapSpots} />

        <Character
          name={'Player'}
          inventory={items}
          direction={direction}
          top={position.y * 16}
          left={position.x * 16}
          meleeAttack={meleeAttack}
        />
        <Layer2
          zIndex={1}
          elements={elements2}
          mapSpots={mapSpots2}
          position={'absolute'}
        />
        <Layer3
          zIndex={2}
          elements={elements3}
          mapSpots={mapSpots3}
          position={'absolute'}
        />
        {tips && <Tips text={tips.text} />}
      </View>
    </Center>
  )
}
