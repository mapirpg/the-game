import { Welcome } from '../screens/Welcome'
import { UnknownWoods } from '../maps/UnknownWoods'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackProps } from '../types/appRouter'

const Stack = createNativeStackNavigator<StackProps>()

export const Router = () => {
  return (
    <Stack.Navigator initialRouteName="UnknownWoods">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="The Game"
        component={Welcome}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="UnknownWoods"
        component={UnknownWoods}
      />
    </Stack.Navigator>
  )
}
