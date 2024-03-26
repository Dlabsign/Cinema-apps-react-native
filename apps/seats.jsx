import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { dataKursi } from "../database";
import { useState } from "react";

export const Kursi = () => {
  const [seatsStatus, setSeatsStatus] = useState(
    Array(dataKursi[0].seat_left).fill(false)
  );
  const [totalHarga, setTotalHarga] = useState(0);

  const toggleSeat = (index) => {
    const updatedSeatsStatus = [...seatsStatus];
    const harga = dataKursi[0].harga;

    if (updatedSeatsStatus[index]) {
      updatedSeatsStatus[index] = false; // Ubah menjadi tidak aktif jika sudah aktif
      setTotalHarga(totalHarga - harga);
    } else {
      updatedSeatsStatus[index] = true; // Ubah menjadi aktif jika tidak aktif
      setTotalHarga(totalHarga + harga);
    }

    setSeatsStatus(updatedSeatsStatus);
  };

  return (
    <View style={style.container}>
      {/* Screen*/}
      <View>
        <View style={style.screencontainer}>
          <Text style={[style.h4, { position: "absolute" }]}>Screen</Text>
          <Image
            style={style.image}
            resizeMode="contain"
            source={require("../assets/icons/Layar.png")}
          />
        </View>
        {/* Kursi */}
        <View style={style.seatContainer}>
          <View style={style.seat_r}>
            {seatsStatus.map((isSeatActive, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => toggleSeat(index)}
                disabled={isSeatActive}
              >
                <Image
                  style={style.seat_icon}
                  resizeMode="contain"
                  source={
                    isSeatActive
                      ? dataKursi[0].seatImg_active // Gunakan seatImg_active jika kursi aktif
                      : dataKursi[0].seatImg_non // Gunakan seatImg_non jika kursi tidak aktif
                  }
                />
              </TouchableOpacity>
            ))}
          </View>

          {/* {dataKursi.map((data, dataIndex) => (
            <View key={dataIndex} style={style.seat_r}>
              {Array.from({ length: data.seat_left }).map((_, index) => {
                const seatKey = `${dataIndex}-${index}`;
                const isSeatSelected = selectedSeats.includes(seatKey);
                const seatImg = isSeatSelected
                  ? data.seatImg_booki
                  : data.seatImg_non;
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handlePress(dataIndex, index)}
                    disabled={isSeatSelected}
                  >
                    <Image
                      style={style.seat_icon}
                      resizeMode="contain"
                      source={seatImg}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          ))} */}
        </View>
        {/* info */}
        <View style={style.seat_info_con}>
          <View style={style.seat_info}>
            <Image
              style={button.Image}
              resizeMode="contain"
              source={require("../assets/icons/kursi_non.png")}
            />
            <Text style={style.p}>Available</Text>
          </View>
          <View style={style.seat_info}>
            <Image
              style={button.Image}
              resizeMode="contain"
              source={require("../assets/icons/kursi_active.png")}
            />
            <Text style={style.p}>Booked</Text>
          </View>
          <View style={style.seat_info}>
            <Image
              style={button.Image}
              resizeMode="contain"
              source={require("../assets/icons/kursi_book.png")}
            />
            <Text style={style.p}>Selected</Text>
          </View>
        </View>
      </View>

      {/* Button */}
      <View>
        <View style={style.bottomContainer}>
          <Text style={style.h4}>Pesan Kursi</Text>
          <Text style={style.h4}>{totalHarga}</Text>
        </View>

        <TouchableOpacity style={button.style} onPress={Kursi}>
          <Image
            style={button.Image}
            resizeMode="contain"
            source={require("../assets/icons/kursi_non.png")}
          />
          <Text style={button.title}>Pesan Kursi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 25,
    backgroundColor: "#05103A",
    paddingHorizontal: 25,
    justifyContent: "space-between",
  },
  screencontainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
  },
  seatContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  seat_icon: {
    height: 18,
  },
  seat_info_con: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 25,
    columnGap: 15,
  },
  seat_info: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 7,
  },
  seat_r: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 17,
    columnGap: 5,
    width: "46%",
    flexWrap: "wrap-reverse",
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
  h4: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
  },
  bottomContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 14,
  },
});

const button = StyleSheet.create({
  Image: {
    width: 17,
  },
  style: {
    gap: 5,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 12,
    backgroundColor: "#FEA923",
    marginTop: 10,
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
