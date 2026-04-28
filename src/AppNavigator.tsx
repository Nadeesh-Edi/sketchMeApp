import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './navigation/BottomTabs';
import SketchScreen from './features/sketchScreen/screens';
import type {RootStackParamList} from './navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SketchScreen"
        component={SketchScreen}
        options={{title: 'Sketch'}}
      />
    </Stack.Navigator>
  );
}