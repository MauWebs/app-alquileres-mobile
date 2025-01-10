import { View, Text, StyleSheet } from "react-native";
import { colors } from "@/constants/Colors";

export default function PropertyAddHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Añade propiedades y observa los resultados!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 8,
  },
  text: {
    fontWeight: "600",
    color: colors.white,
    textAlign: "center",
    fontSize: 13.5,
    margin: 0,
  },
});