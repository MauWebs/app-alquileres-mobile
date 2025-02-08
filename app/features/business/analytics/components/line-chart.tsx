import { View, Text, Dimensions, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { background, colors } from "@/constants/Colors";
import React from "react";

const screenWidth = Dimensions.get("window").width;

const data = {
  labels: [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ],
  datasets: [
    {
      data: [
        500, 1000, 1100, 900, 1300, 1200, 1500, 1400, 1500, 1800, 1700, 2000,
      ],
      color: (opacity: number) => `rgba(78, 78, 80, ${opacity})`,
    },
  ],
};

const total = data.datasets[0].data.reduce((sum, value) => sum + value, 0);

const formatNumber = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const chartConfig = {
  decimalPlaces: 0,
  backgroundGradientTo: "#fff",
  backgroundGradientFrom: "#fff",
  color: (opacity: number) => `rgba(78, 78, 80, ${opacity})`,
  labelColor: (opacity: number) => `rgba(78, 78, 80, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForBackgroundLines: {
    strokeWidth: 1.2,
    stroke: "#cdcdcd",
    strokeDasharray: "3 3",
  },
  propsForLabels: {
    fill: "#4E4E50",
  },
  propsForDots: {
    r: "6",
    strokeWidth: "4",
    stroke: "#D3D3D3",
  },
  fillShadowGradientTo: "#F2F2F2",
  fillShadowGradientFrom: "#E7E7E7",
  fillShadowGradientToOpacity: 0.4,
  fillShadowGradientFromOpacity: 0.6,
};

const LineChartAnnual: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ganancias anuales</Text>
      <Text style={styles.total}>Total: $ {formatNumber(total)}k</Text>
      <LineChart
        data={data}
        width={screenWidth - 20}
        height={220}
        yAxisLabel="$ "
        yAxisSuffix="k"
        chartConfig={{
          ...chartConfig,
        }}
        style={{
          borderWidth: 1,
          borderRadius: 16,
          borderColor: colors.neutral,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: colors.neutral,
    borderBottomColor: colors.neutral,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  total: {
    fontSize: 16,
    color: "#4E4E50",
    marginVertical: 10,
  },
});

export default LineChartAnnual;
