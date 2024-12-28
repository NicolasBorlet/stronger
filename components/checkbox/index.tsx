import { View, Text } from "react-native"
import { VStack } from "../ui/vstack"
import { CheckIcon, Icon } from "../ui/icon"
import { Colors } from "@/constants/Colors"

const colors = {
    checked: {
        bg: '#FFFFFF',
        border: '#FFFFFF'
    },
    unchecked: {
        bg: 'transparent',
        border: '#FFFFFF'
    }
}

export default function Checkbox ({
    checked,
    date,
    onPress,
}: {
    checked: boolean,
    date: string,
    onPress?: () => void,
}) {
    return (
        <VStack style={{ alignItems: 'center', gap: 6 }}>
            <View style={{
                width: 32,
                height: 32,
                borderRadius: 999,
                borderWidth: 1,
                borderColor: checked ? colors.checked.border : colors.unchecked.border,
                backgroundColor: checked ? colors.checked.bg : colors.unchecked.bg,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {checked && <Icon as={CheckIcon} size="sm" color={Colors.light.text} />}
            </View>
            <Text style={{ color: '#FFFFFF' }}>{date}</Text>
        </VStack>
    )
}
