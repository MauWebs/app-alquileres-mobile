import { Calendar, LocaleConfig } from "react-native-calendars";
import { colors } from "@/constants/Colors";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
  Modal,
  TouchableOpacity,
} from "react-native";

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

interface DateRange {
  startDate: string | null;
  endDate: string | null;
}

const SearchBar = () => {
  const [destination, setDestination] = useState<string>("");
  const [beds, setBeds] = useState<string>("");
  const [range, setRange] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });
  const [markedDates, setMarkedDates] = useState<{ [key: string]: any }>({});
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleDayPress = (day: { dateString: string }) => {
    const { dateString } = day;
    if (!range.startDate || (range.startDate && range.endDate)) {
      setRange({ startDate: dateString, endDate: null });
      setMarkedDates({
        [dateString]: {
          startingDay: true,
          color: colors.primary,
          textColor: "white",
        },
      });
    } else {
      const startDate = range.startDate;
      const endDate = dateString;

      if (new Date(startDate) > new Date(endDate)) {
        setRange({ startDate: endDate, endDate: null });
        setMarkedDates({
          [endDate]: {
            startingDay: true,
            color: colors.primary,
            textColor: "white",
          },
        });
        return;
      }

      const rangeDates = getDatesInRange(startDate, endDate);
      const newMarkedDates: { [key: string]: any } = {};
      rangeDates.forEach((date, index) => {
        newMarkedDates[date] = {
          color: colors.primary,
          textColor: "white",
          startingDay: index === 0,
          endingDay: index === rangeDates.length - 1,
        };
      });

      setRange({ startDate, endDate });
      setMarkedDates(newMarkedDates);
    }
  };

  const getDatesInRange = (
    start: string | number | Date,
    end: string | number | Date
  ): string[] => {
    const dates: string[] = [];
    let currentDate = new Date(start);
    const endDate = new Date(end);

    while (currentDate <= endDate) {
      dates.push(currentDate.toISOString().split("T")[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const formatDate = (dateString: string | null): string => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "2-digit",
      month: "short",
    };
    return new Intl.DateTimeFormat("es-ES", options)
      .format(date)
      .replace(".", "");
  };

  const renderDateRange = (): string => {
    if (!range.startDate) return "Seleccionar fechas";
    if (!range.endDate) return `${formatDate(range.startDate)}`;
    return `${formatDate(range.startDate)} — ${formatDate(range.endDate)}`;
  };

  const handleSearch = () => {
    if (!destination) {
      Alert.alert("Error", "Por favor, ingresa el destino.");
      return;
    }

    if (!beds || beds === "0") {
      Alert.alert("Error", "Por favor, ingresa la cantidad de camas.");
      return;
    }

    if (!range.startDate || !range.endDate) {
      Alert.alert("Error", "Por favor, selecciona el rango de fechas.");
      return;
    }

    Alert.alert(
      "Búsqueda realizada",
      `Destino: ${destination}\nEntrada: ${range.startDate}\nSalida: ${range.endDate}\nCamas: ${beds}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Alojamiento</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Destino:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: Necochea, Buenos Aires"
          value={destination}
          onChangeText={setDestination}
        />
      </View>

      <Text style={styles.label}>Fechas:</Text>
      <Pressable
        style={styles.dateSelector}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.dateSelectorText}>{renderDateRange()}</Text>
      </Pressable>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Camas:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: 2"
          keyboardType="numeric"
          value={beds}
          onChangeText={setBeds}
        />
      </View>

      <Pressable style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Buscar</Text>
      </Pressable>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Calendar
              markingType="period"
              markedDates={markedDates}
              onDayPress={handleDayPress}
              theme={{
                arrowColor: colors.primary,
                todayTextColor: colors.primary,
                selectedDayBackgroundColor: colors.primary,
              }}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 10,
    backgroundColor: colors.white,
    borderColor: colors.neutral,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: colors.black,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: colors.black,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    borderColor: colors.neutral,
    backgroundColor: "#f9f9f9",
    color: colors.black,
  },
  dateSelector: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.neutral,
    backgroundColor: "#f9f9f9",
    marginBottom: 20,
  },
  dateSelectorText: {
    fontSize: 16,
    color: colors.black,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 8,
    width: "90%",
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});

export default SearchBar;
