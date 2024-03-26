import { View, Text, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { Carousel1 } from "../../../database";
import { MenuCarousel } from "./menucarousel";

export const SedangTayang = () => {
  return (
    <View style={{ marginTop: 15 }}>
      {/* Header */}
      <View style={styles.headers}>
        <Text style={styles.h3}>Sedang Tayang</Text>
        <View style={styles.headersLink}>
          <Text style={styles.h4}>Lihat Semua</Text>
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
      <MenuCarousel SedangTayang={Carousel1} />
      {/* Anda mungkin ingin menggunakan komponen ini di sini */}
    </View>
  );
};

const styles = StyleSheet.create({
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
    marginBottom: 6,
  },
  headersLink: {
    flexDirection: "row",
    alignItems: "center",
  },
  h3: {
    fontSize: 14,
    fontWeight: "600",
    color: "#8E93A6",
  },
  h4: {
    marginRight: 5,
    fontWeight: "400",
    color: "#8E93A6",
    fontSize: 12,
  },
});
