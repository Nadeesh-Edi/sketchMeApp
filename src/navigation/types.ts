export type RootStackParamList = {
  MainTabs: undefined;
  SketchScreen: undefined;
  ImageEditorScreen: { imageUri: string };
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