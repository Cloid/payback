import { Button, Text, View, FlatList, StyleSheet, Dimensions } from "react-native";

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
  });

  const { width, height } = Dimensions.get('window');

  const dummyData = [
    { key: 'Devin', location: 'Los Angeles', time: '2024-08-08 12:00 PM' },
    { key: 'Dan', location: 'New York', time: '2024-08-08 1:00 PM' },
    { key: 'Dominic', location: 'San Francisco', time: '2024-08-08 2:00 PM' },
  ];

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
      <Button
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
    </View>
  );
}
