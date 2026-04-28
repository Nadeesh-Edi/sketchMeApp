import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../features/home/screens';
import GalleryScreen from '../features/gallery/screens';
import ProfileScreen from '../features/profile/screens';
import type {TabParamList} from './types';

const Tab = createBottomTabNavigator<TabParamList>();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home', tabBarIcon: () => null}}
      />
      <Tab.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{title: 'Gallery', tabBarIcon: () => null}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile', tabBarIcon: () => null}}
      />
    </Tab.Navigator>
  );
}