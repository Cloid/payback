import { Stack, Tabs } from "expo-router";
import { Colors } from '@/constants/Colors';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useColorScheme } from '@/hooks/useColorScheme';


export default function RootLayout() {
  // TODO: Fix header shown or make it dynamic?
  return (
    <Tabs
    screenOptions={{
      headerShown: true,
    }}>
    <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
        headerTitleAlign: 'left',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="explore"
      options={{
        title: 'Explore',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
        ),
      }}
    />
  </Tabs>
  );
}
