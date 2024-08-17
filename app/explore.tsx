import { Button, Text, View } from "react-native";
import { Stack } from "expo-router";
import DropDownMenu from "@/components/DropDownMenu";
export default function Index() {

  const handleDropdownTriggerPress = (key: string) => {
    console.log('dd trigger pressed ', key);
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Stack.Screen
        options={{
          title: 'Home',
          headerRight: () => <DropDownMenu onSelect={handleDropdownTriggerPress} items={[
            {
              key: '1',
              title: 'About the app',
              icon: 'info.circle',
              iconAndroid: 'ic_dialog_info'
            },
            {
              key: '2',
              title: 'FAQ',
              icon: 'questionmark.circle',
              iconAndroid: 'btn_star'
            }
          ]}/>,
        }}
      />
    </View>
  );
}
