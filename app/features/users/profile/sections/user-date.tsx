import { View, StyleSheet, Text, Image } from "react-native";
import UserBurgerMenu from "../components/user-burger-menu";
import { colors } from "@/constants/Colors";
import React from "react";

const UserData = {
  name: "Mau Webs",
  phone: "+54 1234-5678",
  profession: "Programador Full-Stack",
  location: "Buenos Aires, Argentina",
  email: "mauriciovidalwebs@gmail.com",
  bio: "Desarrollando un software mobile con la herramienta React Native.",
  avatarUrl:
    "https://instagram.faep1-1.fna.fbcdn.net/v/t51.2885-19/310831180_473983567994195_8663720639638480679_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.faep1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=Thi8ttUheWIQ7kNvgEikfPd&_nc_gid=d3d3c04e84944e28aefb42eecbc70767&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYCWBHV75gEXX-CwXnPQH1l4dazfKBYMNNFCWVKmQMpHlg&oe=676CCCC1&_nc_sid=7a9f4b",
};

const UserProfileData = () => {
  return (
    <View style={styles.container}>
      <UserBurgerMenu />
      <View style={styles.topSection}>
        <Image source={{ uri: UserData.avatarUrl }} style={styles.avatar} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{UserData.name}</Text>
          <Text style={styles.profession}>{UserData.profession}</Text>
          <Text style={styles.bio}>{UserData.bio}</Text>
        </View>
      </View>
      <View style={styles.fullWidthDivider}>
        <View style={styles.bottomInfo}>
          <Text style={styles.info}>{UserData.phone}</Text>
          <Text style={styles.info}>{UserData.location}</Text>
          <Text style={styles.info}>{UserData.email}</Text>
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
});

export default UserProfileData;
