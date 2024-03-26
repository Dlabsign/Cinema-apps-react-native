import { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Jadwal = ({ lokasi }) => {
  const [selectedDate, setSelectedDate] = useState(true);
  const navigation = useNavigation();

  const Kursi = () => {
    navigation.navigate("Pilih Kursi");
  };

  const handleDatePress = (tanggal) => {
    setSelectedDate(tanggal);
  };

  const filteredJadwal = selectedDate
    ? lokasi.filter((item) => item.tanggal === selectedDate)
    : [];

  return (
    <>
      <View>
        <ScrollView horizontal style={{ paddingVertical: 15, width: "100%" }}>
          {lokasi.map((time, index) => (
            <TouchableOpacity
              key={index}
              style={[
                style.button,
                selectedDate === time.tanggal && style.activeButton,
              ]}
              onPress={() => handleDatePress(time.tanggal)}
            >
              <Text
                style={[
                  style.p,
                  selectedDate === time.tanggal && style.activeText,
                ]}
              >
                {time.tanggal}
              </Text>
              <Text
                style={[
                  style.h3,
                  selectedDate === time.tanggal && style.activeText,
                ]}
              >
                {time.hari}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {filteredJadwal.map((hari, index) => (
          <View key={index}>
            {hari.location.map((lokasi, idx) => (
              <View key={idx} style={style.itemContainer}>
                <View style={style.loc}>
                  <Text style={style.h3}>{lokasi.lokasi}</Text>
                  <Text style={style.p}>{lokasi.harga}</Text>
                </View>
                <ScrollView horizontal style={style.timeContainer}>
                  {lokasi.jam.map((jam, jIdx) => (
                    <Text key={jIdx} style={style.time}>
                      {jam}
                    </Text>
                  ))}
                </ScrollView>
              </View>
            ))}
          </View>
        ))}
        <TouchableOpacity style={button.style} onPress={Kursi}>
          <Image
            style={button.Image}
            source={require("../../assets/icons/Ticket.png")}
          />
          <Text style={button.title}>Pesan Kursi</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  time: {
    paddingHorizontal: 15,
    backgroundColor: "#13235E",
    color: "#fff",
    fontSize: 12.5,
    borderRadius: 100,
    paddingVertical: 5,
    marginRight: 5,
  },
  timeContainer: {
    paddingVertical: 5,
    flexDirection: "row",
    width: "100%",
    borderTopColor: "#232B48",
    borderTopWidth: 1,
    marginTop: 4,
  },
  loc: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  itemContainer: {
    width: "100%",
    marginTop: 10,
    alignItems: "flex-start",
  },
  activeButton: {
    backgroundColor: "#FEA923",
    borderColor: "#fea923",
  },
  activeText: {
    color: "#000",
  },
  button: {
    borderWidth: 1,
    borderColor: "#fff",
    color: "#fff",
    paddingHorizontal: 17,
    paddingVertical: 7,
    borderRadius: 6,
    marginRight: 10,
  },
  p: {
    color: "#9DA3BC",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
  },
  h3: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textTransform: "uppercase",
    textAlign: "center",
  },
});

const button = StyleSheet.create({
  Image: {
    width: 22,
    height: 22,
  },
  style: {
    gap: 5,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 12,
    backgroundColor: "#FEA923",
    marginTop: 25,
    borderRadius: 10,
  },
  title: {
    color: "#05103A",
    fontSize: 16,
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "900",
  },
});
