import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../../navigation/types';

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Open Sketch"
        onPress={() => navigation.navigate('SketchScreen')}
      />
    </View>
  );
}