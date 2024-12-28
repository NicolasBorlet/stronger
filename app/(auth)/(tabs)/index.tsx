import Banner from '@/components/Banner';
import Card from '@/components/card';
import Header from '@/components/Header';
import { VStack } from '@/components/ui/vstack';
import { ScrollView, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <>
        <Header />
        <ScrollView>
            <Banner />
            <VStack style={{ flex: 1, padding: 20 }}>
                <Card title='Today recovery' link='/recovery'>
                    <Text>Hello</Text>
                </Card>
            </VStack>
        </ScrollView>
    </>
  );
}
