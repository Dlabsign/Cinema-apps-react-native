import React from "react";
import { Image, Text, Pressable, StyleSheet, View } from "react-native";

export const CardFilm = ({ ImagePath, onPress, judul }) => {
  return (
    <Pressable onPress={onPress} style={styles.carouselImage}>
      <View>
        <Image
          source={ImagePath}
          style={styles.carouselImage}
          resizeMode="cover"
        />
        <Text style={styles.desc}>{judul}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  carouselImage: {
    width: 120,
    marginHorizontal: 5,
    height: 150,
    resizeMode: "contain",
    borderRadius: 15,
  },
  desc: {
    width: "100%",
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "800",
    marginTop: 6,
    textTransform: "uppercase",
  },
});
