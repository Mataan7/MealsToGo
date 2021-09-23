import React from "react";
import { Text, View, StyleSheet, Paragraph } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled(Text)`
  padding: 16px;
  color: blue;
`;

const Image = styled(Card.Cover)`
  padding: 20px;
  background-color: #fff;
`;

export const RestaurentsInfoCard = () => {
  return (
    <Card>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/2868225/pexels-photo-2868225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        }}
      />
      <Card.Content>
        <Title>Card content</Title>
      </Card.Content>
    </Card>
  );
};
