import React from 'react'
import styles from './styles'
import { Sword1 } from '../../sprites/Objects/Weapon'
import { InventoryProps } from '../../types/inventory'
import { Center, HStack, Text, View } from 'native-base'
import { HealthPotion1 } from '../../sprites/Objects/Consumables'

interface Props {
  items?: InventoryProps[]
}

export const Inventory = ({ items }: Props) => {
  const hasSword = items?.find((item) => item.id === 1)
  const healthPotions1 = items?.find((item) => item.id === 2)?.quantity || 0

  return (
    <HStack {...styles.containerProps}>
      <View>
        <HealthPotion1 />
        <Center {...styles.badgeContainerStyles}>
          <Text fontWeight={'bold'}>1</Text>
        </Center>
        <Text color={'white'} position={'absolute'} bottom={0}>
          {healthPotions1}
        </Text>
      </View>

      {hasSword ? (
        <View>
          <Sword1 />
          <Center {...styles.badgeContainerStyles}>
            <Text fontWeight={'bold'}>X</Text>
          </Center>
        </View>
      ) : null}
    </HStack>
  )
}
