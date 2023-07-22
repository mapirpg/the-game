import { useEffect, useState } from 'react'
import { Directions } from '../types/global'
import { ConsumableProps } from '../types/inventory'

export const useController = () => {
  const [movement, setMovement] = useState<Directions | undefined>()
  const [interaction, setInteracion] = useState<boolean | undefined>()
  const [meleeAttack, setMeleeAttack] = useState<boolean | undefined>()
  const [consume, setConsume] = useState<ConsumableProps | undefined>()

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      handleMove(e)
      handleAction(e)
      handleMeleeAttack(e)
      handleHealthPotion(e)
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleMove = (e: KeyboardEvent) => {
    const arrowMoves: Record<string, Directions> = {
      ArrowUp: 'up',
      ArrowDown: 'down',
      ArrowLeft: 'left',
      ArrowRight: 'right',
    }

    const wasdMoves: Record<string, Directions> = {
      KeyW: 'up',
      KeyS: 'down',
      KeyA: 'left',
      KeyD: 'right',
    }

    setMovement(undefined)
    setTimeout(() => setMovement(arrowMoves[e.code] || wasdMoves[e.code]), 1)
  }

  const handleAction = (e: KeyboardEvent) => {
    const actionKeys = ['Space', 'Enter']

    setInteracion(undefined)
    setTimeout(() => setInteracion(actionKeys.includes(e.code)), 1)
  }

  const handleMeleeAttack = (e: KeyboardEvent) => {
    const attackKeys = ['KeyX']

    setMeleeAttack(attackKeys.includes(e.code))
    setTimeout(() => setMeleeAttack(false), 500)
  }

  const handleHealthPotion = (e: KeyboardEvent) => {
    const drinks: Record<string, ConsumableProps> = {
      Digit1: 'health',
      Digit2: 'mana',
    }

    setConsume(undefined)
    setTimeout(() => setConsume(drinks[e.code]), 1)
  }

  return { movement, interaction, meleeAttack, consume }
}
