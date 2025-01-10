import IconSvgAddPlusSquare from "@/assets/tab-bar/icon-svg-add-plus-square";
import IconSvgProfitUp from "@/assets/tab-bar/icon-svg-profit-up";
import IconSvgCalendar from "@/assets/tab-bar/icon-svg-calendar";
import IconSvgHome from "@/assets/tab-bar/icon-svg-home";
import IconSvgUser from "@/assets/tab-bar/icon-svg-user";

import { colors } from "../../../constants/Colors";
import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import React from "react";

export default function TabBar() {
  return (
    <View style={styles.container}>
      <Link style={styles.link} href="/features/users/home/pages/home">
        <IconSvgHome  width={27} height={27} />
      </Link>

      <Link href="/features/users/reservations/pages/resrvations-calendar">
        <IconSvgCalendar width={27} height={27} />
      </Link>

      <Link href="/features/business/properties/pages/property-add">
        <IconSvgAddPlusSquare  width={27} height={27} />
      </Link>

      <Link
        style={styles.link}
        href="/features/business/analytics/pages/general-analytics"
      >
        <IconSvgProfitUp  width={27} height={27} />
      </Link>

      <Link href="/features/users/profile/pages/profile">
        <IconSvgUser  width={27} height={27} />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    paddingVertical: 14,
    width: "100%",
    bottom: 0,
    borderWidth: 1.2,
    borderColor: colors.neutral,
  },
  link: {
    alignItems: "center",
  },
});
