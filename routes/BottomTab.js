import * as React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ChatStack from './ChatStack'
import OrderStack from './OrderStack'
import SettingStack from './SettingStack'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          let rn = route.name

          if (rn === 'Tin nhắn') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline'
          } else if (rn === 'Chuyến xe') {
            iconName = focused ? 'car' : 'car-outline'
          } else if (rn === 'Cài đặt') {
            iconName = focused ? 'settings' : 'settings-outline'
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Chuyến xe" component={OrderStack} />
      <Tab.Screen name="Tin nhắn" component={ChatStack} />

      <Tab.Screen name="Cài đặt" component={SettingStack} />
    </Tab.Navigator>
  )
}

export default BottomTab
