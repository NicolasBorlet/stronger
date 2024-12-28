import { buttonStyle } from "@/constants/Button";
import { Button, ButtonGroup, ButtonIcon, ButtonText } from "./ui/button";
import { HStack } from "./ui/hstack";
import { VStack } from "./ui/vstack";
import { Text, StyleSheet } from "react-native";

export default function Banner() {
    return (
        <VStack style={[styles.container]}>
            <HStack style={{ gap: 16 }}>
                <Text style={styles.globalText}>Full Body</Text>
                <Text style={styles.globalText}>Advanced</Text>
                <Text style={styles.globalText}>20 min</Text>
            </HStack>
            <Text style={[styles.globalText, { fontSize: 40, fontWeight: 'bold' }]}>Strength Training</Text>
            <ButtonGroup>
                <Button size="lg" style={buttonStyle.container}>
                    <ButtonText>Go to workout</ButtonText>
                    <ButtonIcon />
                </Button>
            </ButtonGroup>
        </VStack>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        padding: 20,
        minHeight: 350,
        justifyContent: 'flex-end',
        gap: 20,
    },
    globalText: {
        color: '#fff',
        fontSize: 16,
    }
})
