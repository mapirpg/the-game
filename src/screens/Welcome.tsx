import { Button, Center, Text } from 'native-base'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { StackProps } from '../types/appRouter'

export const Welcome = () => {
  const navigation = useNavigation<NavigationProp<StackProps>>()

  return (
    <Center flex={1} backgroundColor={'#252525'}>
      <Text
        margin={'20'}
        color={'white'}
        fontSize={'2xl'}
        fontWeight={'bold'}
        fontFamily={'heading'}
      >
        The legend of Leonard: Chapter 1
      </Text>

      <Button
        colorScheme={'red'}
        onPress={() => navigation.navigate('UnknownWoods')}
      >
        Inciar
      </Button>
    </Center>
  )
}
