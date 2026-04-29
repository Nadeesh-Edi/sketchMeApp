import React, {useState, useMemo, useCallback} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PaperProvider} from 'react-native-paper';
import AppNavigator from './src/AppNavigator';
import {CombinedLightTheme, CombinedDarkTheme} from './src/theme';
import {PreferencesContext} from './src/theme/PreferencesContext';

function App() {
  const [isThemeDark, setIsThemeDark] = useState(false);

  const theme = isThemeDark ? CombinedDarkTheme : CombinedLightTheme;

  const toggleTheme = useCallback(() => {
    setIsThemeDark(prev => !prev);
  }, []);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );

  return (
    <SafeAreaProvider>
      <PreferencesContext.Provider value={preferences}>
        <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
            <StatusBar
              barStyle={isThemeDark ? 'light-content' : 'dark-content'}
              backgroundColor={theme.colors.surface}
            />
            <View style={styles.container}>
              <AppNavigator />
            </View>
          </NavigationContainer>
        </PaperProvider>
      </PreferencesContext.Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;