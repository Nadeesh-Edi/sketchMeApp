import {Button, StyleSheet, Switch, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'react-native-paper';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../../navigation/types';
import {PreferencesContext} from '../../../theme/PreferencesContext';
import React from 'react';

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const theme = useTheme();
  const {toggleTheme, isThemeDark} = React.useContext(PreferencesContext);

  return (
    <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Text style={[styles.text, {color: theme.colors.onBackground}]}>
        Home Screen
      </Text>
      <Button
        title="Open Sketch"
        onPress={() => navigation.navigate('SketchScreen')}
      />
      <View style={styles.toggleContainer}>
        <Text style={[styles.label, {color: theme.colors.onBackground}]}>
          Dark Mode
        </Text>
        <Switch
          value={isThemeDark}
          onValueChange={toggleTheme}
        />
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