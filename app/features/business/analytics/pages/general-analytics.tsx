import LineChartAnnual from "../components/line-chart";
import { View, ScrollView } from "react-native";
import React from "react";
import EarningsPerProperty from "../components/earnings-per-property";

function GeneralAnalytics() {
  return (
    <ScrollView>
      <View>
        <LineChartAnnual />
      </View>
      <View>
        <EarningsPerProperty />
      </View>
    </ScrollView>
  );
}

export default GeneralAnalytics;
