import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../features/home/screens';
import GalleryScreen from '../features/gallery/screens';
import ProfileScreen from '../features/profile/screens';
import type { TabParamList } from './types';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator<TabParamList>();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        animation: 'shift',
        headerShown: false,
      }} >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <Image
              source={require('../../assets/images/homeTab.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          )
        }}
      />
      <Tab.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{ 
          title: 'Gallery', 
          tabBarIcon: ({ size, color }) => (
            <Image
              source={require('../../assets/images/galleryTab.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ 
          title: 'Profile', 
          tabBarIcon: ({ size, color }) => (
            <Image
              source={require('../../assets/images/profileTab.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}