import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { SearchBar } from "../Components/SearchBar";
import { RestaurentsInfoCard } from "../Components/restaurants-info-Card.component";
import styled from "styled-components";

const OuterView = styled(View)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const ListView = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurentsScreen = () => {
  return (
    <OuterView>
      <SearchView>
        <SearchBar />
      </SearchView>
      <ListView>
        <RestaurentsInfoCard />
      </ListView>
    </OuterView>
  );
};
