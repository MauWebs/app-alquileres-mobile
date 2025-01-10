import { Link } from "expo-router";
import {
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import { background, colors } from "@/constants/Colors";
import Header from "../../../layouts/header";

export default function Login() {
  return (
    <>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Iniciar Sesión</Text>

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
        />

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </Pressable>

        <Text style={styles.text}>
          ¿No tienes una cuenta?{" "}
          <Link style={styles.link} href="/features/auth/register/pages/register">
            Regístrate aquí
          </Link>
        </Text>
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
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingBottom: 20,
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
    marginTop: 10,
    backgroundColor: colors.primary,
    width: "100%",
    paddingVertical: 10,
    borderRadius: 5,
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
