import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
} from 'react-native-paper';
import merge from 'deepmerge';

const customLightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#FF5722',
    primaryContainer: '#FFCCBC',
    secondary: '#FF5722',
    secondaryContainer: '#FFCCBC',
    tertiary: '#FF5722',
    tertiaryContainer: '#FFCCBC',
  },
};

const customDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#FF5722',
    primaryContainer: '#BF360C',
    secondary: '#FF5722',
    secondaryContainer: '#BF360C',
    tertiary: '#FF5722',
    tertiaryContainer: '#BF360C',
  },
};

const {LightTheme: NavigationLightTheme} = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const {DarkTheme: NavigationDarkThemeAdapted} = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedLightTheme = merge(customLightTheme, NavigationLightTheme);
const CombinedDarkTheme = merge(customDarkTheme, NavigationDarkThemeAdapted);

export {
  CombinedLightTheme,
  CombinedDarkTheme,
  customLightTheme,
  customDarkTheme,
};