import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Button, Card, Text } from "react-native-paper";
import { commonStyles } from "../../../common/styles";
import { PreferencesContext } from "../../../theme/PreferencesContext";

export default function NewDrawingCard() {
  const { isThemeDark } = React.useContext(PreferencesContext);

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
            >
              UPLOAD IMAGE
            </Button>
            <Button 
              mode="outlined" 
              icon="camera" 
              style={styles.takePhotoButton} 
              textColor={isThemeDark ? "#FFFFFF" : "#000000"} 
              rippleColor="#777777"
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