import { colors, background } from "../../../../constants/Colors";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";

const UserSettings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="/features/users/profile/pages/profile">
          <Ionicons name="arrow-back" size={24} style={styles.arrowBack} />
        </Link>
        <Text style={styles.title}>Configuraciones</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.linkContainer}>
        <View style={styles.linkItem}>
          <Link href="/features/users/profile/pages/profile" style={styles.link}>
            Inicio
          </Link>
        </View>

        <View style={styles.linkItem}>
          <Link href="/features/users/profile/pages/profile" style={styles.link}>
            Perfil
          </Link>
        </View>
        <View style={styles.linkItem}>
          <Link href="/features/users/profile/pages/profile" style={styles.link}>
            Cerrar Seción
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
  },
  header: {
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  linkContainer: {
    borderRadius: 5,
    backgroundColor: background,
  },
  linkItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    position: "relative",
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral,
  },
  link: {
    flex: 1,
    fontSize: 18,
    color: "#333",
    paddingLeft: 25,
  },
  arrowBack: {
    marginTop: 3,
    color: "#000",
  },
  divider: {
    height: 1,
    marginHorizontal: -40,
    backgroundColor: colors.neutral,
  },
});

export default UserSettings;
