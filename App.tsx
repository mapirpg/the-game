import { Router } from './src/router'
import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
