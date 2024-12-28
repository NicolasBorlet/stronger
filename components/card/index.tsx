import { ReactNode } from "react";
import { VStack } from "../ui/vstack";
import { Pressable, StyleSheet, Text } from "react-native";
import { HStack } from "../ui/hstack";
import { ArrowRightIcon } from "../ui/icon";
import { router } from "expo-router";

export default function Card({ children, title, link }: {
    children: ReactNode,
    title: string,
    link?: string
}) {
    return (
        <Pressable onPress={() => {
            if (link) {
                router.push(link as any);
            }
        }}>
            <VStack style={styles.container}>
                <HStack style={{ justifyContent: 'space-between' }}>
                    <Text style={styles.title}>
                    {title}
                </Text>
                {link && <ArrowRightIcon />}
            </HStack>
            {children}
        </VStack>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        padding: 12,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3.84,
        elevation: 3,
        gap: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})
