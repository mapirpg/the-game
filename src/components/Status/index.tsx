/* eslint-disable prettier/prettier */
import { HStack } from 'native-base'
import {
  EmptyHeart,
  FullHeart,
  HalfHeart,
  OneFourthHeart,
  ThreeFourthHeart,
} from '../../sprites/Char/Status'
import { uidGen } from '../../utils/uidGen'

interface Props {
  health: number
  maxHealth: number
}

export const Status = ({ health, maxHealth }: Props) => {

  const fullHearts = Math.floor(health / 4)
  const threeFourthHearts = Math.floor((health % 4) / 3)
  const halfHearts = Math.floor(((health % 4) - threeFourthHearts * 3) / 2)
  const oneFourthHearts = Math.floor(((health % 4) - threeFourthHearts * 3 - halfHearts * 2) / 1)
  const emptyHearts = maxHealth - fullHearts - threeFourthHearts - halfHearts - oneFourthHearts

  return (
    <HStack
      minWidth={'32px'}
      height={'20px'}
      backgroundColor={'#00000050'}
      zIndex={10}
      position={'absolute'}
      marginTop={'-20px'}
      justifyContent={'space-around'}
      alignItems={'center'}
    >
      {Array(fullHearts).fill(<FullHeart key={uidGen()} />)}
      {Array(threeFourthHearts).fill(<ThreeFourthHeart  key={uidGen()} />)}
      {Array(halfHearts).fill(<HalfHeart  key={uidGen()} />)}
      {Array(oneFourthHearts).fill(<OneFourthHeart  key={uidGen()} />)}
      {Array(emptyHearts).fill(<EmptyHeart  key={uidGen()} />)}
    </HStack>
  )
}
