import {useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Task from './components/task';

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

        <View>
          <View style={styles.items}>
            {taskItems.map((item,index)=>{
              return(
<TouchableOpacity key={index} style={styles.todocard}>
  <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
    <Image source={require('./images/deleteicon.png')}
    style = {{width:25,height:25}}/>
  </TouchableOpacity>
  <Task text={item}/>
</TouchableOpacity>
              )
            })}
          </View>
        </View>
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

  removeall: {
    flex: 0,
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    margin: 10,
  },

  removealltext: {
    fontSize: 17,
    fontWeight: '700',
    backgroundColor:"red",
    color:"white",
    width:110,
    textAlign:'center',
    padding:5,
    borderRadius:10,
    marginLeft:140,
    marginTop:10,
  },
});
