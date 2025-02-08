import { View, StyleSheet, Text, Image } from "react-native";
import UserBurgerMenu from "../components/user-burger-menu";
import { colors } from "@/constants/Colors";
import { Link } from "expo-router";
import React from "react";

const UserData = {
  name: "Mau Webs",
  phone: "+54 1234-5678",
  profession: "Programador Full-Stack",
  location: "Buenos Aires, Argentina",
  email: "mauriciovidalwebs@gmail.com",
  bio: "Desarrollando un software mobile con la herramienta React Native.",
  avatarUrl: "https://avatars.githubusercontent.com/u/114698133?v=4",
};

const UserProfileData = () => {
  return (
    <View style={styles.container}>
      <UserBurgerMenu />
      <View style={styles.topSection}>
        <Image source={{ uri: UserData.avatarUrl }} style={styles.avatar} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{UserData.name}</Text>
          <Text style={styles.profession}>💻 {UserData.profession}</Text>
          <Text style={styles.bio}>{UserData.bio}</Text>
        </View>
        <Link href="/features/users/profile/pages/profile-edit">
          <View style={styles.editButton}>
            <Text style={styles.editButtonText}>Editar</Text>
          </View>
        </Link>
      </View>
      <View style={styles.fullWidthDivider}>
        <View style={styles.bottomInfo}>
          <Text style={styles.info}>📞 {UserData.phone}</Text>
          <Text style={styles.info}>🌍 {UserData.location}</Text>
          <Text style={styles.info}>📧 {UserData.email}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.white,
    position: "relative",
  },
  topSection: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 25,
    position: "relative",
  },
  avatar: {
    width: 100,
    height: 100,
    marginRight: 20,
    borderRadius: 50,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    marginTop: 9,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  bio: {
    paddingVertical: 4,
    fontSize: 12,
    color: "#777",
  },
  profession: {
    fontSize: 13,
    paddingVertical: 4.5,
    fontWeight: "bold",
    color: "#777",
  },
  fullWidthDivider: {
    marginHorizontal: -20,
    backgroundColor: "#F9FAFB",
  },
  bottomInfo: {
    flexDirection: "column",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.neutral,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  info: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  editButton: {
    position: "absolute",
    top: 10,
    right: 50,
    backgroundColor: colors.primary,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  editButtonText: {
    color: colors.white,
    fontWeight: "bold",
  },
});

export default UserProfileData;
