import { useState } from 'react';
import {Image, StatusBar, TextInput, TouchableOpacity} from 'react-native';

import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

export default function App() {

  const [task,setTask] = useState();
  const [taskItems,setTaskItems] = useState([]);

  const handleAddTask = () => {
Keyboard.dismiss();
if(task){
  setTaskItems([...taskItems,task])
  setTask(null);
}
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={StyleSheet.writeTaskWrapper}>
        <TextInput
          placeholder="Enter your Task"
          style={styles.inputbox}
          value="task"
          onChangeText={text => {
            setTask(text);
          }}
        /> 

        <TouchableOpacity onPress={()=>handleAddTask()}>
          <Image source={require("./images/plus.png")}/>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({});
