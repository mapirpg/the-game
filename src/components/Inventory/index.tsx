import React from 'react'
import { HStack, View } from 'native-base'
import { Sword1 } from '../../sprites/Objects/Weapon'
import { InventoryProps } from '../../types/inventory'

interface Props {
  items?: InventoryProps[]
}

export const Inventory = ({ items }: Props) => {
  const possibleItems: Record<InventoryProps['id'], React.ReactNode> = {
    1: <Sword1 />,
  }

  return (
    <HStack
      backgroundColor={'#00000050'}
      zIndex={10}
      position={'absolute'}
      right={'16px'}
    >
      {items?.map(({ id }) => <View key={id}>{possibleItems[id]}</View>)}
    </HStack>
  )
}
