import * as ImagePicker from "expo-image-picker";
import { background, colors } from "@/constants/Colors";
import React, { useState } from "react";
import { Link } from "expo-router";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const UserData = {
  name: "Mau Webs",
  phone: "+54 1234-5678",
  profession: "Programador Full-Stack",
  location: "Buenos Aires, Argentina",
  email: "mauriciovidalwebs@gmail.com",
  bio: "Desarrollando un software mobile con la herramienta React Native.",
  avatarUrl: "https://avatars.githubusercontent.com/u/114698133?v=4",
};

const EditProfile = () => {
  const [profile, setProfile] = useState(UserData);
  const [photos, setPhotos] = useState<string[]>([]);

  const handleChange = (key: string, value: string) => {
    setProfile({ ...profile, [key]: value });
  };

  const handleSave = () => {
    console.log("Perfil actualizado:", profile);
  };

  const handlePhotoAdd = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      const newPhotos = result.assets.map((asset) => asset.uri);
      setPhotos([...photos, ...newPhotos]);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Link href="/features/users/profile/pages/profile">
        <View style={styles.backButton}>
          <Text style={styles.backButtonText}>🡠 Volver hacia atrás</Text>
        </View>
      </Link>

      <View style={styles.avatarContainer}>
        <Image source={{ uri: profile.avatarUrl }} style={styles.avatar} />
        <TouchableOpacity style={styles.photoButton} onPress={handlePhotoAdd}>
          <Text style={styles.buttonText}>Añadir foto</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        {[
          { label: "🪪 Nombre", key: "name" },
          { label: "📞 Teléfono", key: "phone" },
          { label: "💼 Profesión", key: "profession" },
          { label: "📍 Ubicación", key: "location" },
          { label: "📧 Email", key: "email" },
          { label: "📝 Biografía", key: "bio", multiline: true },
        ].map(({ label, key, multiline }) => (
          <View key={key} style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
              style={[styles.input, multiline && styles.textArea]}
              value={profile[key] }
              onChangeText={(text) => handleChange(key, text)}
              multiline={multiline}
              numberOfLines={multiline ? 4 : 1}
            />
          </View>
        ))}

        <TouchableOpacity style={styles.editButton} onPress={handleSave}>
          <Text style={styles.editButtonText}>Guardar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonSpacing} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    alignItems: "center",
    backgroundColor: background,
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
  },
  avatarContainer: {
    paddingVertical: 16,
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center",
    borderColor: colors.neutral,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  photoButton: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    width: "30%",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.white,
  },
  formContainer: {
    padding: 16,
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 60,
    borderColor: colors.neutral,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.neutral,
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.white,
  },
  textArea: {
    height: 100,
  },
  editButton: {
    backgroundColor: "#0275d8",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  editButtonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.white,
  },
  buttonSpacing: {
    height: 10,
  },
});

export default EditProfile;
