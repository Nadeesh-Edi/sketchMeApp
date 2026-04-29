import {StyleSheet, Switch, Text, View} from 'react-native';
import { Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'react-native-paper';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../../navigation/types';
import React from 'react';
import Header from '../../../common/components/header';

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const theme = useTheme();

  return (
    <View style={{backgroundColor: theme.colors.background}}>
      <Header />
      <Text style={[styles.text, {color: theme.colors.onBackground}]}>
        Home Screen
      </Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('SketchScreen')}
      >
        Open Sketch
      </Button>
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