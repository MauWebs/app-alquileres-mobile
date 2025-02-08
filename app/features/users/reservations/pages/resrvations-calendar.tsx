import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { colors } from "@/constants/Colors";
import { format, parseISO } from "date-fns";
import React from "react";

interface MarkedDate {
  startingDay?: boolean;
  endingDay?: boolean;
  color: string;
  textColor: string;
}

interface Booking {
  checkin: string;
  checkout: string;
  property: string;
  cost: number;
}

LocaleConfig.locales["es"] = {
  monthNames: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  monthNamesShort: [
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
  dayNames: [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ],
  dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
  today: "Hoy",
};

LocaleConfig.defaultLocale = "es";

const ReservationsCalendar = () => {
  const bookings: Booking[] = [
    {
      checkin: "2024-12-10",
      checkout: "2024-12-11",
      property: "Propiedad 1",
      cost: 1000,
    },
    {
      checkin: "2024-12-12",
      checkout: "2024-12-13",
      property: "Propiedad 2",
      cost: 2000,
    },
    {
      checkin: "2024-12-14",
      checkout: "2024-12-15",
      property: "Propiedad 3",
      cost: 3000,
    },
  ];

  const markedDates = bookings.reduce<Record<string, MarkedDate>>(
    (accumulator, booking) => {
      const { checkin, checkout } = booking;

      if (new Date(checkin) < new Date(checkout)) {
        accumulator[checkin] = {
          startingDay: true,
          color: colors.primary,
          textColor: "white",
        };

        accumulator[checkout] = {
          endingDay: true,
          color: colors.primary,
          textColor: "white",
        };
      }

      return accumulator;
    },
    {}
  );

  const formatDate = (date: string) => format(parseISO(date), "dd/MM/yyyy");

  return (
    <ScrollView style={styles.container}>
      <Calendar
        locale="es"
        enableSwipeMonths={true}
        hideExtraDays={false}
        markingType={"period"}
        markedDates={markedDates}
        style={styles.calendar}
        theme={{
          dayTextColor: "#2d4150",
          textDisabledColor: colors.neutral,
          backgroundColor: "#ffffff",
          arrowColor: colors.primary,
          calendarBackground: "#ffffff",
          todayTextColor: colors.primary,
          selectedDayTextColor: "#ffffff",
          selectedDayBackgroundColor: "#00adf5",
        }}
      />

      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={[styles.tableCell, styles.headerCell]}>Entrada</Text>
          <Text style={[styles.tableCell, styles.headerCell]}>Salida</Text>
          <Text style={[styles.tableCell, styles.headerCell]}>Propiedad</Text>
          <Text style={[styles.tableCell, styles.headerCell]}>Costo total</Text>
        </View>

        {bookings.map((item, index) => (
          <View
            key={index}
            style={[
              styles.tableRow,
              index === bookings.length - 1 && { borderBottomWidth: 0 },
            ]}
          >
            <Text style={styles.tableCell}>{formatDate(item.checkin)}</Text>
            <Text style={styles.tableCell}>{formatDate(item.checkout)}</Text>
            <Text style={styles.tableCell}>{item.property}</Text>
            <Text style={styles.tableCell}>
              $ {item.cost.toLocaleString("es-AR")}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderWidth: 1,
    backgroundColor: "#f9f9f9",
    borderTopColor: colors.neutral,
  },
  calendar: {
    height: 350,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.neutral,
    marginBottom: 20,
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: colors.neutral,
    borderRadius: 8,
    backgroundColor: "#fff",
    overflow: "hidden",
    marginBottom: 90,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: colors.primary,
    paddingVertical: 2,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral,
    paddingVertical: 8,
    backgroundColor: "#fdfdfd",
  },
  tableCell: {
    flex: 1,
    padding: 10,
    textAlign: "center",
    color: "#333",
  },
  headerCell: {
    fontWeight: "700",
    color: "white",
  },
});

export default ReservationsCalendar;
