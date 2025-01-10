import Home from "./features/users/home/pages/home";
import { View, StyleSheet } from "react-native";
import React from "react";

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
