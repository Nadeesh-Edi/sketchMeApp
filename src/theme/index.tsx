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
    onSurface: '#1C1B1F',
    onSurfaceVariant: '#49454F',
    onPrimary: '#FFFFFF',
    onPrimaryContainer: '#3E2723',
    onBackground: '#1C1B1F',
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
    onSurface: '#E6E1E5',
    onSurfaceVariant: '#CAC4D0',
    onPrimary: '#FFFFFF',
    onPrimaryContainer: '#FFCCBC',
    onBackground: '#E6E1E5',
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

const CombinedLightTheme = merge(NavigationLightTheme, customLightTheme);
const CombinedDarkTheme = merge(NavigationDarkThemeAdapted, customDarkTheme);

export {
  CombinedLightTheme,
  CombinedDarkTheme,
  customLightTheme,
  customDarkTheme,
};