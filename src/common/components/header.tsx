import { Image, View } from "react-native";
import { Text, Appbar, IconButton } from "react-native-paper";
import { StyleSheet } from 'react-native';
import { PreferencesContext } from '../../theme/PreferencesContext';
import { useContext } from "react";

export default function Header() {
    const { toggleTheme, isThemeDark } = useContext(PreferencesContext);

    return (<View style={styles.header}>
        <View style={styles.leftContainer}>
            <Image
                source={require('../../../assets/images/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>SketchMe</Text>
        </View>
        <IconButton icon="brightness-6" onPress={() => toggleTheme()} />
    </View>);
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
        position: 'relative',
        width: '100%',
    },
    title: {
        fontSize: 20,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 20, // Set a specific width
        height: 20, // Set a specific height
        marginRight: 10, // Add spacing between image and text
        resizeMode: 'contain',
    },
});