import { background, colors } from "@/constants/Colors";
import { View, Text, StyleSheet } from "react-native";
import React from "react";

const properties = [
  { name: "Propiedad 1", earnings: 20 },
  { name: "Propiedad 2", earnings: 500 },
  { name: "Propiedad 3", earnings: 250 },
  { name: "Propiedad 4", earnings: 300 },
  { name: "Propiedad 5", earnings: 150 },
];

const totalEarnings = properties.reduce(
  (total, property) => total + property.earnings,
  0
);

const sortedProperties = properties
  .map((property) => ({
    ...property,
    percentage: (property.earnings / totalEarnings) * 100,
  }))
  .sort((a, b) => b.percentage - a.percentage);

const formatNumber = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const ProgressBar = ({ percentage }: { percentage: number }) => {
  return (
    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBar, { width: `${percentage}%` }]} />
    </View>
  );
};

const EarningsPerProperty = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ganancias de este mes</Text>
      <Text style={styles.total}>Total: $ {formatNumber(totalEarnings)}k</Text>
      {sortedProperties.map((property, index) => (
        <View key={index} style={styles.propertyContainer}>
          <View style={styles.propertyHeader}>
            <Text style={styles.propertyName}>{property.name}</Text>
            <Text style={styles.propertyEarnings}>
              ($ {formatNumber(property.earnings)}k)
            </Text>
          </View>
          <View style={styles.progressBarWithPercentage}>
            <ProgressBar percentage={property.percentage} />
            <Text style={styles.propertyPercentage}>
              {property.percentage.toFixed(2)}%
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 60,
    alignItems: "center",
    backgroundColor: background,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  total: {
    fontSize: 16,
    color: "#4E4E50",
    marginVertical: 10,
    textAlign: "center",
  },
  propertyContainer: {
    padding: 10,
    width: "100%",
    marginBottom: 10,
    paddingBottom: 20,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.neutral,
    backgroundColor: colors.white,
  },
  propertyHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  propertyName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  propertyEarnings: {
    fontSize: 16,
    fontWeight: "normal",
  },
  progressBarWithPercentage: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  progressBarContainer: {
    flex: 1,
    height: 10,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "#e0e0e0",
  },
  progressBar: {
    height: "100%",
    backgroundColor: colors.primary,
  },
  propertyPercentage: {
    fontSize: 14,
    marginLeft: 10,
    color: colors.black,
  },
});

export default EarningsPerProperty;
