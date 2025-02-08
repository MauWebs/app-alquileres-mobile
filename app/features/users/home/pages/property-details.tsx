import { colors } from "@/constants/Colors";
import {
  View,
  Text,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { Link } from "expo-router";
import React, { useState } from "react";

const CONTACT_INFORMATION = {
  name: "Juan Pérez",
  email: "juanperez@email.com",
  phone: "+54 9 11 1234 5678",
};

const PROPERTY_INFORMATION = [
  {
    beds: 3,
    stars: 4.5,
    price: 50000,
    location: "205 Liniers",
    name: "Necochea - Buenos Aires",
    bedTypes: ["Dúplex", "Matrimoniales", "Simples"],
    imageUrl:
      "https://media.admagazine.com/photos/62264b854838a4327ba39c1e/16:9/w_1600,c_limit/22-RDJ-HD.jpg",
    description:
      "Hermosa propiedad con vista al mar, ideal para vacaciones. Equipada con todas las comodidades necesarias para una estadía placentera.",
  },
];

const REVIEWS = [
  {
    id: 1,
    user: "María Gómez",
    comment:
      "Hermoso lugar, la vista es increíble y la atención fue excelente.",
    rating: 5,
  },
  {
    id: 2,
    user: "Carlos Rodríguez",
    comment: "Muy cómodo y bien ubicado. Volvería sin dudarlo.",
    rating: 4,
  },
  {
    id: 3,
    user: "Ana López",
    comment: "La casa estaba limpia y bien equipada. Ideal para una escapada.",
    rating: 4.5,
  },
];

const PropertyDetails = () => {
  const property = PROPERTY_INFORMATION[0];
  const [modalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(0);

  const handleReserve = () => {
    Alert.alert(
      "Reserva confirmada",
      "¡Gracias por tu interés! Nos pondremos en contacto contigo."
    );
  };

  const handleThreeDots = () => {
    setModalVisible(true);
  };

  const handleRating = (rate: React.SetStateAction<number>) => {
    setRating(rate);
    setModalVisible(false);
    Alert.alert(
      "Calificación guardada",
      `Tu calificación es: ${rate} estrellas`
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.backButtonContainer}>
        <Link href="/features/users/home/pages/home" style={styles.backButton}>
          <Text style={styles.backButtonText}>🡠 Volver hacia atrás</Text>
        </Link>
      </View>

      <View style={styles.imageContainer}>
        <Image source={{ uri: property.imageUrl }} style={styles.image} />
      </View>

      <View style={styles.contactContainer}>
        <View style={styles.contactRow}>
          <Text style={styles.contactTitle}>📞 Información de Contacto</Text>
          <Link href="/features/users/profile/pages/profile">
            <Text style={[styles.viewProfileText, { color: colors.primary }]}>
              Ver perfil 🡢
            </Text>
          </Link>
        </View>
        <Text style={styles.contactText}>✉️ {CONTACT_INFORMATION.email}</Text>
        <Text style={styles.contactText}>📱 {CONTACT_INFORMATION.phone}</Text>
        <Text style={styles.contactText}>👤 {CONTACT_INFORMATION.name}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.propertyHeader}>
          <Text style={styles.title}>{property.name}</Text>
          <TouchableOpacity
            onPress={handleThreeDots}
            style={styles.threeDotsButton}
          >
            <Text style={styles.threeDots}>{".\n.\n."}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.location}>📍 {property.location}</Text>
        <Text style={styles.stars}>⭐ {property.stars} estrellas</Text>
        <Text style={styles.price}>
          💰 ${property.price.toLocaleString("es-AR")} por día
        </Text>
        <Text style={styles.description}>{property.description}</Text>
        <Text style={styles.bedTypes}>
          🛏️ Tipos de camas: {property.bedTypes.join(", ")}
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleReserve}>
          <Text style={styles.buttonText}>Reservar ahora</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Califica esta propiedad:</Text>
              {[1, 2, 3, 4, 5].map((rate) => (
                <TouchableOpacity
                  key={rate}
                  style={styles.starButton}
                  onPress={() => handleRating(rate)}
                >
                  <Text style={styles.starButtonText}>⭐ {rate} estrellas</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <View style={styles.reviewsContainer}>
        <Text style={styles.reviewsTitle}>Reseñas de la propiedad:</Text>
        {REVIEWS.map((review) => (
          <View key={review.id} style={styles.reviewItem}>
                  <View style={styles.divider} />
            <Text style={styles.reviewUser}>{review.user}</Text>
            <Text style={styles.stars}>⭐ {review.rating} estrellas</Text>
            <Text style={styles.reviewComment}>{review.comment}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  divider: {
    height: 1,    
    backgroundColor: colors.neutral, 
    marginVertical: 10, 
    marginHorizontal: -16,  
  },
  
  backButtonContainer: {
    padding: 16,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.neutral,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: "bold",
  },
  imageContainer: {
    padding: 16,
    width: "100%",
    alignItems: "center",
  },
  image: {
    height: 250,
    width: "100%",
    borderWidth: 1,
    borderRadius: 20,
    alignSelf: "center",
    borderColor: colors.neutral,
  },
  detailsContainer: {
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
    margin: 16,
    marginTop: 0,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: colors.neutral,
  },
  propertyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.black,
  },
  threeDotsButton: {
    padding: 10,
  },
  threeDots: {
    fontSize: 36,
    color: colors.primary,
    textAlign: "center",
    lineHeight: 10,
    marginBottom: 20,
  },
  location: {
    fontSize: 18,
    color: "#555555",
    marginVertical: 4,
  },
  price: {
    fontSize: 22,
    color: "#315ccd",
    marginVertical: 4,
    fontWeight: "bold",
  },
  stars: {
    fontSize: 18,
    color: "#f0ad4e",
    marginVertical: 4,
  },
  description: {
    fontSize: 16,
    color: "#444444",
    marginVertical: 8,
  },
  bedTypes: {
    fontSize: 16,
    color: "#666666",
    fontStyle: "italic",
  },
  contactContainer: {
    padding: 16,
    margin: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 16,
    marginTop: 0,
    borderWidth: 1,
    borderColor: colors.neutral,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: colors.black,
  },
  contactText: {
    fontSize: 16,
    color: "#333333",
    marginBottom: 4,
  },
  viewProfileText: {
    fontSize: 16,
    paddingRight: 5,
    paddingBottom: 5,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#0275d8",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 13,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.white,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    padding: 20,
    alignItems: "center",
    width: 300,
    borderWidth: 1,
    borderRadius: 16,
    marginBottom: 20,
    borderColor: colors.neutral,
    backgroundColor: colors.white,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  starButton: {
    marginBottom: 10,
  },
  starButtonText: {
    fontSize: 18,
    paddingVertical: 7,
    color: colors.black,
  },
  reviewsContainer: {
    padding: 16,
    margin: 16,
    borderWidth: 1,
    borderRadius: 16,
    marginBottom: 80,
    borderColor: colors.neutral,
    backgroundColor: colors.white,
  },
  reviewsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: colors.black,
  },
  reviewItem: {
    marginBottom: 10,
  },
  reviewUser: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.black,
  },
  reviewComment: {
    fontSize: 14,
    color: colors.black,
  },
});

export default PropertyDetails;
