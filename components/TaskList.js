import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskList = ({ tasks }) => (
  <View style={styles.container}>
    {tasks.map((task, index) => (
      <Text key={index} style={styles.task}>
        {task}
      </Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});

export default TaskList;
