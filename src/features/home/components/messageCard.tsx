import { StyleSheet } from "react-native";
import { Card, Text, useTheme } from "react-native-paper";

export default function MessageCard({ title, message }: { title: string, message: string }) {
    const theme = useTheme();

    return (
        <Card mode="contained" style={{ marginTop: 30 }}>
            <Card.Content style={styles.card}>
                <Text style={[styles.title, { color: theme.colors.primary }]}>{title}</Text>
                <Text style={styles.message}>{message}</Text>
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 15,
    },
    title: {
        fontSize: 14,
        marginBottom: 5,
    },
    message: {
        fontStyle: 'italic',
    }
})