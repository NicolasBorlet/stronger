import { VStack } from "./ui/vstack";
import { HStack } from "./ui/hstack";
import { Avatar, AvatarBadge, AvatarFallbackText, AvatarImage } from "./ui/avatar";
import { EditIcon, Icon } from "./ui/icon";
import { ScrollView, Text } from "react-native";
import { StyleSheet } from "react-native";
import Checkbox from "./checkbox";
import { formatDate, generateFakeDays } from "@/utils/Date";
import { useEffect, useRef } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Header() {
    const scrollViewRef = useRef<ScrollView>(null);
    const days = generateFakeDays();
    const insets = useSafeAreaInsets();

    useEffect(() => {
        setTimeout(() => {
            scrollViewRef.current?.scrollTo({
                x: 7 * 46,
                animated: false
            });
        }, 100);
    }, []);

    return (
        <VStack style={{ gap: 16 }}>
            <LinearGradient
                colors={['#F8F3ED', '#00382F']}
                style={styles.background}
            />
            <HStack style={{ justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: insets.top }}>
                <Avatar size="md">
                    <AvatarFallbackText>Jane Doe</AvatarFallbackText>
                    <AvatarImage
                        source={{
                        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                        }}
                    />
                </Avatar>
                <HStack style={{ alignItems: 'center', gap: 6 }}>
                    <Icon as={EditIcon} size="sm" color="#fff" />
                    <Text style={styles.streakText}>12 day streak</Text>
                </HStack>
                <Icon as={EditIcon} size="xl" color="#fff" />
            </HStack>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                contentContainerStyle={styles.scrollViewContent}
                showsHorizontalScrollIndicator={false}
            >
                <HStack style={{ alignItems: 'center', gap: 24 }}>
                    {days.map((day, index) => (
                        <Checkbox
                            key={index}
                            checked={day.checked}
                            date={formatDate(day.date)}
                        />
                    ))}
                </HStack>
            </ScrollView>
        </VStack>
    )
}

const styles = StyleSheet.create({
    streakText: {
        fontSize: 16,
        color: '#fff',
    },
    scrollViewContent: {
        gap: 10,
        paddingBottom: 20,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
      },
});
