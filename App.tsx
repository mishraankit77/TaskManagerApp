import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';


import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskGrid from './components/TaskGrid';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isGridView, setIsGridView] = useState(false); // Manage list/grid view state

  // Function to add a task
  const addTask = (task) => {
    if (task && typeof task === 'string') {
      setTasks((prevTasks) => [...prevTasks, task]);
    }
  };

  return (
    <View style={styles.container}>
      <TaskForm onAddTask={addTask} />

      <Button
        title={isGridView ? 'Switch to List View' : 'Switch to Grid View'}
        onPress={() => setIsGridView(!isGridView)}
        color={isGridView ? 'green' : 'blue'}
      />
      {isGridView ? <TaskGrid tasks={tasks} /> : <TaskList tasks={tasks} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;
