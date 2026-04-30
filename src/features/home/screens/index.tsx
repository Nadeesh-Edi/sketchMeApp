import {StyleSheet, Switch, View} from 'react-native';
import { Button, Text } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'react-native-paper';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../../navigation/types';
import React from 'react';
import Header from '../../../common/components/header';
import { commonStyles } from '../../../common/styles';
import NewDrawingCard from '../components/newDrawingCard';

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const theme = useTheme();

  return (
    <View style={{backgroundColor: theme.colors.background}}>
      <Header />
      <View style={commonStyles.page}>
        <Text style={commonStyles.mainTitle}>
        Studio
      </Text>
      <Text style={commonStyles.descriptionText}>
        Capture a reference to begin your next masterpiece.
      </Text>
      <NewDrawingCard />
      <Button
        mode="contained"
        onPress={() => navigation.navigate('SketchScreen')}
      >
        Open Sketch
      </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
});