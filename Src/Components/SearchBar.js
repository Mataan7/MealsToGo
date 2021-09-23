import React from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
export const SearchBar = () => {
  return (
    <View>
      <Searchbar placeholder="Search" onChange={() => console.log("agaaa")} />
    </View>
  );
};
