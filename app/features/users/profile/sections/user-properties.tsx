import { View, StyleSheet, Image } from "react-native";
import React from "react";

const userPropertiesData = [
  { id: 1, imageUrl: "https://via.placeholder.com/150" },
  { id: 2, imageUrl: "https://via.placeholder.com/150" },
  { id: 3, imageUrl: "https://via.placeholder.com/150" },
  { id: 4, imageUrl: "https://via.placeholder.com/150" },
  { id: 5, imageUrl: "https://via.placeholder.com/150" },
  { id: 6, imageUrl: "https://via.placeholder.com/150" },
];

const UserProperties = () => {
  return (
    <View style={styles.container}>
      {userPropertiesData.map((property) => (
        <View key={property.id} style={styles.propertyItem}>
          <Image
            source={{ uri: property.imageUrl }}
            style={styles.propertyImage}
            resizeMode="cover"
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    marginBottom: 55,
  },
  propertyItem: {
    width: "44%",
    margin: 10,
    backgroundColor: "#F5F5F5",
    elevation: 5,
    shadowRadius: 5,
    shadowOpacity: 0.1,
    shadowColor: "#000",
    overflow: "hidden",
  },
  propertyImage: {
    width: "100%",
    height: 120,
  },
});

export default UserProperties;
