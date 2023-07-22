import { Player, MeleeAttackingPlayer } from '../../sprites/Char/Player'
import { PlayerProps } from '../../types/character'
import { InventoryProps } from '../../types/inventory'

interface Props extends PlayerProps {
  name?: string
  meleeAttack?: boolean
  inventory?: InventoryProps[]
}

export const Character = ({ meleeAttack, inventory, ...props }: Props) => {
  return meleeAttack && inventory?.find((item) => item.name === 'Sword') ? (
    <MeleeAttackingPlayer {...props} />
  ) : (
    <Player {...props} />
  )
}
