import React from "react";
import { ImageBackground, View } from "react-native";
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Screens
import { COFFEESHOP } from "../../Navigation/screenNames";

// Style
import styles from "./styles";

const CoffeeItem = ({ coffeeshop, navigation }) => (
  <ImageBackground
    source={{ uri: coffeeshop.background }}
    style={styles.background}
  >
    <View style={styles.overlay} />
    <ListItem
      button
      style={styles.listitem}
      onPress={() => navigation.navigate(COFFEESHOP, { coffeeshop })}
    >
      <Card style={styles.transparent}>
        <CardItem style={styles.transparent}>
          <Left>
            <Thumbnail
              bordered
              source={{ uri: coffeeshop.img }}
              style={styles.thumbnail}
            />
            <Text style={styles.text}>{coffeeshop.name}</Text>
            <Text note style={styles.text}>
              {coffeeshop.distance}
            </Text>
          </Left>
        </CardItem>
      </Card>
    </ListItem>
  </ImageBackground>
);

export default CoffeeItem;
