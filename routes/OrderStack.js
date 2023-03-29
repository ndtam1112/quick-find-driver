import { createStackNavigator } from '@react-navigation/stack'
import Order from '../screens/Orders/Order'
import React from 'react'
import Order_2 from '../screens/Orders/Order_2'
import Order_3 from '../screens/Orders/Order_3'
import NoOrder from '../state/NoOrder'

const Stack = createStackNavigator()
const OrderStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Order2" component={Order_2} />
      <Stack.Screen name="Order3" component={Order_3} />
      <Stack.Screen name="NoOrder" component={NoOrder} />
    </Stack.Navigator>
  )
}

export default OrderStack
