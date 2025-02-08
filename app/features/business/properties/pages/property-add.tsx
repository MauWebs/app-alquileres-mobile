import PropertyAddHeader from "../components/property-add-header";
import { Picker } from "@react-native-picker/picker";
import { colors } from "@/constants/Colors";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const AddProperty = () => {
  const [formData, setFormData] = useState<{
    beds: string;
    price: string;
    location: string;
    name: string;
    bedTypes: string[];
    photos: string[];
  }>({
    beds: "",
    price: "",
    location: "",
    name: "",
    bedTypes: [],
    photos: [],
  });

  const handleBedsChange = (value: string) => {
    const beds = parseInt(value) || 0;
    setFormData({
      ...formData,
      beds: value,
      bedTypes: Array(beds).fill("Simple"),
    });
  };

  const handleBedTypeChange = (index: number, value: string) => {
    const updatedBedTypes = [...formData.bedTypes];
    updatedBedTypes[index] = value;
    setFormData({ ...formData, bedTypes: updatedBedTypes });
  };

  const handlePhotoAdd = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled && result.assets) {
      const newPhotos = result.assets.map((asset) => asset.uri);
      setFormData({ ...formData, photos: [...formData.photos, ...newPhotos] });
    }
  };

  const handleSubmit = () => {
    if (
      !formData.price ||
      !formData.name ||
      !formData.location ||
      !formData.beds ||
      formData.bedTypes.length === 0 ||
      formData.photos.length === 0
    ) {
      Alert.alert("Error", "Olvidaste rellenar un campo del formulario.");
      return;
    }
    Alert.alert("Éxito", "Propiedad añadida con éxito.");
  };

  return (
    <>
      <PropertyAddHeader />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={[styles.inputGroup, styles.containerStyle]}>
          <Text style={styles.label}>Precio:</Text>
          <TextInput
            style={styles.input}
            placeholder="Por día"
            keyboardType="numeric"
            value={formData.price}
            onChangeText={(value) => setFormData({ ...formData, price: value })}
          />

          <Text style={styles.label}>Título:</Text>
          <TextInput
            style={styles.input}
            placeholder="Título breve"
            keyboardType="default"
            value={formData.name}
            onChangeText={(value) => setFormData({ ...formData, name: value })}
          />

          <Text style={styles.label}>Ubicación:</Text>
          <TextInput
            style={styles.input}
            placeholder="Lugar o sitio"
            keyboardType="default"
            value={formData.location}
            onChangeText={(value) =>
              setFormData({ ...formData, location: value })
            }
          />
        </View>

        <View style={[styles.photoContainer, styles.containerStyle]}>
          {formData.photos.map((photo, index) => (
            <Image key={index} source={{ uri: photo }} style={styles.photo} />
          ))}

          <Pressable style={styles.photoButton} onPress={handlePhotoAdd}>
            <Text style={styles.buttonText}>Añadir foto</Text>
          </Pressable>
        </View>

        <View style={styles.row}>
          <View
            style={[styles.inputGroup, styles.rowItem, styles.containerStyle]}
          >
            <Text style={styles.label}>Número de camas:</Text>
            <TextInput
              style={styles.input}
              placeholder="Cantidad de camas"
              keyboardType="numeric"
              value={formData.beds}
              onChangeText={handleBedsChange}
            />
          </View>
        </View>

        {formData.bedTypes.map((bedType, index) => (
          <View
            key={index}
            style={[
              styles.inputGroup,
              styles.spacingTop,
              styles.containerStyle,
            ]}
          >
            <Text style={styles.label}>Tipo de cama {index + 1}:</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={bedType}
                style={styles.picker}
                onValueChange={(value: string) =>
                  handleBedTypeChange(index, value)
                }
              >
                <Picker.Item label="Dúplex" value="Dúplex" />
                <Picker.Item label="Simple" value="Simple" />
                <Picker.Item label="Matrimonial" value="Matrimonial" />
              </Picker>
            </View>
          </View>
        ))}

        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Subir esta propiedad</Text>
        </Pressable>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  row: {
    marginTop: 10,
    marginBottom: -9,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowItem: {
    flex: 1,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  input: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    paddingLeft: 14,
    borderRadius: 5,
    borderColor: "#ccc",
    color: "rgba(0, 0, 0, 0.7)",
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "#fff",
    marginBottom: 20,
    borderColor: colors.neutral,
  },
  picker: {
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
    paddingVertical: -10,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    borderRadius: 5,
    marginBottom: 50,
    paddingVertical: 10,
    backgroundColor: colors.primary,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  spacingTop: {
    marginTop: 10,
  },
  divider: {
    height: 1,
    marginVertical: 20,
    backgroundColor: "#ccc",
  },
  photoContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  photoButton: {
    width: "100%",
    borderRadius: 5,
    marginBottom: 15,
    paddingVertical: 10,
    backgroundColor: colors.primary,
  },
  photo: {
    margin: 5,
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: colors.neutral,
  },
  containerStyle: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.neutral,
    backgroundColor: colors.white,
    padding: 10,
  },
});

export default AddProperty;
