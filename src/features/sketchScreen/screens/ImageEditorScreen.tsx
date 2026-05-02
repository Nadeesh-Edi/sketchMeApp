import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ViewShot from 'react-native-view-shot';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';

import { Canvas, Image as SkiaImage, useImage } from '@shopify/react-native-skia';
import { ColorMatrix } from '@shopify/react-native-skia';

const GREYSCALE_MATRIX = [
  0.299, 0.587, 0.114, 0, 0,
  0.299, 0.587, 0.114, 0, 0,
  0.299, 0.587, 0.114, 0, 0,
  0, 0, 0, 1, 0,
];

function GrayscaleImage({ uri }: { uri: string }) {
  const image = useImage(uri);
  
  if (!image) {
    return null;
  }

  return (
    <Canvas style={styles.canvas}>
      <SkiaImage image={image} x={0} y={0} width={300} height={300}>
        <ColorMatrix matrix={GREYSCALE_MATRIX} />
      </SkiaImage>
    </Canvas>
  );
}

export default function ImageEditorScreen({ route }: any) {
  const { imageUri } = route.params;

  const viewRef = useRef<ViewShot>(null);
  const [processedUri, setProcessedUri] = useState<string | null>(null);

  const captureImage = async () => {
    if (!viewRef.current) return;

    const uri = await viewRef.current.capture?.();
    if (uri) {
      setProcessedUri(uri);
    }
  };

  const saveToGallery = async () => {
    if (!processedUri) return;
    await CameraRoll.save(processedUri, { type: 'photo' });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sketch Preview</Text>

      <ViewShot ref={viewRef} options={{ format: 'png', quality: 1 }}>
        <View style={styles.previewBox}>
          <GrayscaleImage uri={imageUri} />
        </View>
      </ViewShot>

      <Button title="Generate Sketch Image" onPress={captureImage} />

      {processedUri && (
        <>
          <Text style={{ marginTop: 10 }}>Final Image:</Text>

          <Image source={{ uri: processedUri }} style={styles.image} />

          <Button title="Save to Gallery" onPress={saveToGallery} />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 18, marginBottom: 10 },
  previewBox: {
    width: 300,
    height: 300,
    backgroundColor: 'white',
  },
  canvas: {
    width: 300,
    height: 300,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});