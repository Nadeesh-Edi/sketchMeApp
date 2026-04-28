export type RootStackParamList = {
  MainTabs: undefined;
  SketchScreen: undefined;
};

export type TabParamList = {
  Home: undefined;
  Gallery: undefined;
  Profile: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}