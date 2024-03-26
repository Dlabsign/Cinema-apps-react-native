import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const SearchBar = () => {
  const [text, setText] = useState("");

  const handleChangeText = (inputText) => {
    setText(inputText);
  };

  return (
    <View style={SearchComp.SearchBar}>
      <Svg width="18" height="18" viewBox="0 0 21 21" fill="none">
        <Path
          d="M20 20L15.514 15.506M18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5Z"
          stroke="#8E93A6"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </Svg>

      <TextInput
        style={SearchComp.title}
        onChangeText={handleChangeText}
        placeholderTextColor="#8E93A6"
        value={text}
        placeholder="Cari Film"
      />
    </View>
  );
};

const SearchComp = StyleSheet.create({
  SearchBar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginTop: 10,
    backgroundColor:"#1E284E",
    borderRadius: 150,
    marginTop:18,
  },
  title: {
    marginLeft: 10,
    color:'#fff',
    fontSize:12,
    width:'90%',
    fontWeight:'500',
  },
});

export default SearchBar;
