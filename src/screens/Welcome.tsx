import { Button, Center } from 'native-base'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { StackProps } from '../types/appRouter'

export const Welcome = () => {
  const navigation = useNavigation<NavigationProp<StackProps>>()

  return (
    <Center flex={1} backgroundColor={'#252525'}>
      <Button
        colorScheme={'red'}
        onPress={() => navigation.navigate('UnknownWoods')}
      >
        Inciar
      </Button>
    </Center>
  )
}
