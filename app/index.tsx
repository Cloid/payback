import { Button, Text, View, FlatList, StyleSheet, Dimensions } from "react-native";
import CircleAddButton from '../components/CircleAddButton'
import DropDownMenu from "@/components/DropDownMenu";
export default function Index() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    itemContainer: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    location: {
      fontSize: 16,
      color: '#555',
    },
    time: {
      fontSize: 14,
      color: '#888',
    },
    circleAddButton: {
      position: "absolute",
      bottom: 30,  // Adjust the distance from the bottom of the screen
      right: 30,   // Adjust the distance from the right side of the screen
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:100,
      height:100,
      backgroundColor:'#fff',
      borderRadius:50,
    },
  });

  const { width, height } = Dimensions.get('window');

  const dummyData = [
    { key: 'Devin', location: 'Los Angeles', time: '2024-08-08 12:00 PM' },
    { key: 'Dan', location: 'New York', time: '2024-08-08 1:00 PM' },
    { key: 'Dominic', location: 'San Francisco', time: '2024-08-08 2:00 PM' },
  ];

  const handleDropdownTriggerPress = (key: string) => {
    console.log('dd trigger pressed ', key);
  };

  return (
    <View
      style={styles.container}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { paddingVertical: 5}]}>
            <Text style={styles.name}>{item.key}</Text>
            <Text style={styles.location}>{item.location}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
      <View
      style={styles.circleAddButton}>
      <DropDownMenu
        onSelect={handleDropdownTriggerPress}
        items={[
          { key: '1', title: 'Camera', icon: 'home-outline' },
          { key: '2', title: 'Photo', icon: 'settings-outline' },
          { key: '3', title: 'Manual', icon: 'settings-outline' },
        ]}
      />
      </View>
    </View>
  );
}
