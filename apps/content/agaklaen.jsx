import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { FilmData } from "../../database";

// Komponen
import { useState } from "react";
import { Jadwal } from "../component/jadwal";
import { Sinopsis } from "../component/sinopsis";

export const AgakLaen = ({ route }) => {
  const [tampilSinopsis, setTampilSinopsis] = useState(false);
  const [tampilJadwal, setTampilJadwal] = useState(true);

  const handlePressSinopsis = () => {
    setTampilSinopsis(true); // Menampilkan sinopsis saat tombol Sinopsis ditekan
    setTampilJadwal(false); // Menyembunyikan jadwal jika tombol Sinopsis ditekan
  };

  const handlePressJadwal = () => {
    setTampilJadwal(true); // Menampilkan jadwal saat tombol Jadwal ditekan
    setTampilSinopsis(false); // Menyembunyikan sinopsis jika tombol Jadwal ditekan
  };

  return (
    <>
      {/* Header */}
      {/* -------------------------- BANNER -------------------------- */}
      {FilmData.filter((film) => film.id === 2).map((film) => (
        <View style={style.container} key={film.id}>
          <View style={style.headline}>
            <Image style={style.imageBanner} source={film.headlinebanner} />
          </View>
          {/* -------------------------- BODY -------------------------- */}
          <ScrollView style={float.floatContainer}>
            <View style={float.HeadContainer}>
              <Image style={float.ImgFloat} source={film.image} />
              <View style={title.container}>
                <Text style={title.headline}>{film.title}</Text>
                <Text style={title.type}>{film.movietype}</Text>

                {/* --------- Looping Bintang --------- */}
                <View style={{ flexDirection: "row" }}>
                  {Array.from({ length: film.starrate }).map((_, index) => (
                    <Image
                      key={index}
                      style={float.staricon}
                      source={film.staricon} // Menggunakan data staricon dari film
                    />
                  ))}
                </View>
                <Text style={title.h4}>{film.jamTayang}</Text>
              </View>
            </View>

            {/* ------------------ Sinopsis ------------------ */}
            {/* <ScrollView style={{height:150,}}> */}
            <View style={float.SinopsisContainer}>
              <TouchableOpacity
                style={[float.touch, tampilSinopsis && float.activeButton]}
                onPress={handlePressSinopsis}
              >
                <Text style={title.h2}>Sinopsis</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[float.touch, tampilJadwal && float.activeButton]}
                onPress={handlePressJadwal}
              >
                <Text style={title.h2}>Jadwal</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={{ height: "auto" }}>
              {tampilSinopsis && (
                <Sinopsis
                  SinopsisTeks={film.sinopsistitle}
                  pemeran={film.pemeran}
                />
              )}
              {tampilJadwal && <Jadwal lokasi={film.jadwal} />}
            </ScrollView>
            {/* </ScrollView> */}
          </ScrollView>
          {/* Sinposis */}
        </View>
      ))}
    </>
  );
};

const title = StyleSheet.create({
  container: {
    marginLeft: 10,
    rowGap: 2,
  },
  headline: {
    color: "#FFF",
    fontSize: 21,
    fontWeight: "700",
  },
  h2: {
    fontSize: 14,
    color: "#FFF",
    fontWeight: "700",
    textTransform: "uppercase",
  },
  h2actv: {
    color: "#FEA923",
    fontSize: 14,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  type: {
    color: "#fff",
    fontSize: 12,
    paddingVertical: 8,
    borderRadius: 15,
    textAlign: "center",
    color: "#B8C0DC",
    fontWeight: "600",
    backgroundColor: "#192657",
  },
  h4: {
    fontSize: 12,
    color: "#818696",
    fontWeight: "500",
    letterSpacing: 1,
  },
});

const float = StyleSheet.create({
  floatContainer: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 25,
    marginTop: 15,
    zIndex: 100,
  },
  HeadContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ImgFloat: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  staricon: {
    flexDirection: "row",
    height: 16,
    width: 16,
    marginRight: 5,
  },
  SinopsisContainer: {
    width: "100%",
    marginTop: 25,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: "row",
    backgroundColor: "#040D2E",
  },
  touch: {
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
    width: "50%",
    paddingVertical: 15,
    alignItems: "center",
  },
  activeButton: {
    borderBottomColor: "#FEA923", // Warna garis bawah saat tombol aktif
  },
  sinjad: {
    flexDirection: "column",
  },
});

const style = StyleSheet.create({
  container: {
    backgroundColor: "#05103A",
    height: "100%",
    paddingBottom: 15,
  },
  scrollView: {
    zIndex: 10,
    paddingBottom: 10,
    width: "100%",
    paddingBottom: 25,
    backgroundColor: "#05103A",
    height: "100%",
  },
  headline: {
    width: "100%",
  },
  imageBanner: {
    width: "100%",
    height: 170,
    alignItems: "flex-start",
  },
  carouselContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#05103A",
    position: "absolute",
  },
});
