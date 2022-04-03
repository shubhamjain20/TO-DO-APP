import {
  Button,
  StyleSheet,
  TextInput,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Dimensions,
  SafeAreaView,
  Scroll,
  Alert
} from "react-native";
import { useState } from "react";
// import {MaterialIcons} from '@expo/vector-icons';



const wWidth = Dimensions.get("window").width;

export default function TextInputComp() {

  const [mainText, setMainText] = useState("");
  const [notes, setNotes] = useState([]);


  function updateNoteTextInput(e) {
    setMainText(e);
  }

  function updateNotesList() {

    if(mainText == ""){
     Alert.alert("Error","Note content cannot be empty!",[
       {text:"ok",onPress:()=>{console.log("bye")}},
       
     ]);
     return;
    }
    setNotes([{ val: mainText, id: Math.random() }, ...notes]);
    setMainText("");
  }

  function deleteNote(noteId){
    
    setNotes(notes.filter((note)=>{
      return note.id!=noteId;
    }));

  }

  return (
    <View style={styles.textInputCompStyle}>
      <TextInput
        
        multiline={true}
        numberOfLines={5}
        style={styles.textInputStyle}
        onChangeText={updateNoteTextInput}
        value={mainText}
      ></TextInput>

      
      
      <Pressable style={styles.btnStyle} onPress={updateNotesList}>
      <Text style={styles.btnText}>Add Note</Text>
    </Pressable>

  <View style={styles.mainListContainer}>

      <FlatList
      
        keyExtractor={(item) => item.id}
        data={notes}
        renderItem={({ item }) => (
        
          <TouchableOpacity onLongPress={()=>deleteNote(item.id) }>
            <View style={styles.singleItem}>
            {/* <MaterialIcons name="delete"></MaterialIcons> */}
            <Text style={styles.noteStyle}>{item.val}</Text>
            </View>
         </TouchableOpacity>
          
        )}
      ></FlatList>
  </View>

    </View>
  );
}

const styles = StyleSheet.create({
  textInputCompStyle:{
   flex:1,
   
   alignItems:"center"
  },
  textInputStyle: {
    textAlignVertical:"top",
    padding:10,
    borderWidth: 1,
    fontSize: 20,
    borderColor: "black",
    width: 300,
    marginTop:10
  },
  noteStyle: {
    textAlign:"center",
    color: "black",
    fontSize: 18,
  },
  
  singleItem:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    backgroundColor: "#fafafa",
    borderWidth: 2,
    width:wWidth - 10,
    borderColor: "grey",
    borderRadius:5,
    padding: 10,
    margin: 5
    
  },
  btnStyle:{
    backgroundColor:"red",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    padding:10,
    width:80,
    marginTop:10

  },
  btnText:{
    color:"white"
  },
  mainListContainer:{
    marginTop:10,
    flex:1
  }
 
});
