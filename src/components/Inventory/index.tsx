import React from 'react'
import { Center, HStack, Text, View } from 'native-base'
import { Sword1 } from '../../sprites/Objects/Weapon'
import { InventoryProps } from '../../types/inventory'

interface Props {
  items?: InventoryProps[]
}

export const Inventory = ({ items }: Props) => {
  const possibleItems: Record<InventoryProps['id'], React.ReactNode> = {
    1: (
      <View>
        <Sword1 />
        <Center
          backgroundColor={'white'}
          position={'absolute'}
          right={0}
          top={'-10'}
          width={'16px'}
          height={'16px'}
          borderRadius={'full'}
        >
          <Text fontWeight={'bold'}>X</Text>
        </Center>
      </View>
    ),
  }

  return (
    <HStack
      minWidth={'32px'}
      height={'32px'}
      backgroundColor={'#00000050'}
      zIndex={10}
      position={'absolute'}
      marginTop={'-32px'}
      justifyContent={'space-around'}
      alignItems={'center'}
      right={'16px'}
    >
      {items?.map(({ id }) => <View key={id}>{possibleItems[id]}</View>)}
    </HStack>
  )
}
