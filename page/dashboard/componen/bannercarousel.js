import React, { useRef } from "react";
import { View, ScrollView, Image, Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const BannerCarousel = ({ ImageCarousel }) => {
  const scrollViewRef = useRef();

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const currentIndex = event.nativeEvent.contentOffset.x / slideSize;
  };

  return (
    <View style={styles.carouselContainer}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        style={styles.scrollView}
      >
        {ImageCarousel.map((ImageCarousel, index) => (
          <Image
            key={index}
            source={ImageCarousel}
            style={styles.carouselImage}
            resizeMode="cover"
          />
        ))}
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
    paddingRight:65,
    height:150,
    paddingLeft:5,
  },
  carouselImage: {
    marginRight: 12,
    width: 300,
    height:150,
    borderRadius: 25,
    resizeMode: "contain",
  },
});

export default BannerCarousel;
