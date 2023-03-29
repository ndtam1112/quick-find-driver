import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import AuthStack from './routes/AuthStack'
import BottomTab from './routes/BottomTab'
import 'react-native-gesture-handler'
import Order from './screens/Orders/Order'

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  )
}
