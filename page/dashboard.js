import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Svg, { Path } from "react-native-svg";
import BannerCarousel from "./componen/carousel";
// import { SearchBar } from "./componen/searchBar";
// import { MovieMenu } from "./movie";

const MainDashboard = () => {
  return (
    <View>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <View style={styles.profile}>
          <View style={styles.navbarLeftRow}>
            <Image
              source={require("../assets/carousel/menu_3.jpg")}
              style={styles.navbarProfile}
            />
            <View>
              <Text style={styles.titleHeading}>Headline</Text>
              <Text style={styles.subHead}>Nama</Text>
            </View>
          </View>
          <View style={styles.navbarIcon}>
            <Image
              source={require("../assets/icons/Notification.png")}
              style={styles.image}
            />
          </View>
        </View>
        {/* <SearchBar /> */}
      </View>
      {/* Carousel */}
      <BannerCarousel />
      {/* Body */}
      <View style={{ marginTop: 20 }}>
        {/* Header */}
        <View style={styles.headers}>
          <Text style={styles.h3}>Sedang Tayang</Text>
          <View style={styles.headersLink}>
            <Text
              style={[
                styles.h4,
                { marginRight: 5, fontWeight: "400", color: "#8E93A6" },
              ]}
            >
              Lihat Semua
            </Text>
            <Svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M12 0C18.612 0 24 5.388 24 12C24 18.624 18.612 24 12 24L11.6643 23.9954C5.19531 23.8174 0 18.5117 0 12C0 5.388 5.376 0 12 0ZM10.272 6.936C10.032 6.936 9.804 7.02 9.624 7.2C9.276 7.56 9.276 8.124 9.636 8.472L13.176 12L9.636 15.528C9.276 15.876 9.276 16.452 9.624 16.8C9.984 17.16 10.548 17.16 10.896 16.8L15.084 12.636C15.252 12.468 15.348 12.24 15.348 12C15.348 11.76 15.252 11.532 15.084 11.364L10.896 7.2C10.728 7.02 10.5 6.936 10.272 6.936Z"
                fill="#FEA923"
              />
            </Svg>
          </View>
        </View>
      </View>
      {/* <MovieMenu /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 45,
    backgroundColor: "#05103A",
  },
  topBar: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  profile: {
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
  },
  navbarLeftRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navbarProfile: {
    width: 42,
    height: 42,
    resizeMode: "cover",
    marginRight: 10,
    borderRadius: 100,
  },
  navbarIcon: {
    width: 35,
    height: 35,
    resizeMode: "cover",
  },
  titleHeading: {
    fontSize: 14,
    color: "#fafafa",
  },
  subHead: {
    fontSize: 11.2,
    marginTop: 3,
    color: "#fafafa",
  },
  headers: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },
  headersLink: {
    flexDirection: "row",
    alignItems: "center",
  },
  h3: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  h4: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default MainDashboard;
