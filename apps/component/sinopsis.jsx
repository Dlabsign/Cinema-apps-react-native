import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export const Sinopsis = ({ SinopsisTeks, pemeran }) => {
  return (
    <View style={style.container}>
      <View>
        <ScrollView showsVerticalScrollIndicator style={{ height: 120 }}>
          <Text style={style.title}>{SinopsisTeks}</Text>
        </ScrollView>
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={style.h2}>PEMERAN</Text>
        <ScrollView horizontal style={style.scrollView}>
          {pemeran.map((aktor, index) => (
            <View key={index} style={{marginRight:8}}>
              <Image style={style.ImgContainer} source={aktor.image} />
              <Text style={style.h3}>{aktor.nama} </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingVertical: 9,
    paddingHorizontal: 10,
  },
  h2: {
    fontSize: 14,
    color: "#FFF",
    fontWeight: "700",
    textTransform: "uppercase",
  },
  h3: {
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
  title: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
    letterSpacing: 0.5,
  },
  carouselContainer: {
    width: "100%",
  },
  scrollView: {
    width: "100%",
    marginTop: 10,
  },
  ImgContainer: {
    width: 120,
    height: 150,
    marginBottom: 5,
    resizeMode: "cover",
    borderRadius: 15,
  },
});
