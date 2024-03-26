import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import SearchBar from "./dashboard/componen/searchbar";
import BannerCarousel from "./dashboard/componen/bannercarousel";
// import ImageCarousel from "../database";

// database
import { Bannercarousel } from "../database";
import { SedangTayang } from "./dashboard/componen/movielist";
SedangTayang

export default function MainMenu() {
  return (
    <View style={styles.container}>
      <ScrollView>
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
          <SearchBar />
        </View>
        {/* Caroousel */}
        <BannerCarousel ImageCarousel={Bannercarousel} />
        {/* <MenuContainer /> */}
        <SedangTayang />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 45,
    backgroundColor: "#05103A",
    paddingBottom: 10,
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
