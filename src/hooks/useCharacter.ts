import { useCallback, useState } from 'react'
import { Coordinates, Directions } from '../types/global'
import { AttackPropps, InteractProps, MoveProps } from '../types/character'

interface Props {
  initialPosition?: Coordinates
  initialHealth?: number
}

export const useCharacter = (props?: Props) => {
  const [position, setPosition] = useState<Coordinates>(
    props?.initialPosition || { x: 1, y: 1 }
  )
  const [direction, setDirection] = useState<Directions>('down')
  const maxHealth = 1
  const [health, setHealth] = useState<number>(props?.initialHealth || 4)

  const canDoit = useCallback(
    (
      event: number,
      pos: Coordinates,
      mapSpots: number[][],
      allowEvents: number[],
      dir: Directions | undefined
    ) => {
      const spotDirections = {
        left: mapSpots[pos.y][pos.x - 1],
        right: mapSpots[pos.y][pos.x + 1],
        down: mapSpots[pos.y + 1][pos.x],
        up: mapSpots[pos.y - 1][pos.x],
      }

      const nextSpot = spotDirections[dir || 'down']

      return allowEvents?.includes(nextSpot) && nextSpot === event
    },
    []
  )

  const move = ({ mapSpots, allowSlots, direction }: MoveProps) => {
    if (direction) {
      const canMove = (pos: Coordinates) => {
        const nextSpot = mapSpots[pos.y][pos.x]

        return allowSlots?.includes(nextSpot) || nextSpot === 0
      }

      const actions = {
        left: () =>
          setPosition({
            y: position.y,
            x: canMove({ x: position.x - 1, y: position.y })
              ? (position.x -= 1)
              : position.x,
          }),
        right: () =>
          setPosition({
            y: position.y,
            x: canMove({ x: position.x + 1, y: position.y })
              ? (position.x += 1)
              : position.x,
          }),
        down: () =>
          setPosition({
            x: position.x,
            y: canMove({ x: position.x, y: position.y + 1 })
              ? (position.y += 1)
              : position.y,
          }),
        up: () =>
          setPosition({
            x: position.x,
            y: canMove({ x: position.x, y: position.y - 1 })
              ? (position.y -= 1)
              : position.y,
          }),
      }

      setDirection(direction)
      return actions[direction]()
    }
  }

  const interact = ({
    dir,
    doIt,
    event,
    mapSpots,
    allowEvents,
  }: InteractProps) => {
    if (canDoit(event, position, mapSpots, allowEvents ?? [], dir)) {
      doIt()
    }
  }

  const attack = ({ doIt, target, mapSpots, allowTargets }: AttackPropps) => {
    if (canDoit(target, position, mapSpots, allowTargets, direction)) {
      doIt()
    }
  }

  const changeStatus = ({
    cure,
    damage,
  }: {
    cure?: number
    damage?: number
  }) => {
    if (cure && health < maxHealth * 4) {
      setHealth(health + cure)
    }

    if (damage && health > 0) {
      setHealth(health - damage)
    }
  }

  const resetPosition = () => {
    setPosition(props?.initialPosition || { x: 1, y: 1 })
  }

  return {
    move,
    attack,
    health,
    interact,
    position,
    direction,
    maxHealth,
    changeStatus,
    resetPosition,
  }
}
