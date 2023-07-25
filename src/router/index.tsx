import { Welcome } from '../screens/Welcome'
import { UnknownWoods } from '../maps/UnknownWoods'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackProps } from '../types/appRouter'

const Stack = createNativeStackNavigator<StackProps>()

export const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
          title: 'The legend of Leonard',
        }}
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          title: 'Unknown Woods',
        }}
        name="UnknownWoods"
        component={UnknownWoods}
      />
    </Stack.Navigator>
  )
}
