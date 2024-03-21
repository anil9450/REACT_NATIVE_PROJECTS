import React from "react";
import {View,Text,StyleSheet} from "react-native";

const Task = (props) => {
  return(
    <View style={StyleSheet.item}>
        <Text style={style.itemText}>{props.text}</Text>
    </View>
  )  
}

export default Task;