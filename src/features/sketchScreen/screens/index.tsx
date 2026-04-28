import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

import Slider from '@react-native-community/slider';
import { launchImageLibrary, Asset } from 'react-native-image-picker';

const { width, height } = Dimensions.get('window');

const App: React.FC = () => {
  const device = useCameraDevice('back');

  const { hasPermission, requestPermission } = useCameraPermission()

  useEffect(() => {
    if (!hasPermission) requestPermission()
  }, [hasPermission, requestPermission])

  const [imageUri, setImageUri] = useState<string | null>(null);
  const [opacity, setOpacity] = useState<number>(0.5);

  const pickImage = async (): Promise<void> => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
    });

    if (result.assets && result.assets.length > 0) {
      const asset: Asset = result.assets[0];

      if (asset.uri) {
        setImageUri(asset.uri);
      }
    }
  };

  if (!device || !hasPermission) {
    return <View style={{ flex: 1, backgroundColor: 'black' }} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />

      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          resizeMode="contain"
          style={[
            styles.overlayImage,
            {
              opacity,
            },
          ]}
        />
      )}

      <View style={styles.controls}>
        <Button title="Choose Image" onPress={pickImage} />

        <Slider
          style={{ marginTop: 10 }}
          minimumValue={0}
          maximumValue={1}
          step={0.01}
          value={opacity}
          onValueChange={setOpacity}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  overlayImage: {
    position: 'absolute',
    width,
    height,
  },

  controls: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 40,
    backgroundColor: 'rgba(0,0,0,0.65)',
    padding: 12,
    borderRadius: 12,
  },
});