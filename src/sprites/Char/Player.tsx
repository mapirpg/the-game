import { styled } from 'styled-components'
import character from '../../assets/character.png'
import { PlayerProps } from '../../types/character'

const directions = {
  up: -64,
  down: 0,
  left: -96,
  right: -32,
}

const meleeAttackDirections = {
  up: `-104px -128px`,
  down: `-104px -128px`,
  left: `-8px -128px`,
  right: `-8px -128px`,
}

export const Player = styled.div<PlayerProps>`
  width: 16px;
  height: 32px;
  background-image: url(${character});
  background-size: 272px 256px;
  background-position: 0 ${(props) => directions[props.direction || 'down']}px;
  background-repeat: no-repeat;
  position: absolute;
  top: ${(props) => props.top - 16}px;
  left: ${(props) => props.left}px;
`
export const MeleeAttackingPlayer = styled(Player)`
  background-position: ${(props) =>
    meleeAttackDirections[props.direction || 'down']};
  animation: attack 0.5s steps(4) forwards;
  transform: ${(props) =>
    props.direction === 'right' ? 'scaleX(-1)' : 'none'};
  rotate: ${(props) => (props.direction === 'up' ? '180deg' : 'none')};
`
