import { StyleSheet, ScrollView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../navigation/types';
import React from 'react';
import Header from '../../../common/components/header';
import { commonStyles } from '../../../common/styles';
import NewDrawingCard from '../components/newDrawingCard';
import MessageCard from '../components/messageCard';

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const theme = useTheme();

  const messages = [
    {
      id: 1,
      title: "ARTIST PROMPT",
      message: "Try tracing a high contrast architectural photo to practice perspective today!"
    }
  ]

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={commonStyles.page}>
          <Text style={commonStyles.mainTitle}>
            Studio
          </Text>
          <Text style={commonStyles.descriptionText}>
            Capture a reference to begin your next masterpiece.
          </Text>
          <NewDrawingCard />

          {messages.map((msg) => {
            return (<MessageCard key={msg.id} title={msg.title} message={msg.message} />
            )
          })}

          <Button
            mode="contained"
            onPress={() => navigation.navigate('SketchScreen')}
            style={{ marginTop: 50 }}
          >
            Open Sketch
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
});