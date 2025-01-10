import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "@/constants/Colors";
import React from "react";

const CARDS_OF_RENTALS = [
  {
    id: 1,
    beds: 3,
    stars: 4.0,
    price: 10000,
    location: "205 Liniers",
    name: "Necochea - Buenos Aires",
    bedTypes: ["Dúplex", "Matrimoniales", "Simples"],
    imageUrl:
      "https://media.admagazine.com/photos/62264b854838a4327ba39c1e/16:9/w_1600,c_limit/22-RDJ-HD.jpg",
  },
  {
    id: 2,
    beds: 2,
    stars: 3.5,
    price: 25000,
    location: "205 Liniers",
    name: "Necochea - Buenos Aires",
    bedTypes: ["Matrimoniales", "Simples"],
    imageUrl:
      "https://media.admagazine.com/photos/62264b854838a4327ba39c1e/16:9/w_1600,c_limit/22-RDJ-HD.jpg",
  },
  {
    id: 3,
    beds: 4,
    stars: 5.0,
    price: 15000,
    location: "205 Liniers",
    name: "Necochea - Buenos Aires",
    bedTypes: ["Dúplex", "Matrimoniales"],
    imageUrl:
      "https://media.admagazine.com/photos/62264b854838a4327ba39c1e/16:9/w_1600,c_limit/22-RDJ-HD.jpg",
  },
];

const renderStars = (stars: number) => {
  const fullStars = Math.floor(stars);
  const hasHalfStar = stars % 1 !== 0;
  const totalStars = 5;

  return (
    <View style={styles.starsContainer}>
      {Array.from({ length: totalStars }, (_, index) => {
        if (index < fullStars) {
          return <Text key={index}>⭐</Text>;
        } else if (index === fullStars && hasHalfStar) {
          return <Text key={index}>☆</Text>;
        } else {
          return <Text key={index}>☆</Text>;
        }
      })}
    </View>
  );
};

const RentalsCards = () => {
  return (
    <View style={styles.container}>
      {CARDS_OF_RENTALS.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.cardHeader}>
              <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
              <View style={styles.cardTextContent}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardLocation}>
                  Ubicación: {item.location}
                </Text>
                <Text style={styles.cardPrice}>
                  Precio: ${item.price.toLocaleString("es-AR")}
                </Text>
                <View style={styles.cardStars}>{renderStars(item.stars)}</View>
              </View>
            </View>
            <View style={styles.divider}></View>
            <Text style={styles.cardBedTypes}>
              Camas: {item.bedTypes.join(", ")}
            </Text>
            <Text style={styles.cardBeds}>Cantidad de camas: {item.beds}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 90,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#F9FAFB",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    borderWidth: 1.2,
    borderColor: colors.neutral,
  },
  cardContent: {
    padding: 8,
  },
  cardHeader: {
    flexDirection: "row",
    marginBottom: 10,
  },
  cardImage: {
    width: 120,
    height: 120,
    borderWidth: 1.3,
    marginRight: 16,
    borderRadius: 8,
    borderColor: colors.neutral,
  },
  cardTextContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardLocation: {
    fontSize: 14,
    color: "#888",
    marginBottom: 4,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardStars: {
    flexDirection: "row",
    marginBottom: 4,
  },
  cardBeds: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 2,
  },
  cardBedTypes: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  divider: {
    height: 1,
    backgroundColor: "#E4E7EC",
    marginVertical: 8,
  },
  starsContainer: {
    flexDirection: "row",
  },
});

export default RentalsCards;
