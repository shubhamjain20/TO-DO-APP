import {StyleSheet, Text, View,TouchableWithoutFeedback ,Keyboard} from "react-native";
import { YellowBox } from "react-native-web";

import Header from "./components/Header";
import TextInputComp from "./components/TextInputComp";


export default function App() {
  

  return (

    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>

      <View style={styles.container}>
      <Header />
      <TextInputComp />
      </View>
    </TouchableWithoutFeedback>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
    alignItems: "center",
  }

 
});
