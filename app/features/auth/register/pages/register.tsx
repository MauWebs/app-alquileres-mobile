import Header from "../../../layouts/header";
import { background, colors } from "@/constants/Colors";
import { Link } from "expo-router";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";

export default function Register() {
  return (
    <>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Registrarse</Text>

          <Text style={styles.label}>Nombre:</Text>
          <TextInput style={styles.input} placeholder="Nombre de usuario" />

          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            keyboardType="email-address"
          />

          <Text style={styles.label}>Contraseña:</Text>
          <TextInput
            style={styles.input}
            placeholder="Crea una contraseña"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Confirmar contraseña:</Text>
          <TextInput
            style={styles.input}
            placeholder="Vuelve a escribir la contraseña"
            secureTextEntry={true}
          />

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </Pressable>

          <Text style={styles.text}>
            ¿Ya estás registrado?{" "}
            <Link style={styles.link} href="/features/auth/login/pages/login">
              Inicia sesión aquí
            </Link>
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: background,
    justifyContent: "center",
    marginBottom: 50,
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingBottom: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    width: "100%",
    marginTop: 10,
    borderRadius: 5,
    paddingVertical: 10,
    backgroundColor: colors.primary,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  text: {
    marginTop: 20,
    fontSize: 14,
    textAlign: "center",
  },
  link: {
    color: colors.primary,
    fontWeight: "700",
    textDecorationLine: "none",
  },
});
