import { Image, View } from "react-native";
import { Text, Divider, IconButton } from "react-native-paper";
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PreferencesContext } from '../../theme/PreferencesContext';
import { useContext } from "react";

export default function Header({ isBackButton: _isBackButton = false }) {
    const navigation = useNavigation();
    const { toggleTheme } = useContext(PreferencesContext);

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <View>
            <View style={[styles.header, { paddingHorizontal: _isBackButton ? 5 : 20 }]}>
                <View style={styles.leftSection}>
                    { _isBackButton && <IconButton icon="chevron-left" onPress={goBack} size={30} /> }
                    <Image
                        source={require('../../../assets/images/logo.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.title}>SketchMe</Text>
                </View>
                <IconButton icon="brightness-6" onPress={() => toggleTheme()} />
            </View>
            <Divider />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
        width: '100%',
    },
    title: {
        fontSize: 20,
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 20,
        height: 20,
        marginRight: 10,
        resizeMode: 'contain',
    },
});