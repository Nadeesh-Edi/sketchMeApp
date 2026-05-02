import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Button, Card, Text } from "react-native-paper";
import { launchImageLibrary, launchCamera, Asset } from "react-native-image-picker";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { commonStyles } from "../../../common/styles";
import { PreferencesContext } from "../../../theme/PreferencesContext";
import type { RootStackParamList } from "../../../navigation/types";

export default function NewDrawingCard() {
  const { isThemeDark } = React.useContext(PreferencesContext);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleUploadImage = async () => {
    const result = await launchImageLibrary({
      mediaType: "photo",
      selectionLimit: 1,
    });

    if (result.assets && result.assets.length > 0) {
      const asset: Asset = result.assets[0];
      if (asset.uri) {
        navigation.navigate("ImageEditorScreen", { imageUri: asset.uri });
      }
    }
  };

  const handleTakePhoto = async () => {
    const result = await launchCamera({
      mediaType: "photo",
      cameraType: "back",
      saveToPhotos: true,
    });

    if (result.assets && result.assets.length > 0) {
      const asset: Asset = result.assets[0];
      if (asset.uri) {
        navigation.navigate("ImageEditorScreen", { imageUri: asset.uri });
      }
    }
  };

  return (
    <View style={{marginTop: 50}}>
      <Card>
        <Card.Content style={styles.mainCard}>
          <Image 
            source={require('../../../../assets/images/imagePick.png')} 
            style={styles.pickImage}
            />
            <Text style={styles.title}>New Drawing</Text>
            <Text style={[commonStyles.descriptionText, { textAlign: 'center' }]}>Import an image or start from a blank canvas</Text>

            <Button 
              mode="contained" 
              icon="upload" 
              style={styles.uploadButton} 
              buttonColor={isThemeDark ? "#FFFFFF" : "#000000"} 
              textColor={isThemeDark ? "#000000" : "#FFFFFF"}
              rippleColor="#777777"
              onPress={handleUploadImage}
            >
              UPLOAD IMAGE
            </Button>
            <Button 
              mode="outlined" 
              icon="camera" 
              style={styles.takePhotoButton} 
              textColor={isThemeDark ? "#FFFFFF" : "#000000"} 
              rippleColor="#777777"
              onPress={handleTakePhoto}
            >
              TAKE PHOTO
            </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
    mainCard: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    pickImage: {
        width: 70,
        height: 70,
    },
    title: {
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 10,
    },
    uploadButton: {
      marginTop: 30,
      borderRadius: 5,
    },
    takePhotoButton: {
      marginTop: 15,
      borderRadius: 5,
    }
})