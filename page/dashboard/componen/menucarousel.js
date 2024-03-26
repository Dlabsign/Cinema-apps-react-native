import React, { useRef } from "react";
import { View, ScrollView, Dimensions, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Carousel1 } from "../../../database";
import { CardFilm } from "./card";

const { width } = Dimensions.get("window");

export const MenuCarousel = () => {
  const navigation = useNavigation();

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const currentIndex = event.nativeEvent.contentOffset.x / slideSize;
  };

  const AgakLaen = () => {
    navigation.navigate("AgakLaen");
  };

  const Landofbad = () => {
    navigation.navigate("land of bad");
  };

  return (
    <View style={styles.carouselContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        style={styles.scrollView}
      >
        <CardFilm
          key={Carousel1[0].id}
          ImagePath={Carousel1[0].image}
          judul={Carousel1[0].title}
          onPress={AgakLaen}
        />
        <CardFilm
          key={Carousel1[1].id}
          ImagePath={Carousel1[1].image}
          judul={Carousel1[1].title}
          onPress={Landofbad}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    width: "100%",
  },
  scrollView: {
    width: "100%",
    paddingBottom: 25,
    height:"100%",
  },
});
