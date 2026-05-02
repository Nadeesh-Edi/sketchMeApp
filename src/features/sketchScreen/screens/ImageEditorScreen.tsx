import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ViewShot from 'react-native-view-shot';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';

import { Canvas, Image as SkiaImage, useImage } from '@shopify/react-native-skia';
import { ColorMatrix } from '@shopify/react-native-skia';
import { Button, Card, Text, useTheme } from 'react-native-paper';
import Header from '../../../common/components/header';
import { commonStyles } from '../../../common/styles';
import { PreferencesContext } from '../../../theme/PreferencesContext';

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
  const theme = useTheme();
  const { imageUri } = route.params;
  const { isThemeDark } = React.useContext(PreferencesContext);

  const viewRef = useRef<ViewShot>(null);
  const [processedUri, setProcessedUri] = useState<string | null>(null);

  const captureImage = async () => {
    if (!viewRef.current) return;

    const uri = await viewRef.current.capture?.();
    if (uri) {
      setProcessedUri(uri);
    }
    return uri;
  };

  const saveToGallery = async () => {
    if (!processedUri) return;
    await CameraRoll.save(processedUri, { type: 'photo' });
  };



  return (
    <SafeAreaView>
      <Header />
      <View style={commonStyles.page}>
        <Text style={[styles.subTitle, { color: theme.colors.primary }]}>PROCESSING COMPLETE</Text>
        <Text style={commonStyles.mainTitle}>Sketch Preview</Text>

        <Card style={{ marginTop: 20 }} mode='contained'>
          <Card.Content style={{ alignItems: 'center' }}>
            <ViewShot ref={viewRef} options={{ format: 'png', quality: 1 }}>
              <View style={styles.previewBox}>
                <GrayscaleImage uri={imageUri} />
              </View>
            </ViewShot>
          </Card.Content>
        </Card>

        <Button 
          icon="download" 
          onPress={saveToGallery} 
          mode='contained' 
          style={styles.operationButton}
          buttonColor={isThemeDark ? "#FFFFFF" : "#000000"} 
          textColor={isThemeDark ? "#000000" : "#FFFFFF"} >
          Download Sketch
        </Button>

        <Button icon="draw" onPress={captureImage} mode='contained' style={styles.operationButton} >
          Start sketching
        </Button>

        {/* {processedUri && (
        <>
          <Text style={{ marginTop: 10 }}>Final Image:</Text>

          <Image source={{ uri: processedUri }} style={styles.image} />

          <Button icon="content-save" onPress={saveToGallery} >
            Save to Gallery
          </Button>
        </>
      )} */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
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
  subTitle: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  operationButton: {
    marginTop: 10,
    borderRadius: 5,
  },
});