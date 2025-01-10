import { StatusBar } from "expo-status-bar";
import SafeAreaView from "../hooks/SafeAreaView";
import { Slot } from "expo-router";
import React from "react";
import TabBar from "./features/layouts/tab-bar";

const Layout = () => {
  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <Slot />
      <TabBar />
    </SafeAreaView>
  );
};

export default Layout;
