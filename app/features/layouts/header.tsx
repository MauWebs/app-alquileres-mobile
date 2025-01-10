import { View, StyleSheet } from "react-native";
import { colors } from "../../../constants/Colors";
import { Link } from "expo-router";
import React from "react";

export default function Header() {
  return (
    <View style={styles.container}>
      <Link style={styles.text} href="/">
        ¡Genera dinero a partir de tus propiedades y alquileres!
      </Link>
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
