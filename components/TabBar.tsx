import { View, StyleSheet } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { PlatformPressable } from '@react-navigation/elements';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { IconSymbol } from './ui/IconSymbol';

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  const handlePlusPress = () => {
    console.log('Plus pressed');
  };

  return (
    <View style={styles.tabbar}>
      {/* Routes normales */}
      {state.routes.map((route, index) => (
        <TabButton
          key={route.key}
          route={route}
          isFocused={state.index === index}
          descriptors={descriptors}
          navigation={navigation}
          buildHref={buildHref}
          colors={colors}
        />
      ))}

      {/* Bouton plus */}
      <PlatformPressable
        onPress={handlePlusPress}
        style={styles.plusButton}
      >
        <IconSymbol
          size={28}
          name="plus"
          color="#FFFFFF"
        />
      </PlatformPressable>
    </View>
  );
}

// Composant helper pour les boutons de tab
function TabButton({ route, isFocused, descriptors, navigation, buildHref, colors }) {
  const { options } = descriptors[route.key];

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name, route.params);
    }
  };

  return (
    <PlatformPressable
      href={buildHref(route.name, route.params)}
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      style={styles.tab}
    >
      <IconSymbol
        size={28}
        name={route.name === 'index' ? 'house.fill' : 'paperplane.fill'}
        color={isFocused ? colors.primary : colors.text}
      />
    </PlatformPressable>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FDFAF9',
    marginHorizontal: 50,
    borderRadius: 100,
    padding: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  plusButton: {
    width: 84,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#00382F',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
