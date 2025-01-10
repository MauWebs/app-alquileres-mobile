import { View, StyleSheet, FlatList } from "react-native";
import React from "react";

import UserProfileData from "../sections/user-date";
import UserProperties from "../sections/user-properties";
import Header from "../../../layouts/header";

const Profile = () => {
  const renderContent = () => [
    <View key="profile-data" style={styles.section}>
      <UserProfileData />
    </View>,
    <View key="properties" style={styles.section}>
      <UserProperties />
    </View>,
  ];

  return (
    <>
      <Header />
      <FlatList
        data={renderContent()}
        renderItem={({ item }) => item}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        keyExtractor={(_item, index) => index.toString()}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  listContent: {
    paddingBottom: 20,
  },
  section: {
    marginBottom: -13,
  },
});

export default Profile;
