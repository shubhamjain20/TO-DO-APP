import { StyleSheet,Dimensions,View,Text } from "react-native";

const width1 = Dimensions.get("window").width;

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Notes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:"orange",
        width:width1,
        height:50,
        marginTop:30,
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        borderWidth:1,
        
      },
      headerText:{
        fontSize:24
      }
    }
);