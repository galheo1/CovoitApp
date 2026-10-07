import { View, Text, StyleSheet } from "react-native";
import TripListScreen from "./TripListScreen";
export default function App() {
return (
<View style={styles.container}> 
<Text style={styles.title}>CovoitApp</Text>
<Text style={styles.subtitle}>Le covoiturage entre collègues</Text> 
<TripListScreen />
</View>

);
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
alignItems: "center",
backgroundColor: "#161B33",
},
title: { fontSize: 32, fontWeight: "bold", color: "#FFFFFF" },
subtitle: { fontSize: 16, color: "#AEB4D6", marginTop: 8 },


});