import {useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task) {
      setTaskItems([...taskItems, task]);
      setTask(null);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{flexGrow: 1}}>
        <Text
          style={{
            backgroundColor: '#0AD6A0',
            marginTop: 25,
            textAlign: 'center',
            fontSize: 20,
            padding: 10,
            fontWeight: '700',
          }}>
          My ToDo App
        </Text>

        <TouchableOpacity style={styles.removealltext}>
          <Text style={styles.removealltext}>Remove All</Text>
        </TouchableOpacity>
      </ScrollView>

      <KeyboardAvoidingView style={StyleSheet.writeTaskWrapper}>
        <TextInput
          placeholder="Enter your Task"
          style={styles.inputbox}
          value="task"
          onChangeText={text => {
            setTask(text);
          }}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <Image source={require('./images/plus.png')} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    /* alignItems: 'center', */
  },
  removealltext:{
    fontSize: 17,

  }
});
