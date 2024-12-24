import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskGrid = ({ tasks }) => (
  <View style={styles.container}>
    {tasks.map((task, index) => (
      <View key={index} style={styles.gridItem}>
        <Text>{task}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    margin: 5,
    width: '45%', // Adjust for two columns
    alignItems: 'center',
  },
});

export default TaskGrid;
