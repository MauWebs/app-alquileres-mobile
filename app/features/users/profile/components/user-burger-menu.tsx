import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import React from "react";

const UserBurgerMenu = () => {
  return (
    <View style={styles.container}>
      <Link href="/features/users/settings/user-settings" style={styles.button}>
        <View style={styles.barsContainer}>
          <View style={styles.bar} />
          <View style={styles.bar} />
          <View style={styles.bar} />
        </View>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 13,
    right: 13,
    zIndex: 10,
    position: "absolute",
  },
  button: {
    padding: 10,
    backgroundColor: "#fff",
  },
  barsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 20,
  },
  bar: {
    width: 20,
    height: 3,
    marginTop: 4,
    backgroundColor: "#333",
    borderRadius: 1.5,
  },
});

export default UserBurgerMenu;
