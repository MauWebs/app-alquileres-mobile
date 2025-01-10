import RentalsCards from "../sections/home-rentals-cards";
import SearchBar from "../components/home-search-bar";
import { StyleSheet, ScrollView } from "react-native";
import Header from "../../../layouts/header";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <SearchBar />
        <RentalsCards />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
});

export default Home;
