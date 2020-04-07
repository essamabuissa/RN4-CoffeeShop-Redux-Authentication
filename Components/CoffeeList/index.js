import React from "react";
import { List, Content } from "native-base";
import { connect } from "react-redux";

// Component
import CoffeeItem from "./CoffeeItem";

const CoffeeList = ({ coffeeshops, navigation }) => {
  const shopList = coffeeshops.map(coffeeshop => (
    <CoffeeItem
      coffeeshop={coffeeshop}
      key={coffeeshop.name}
      navigation={navigation}
    />
  ));

  return (
    <Content>
      <List>{shopList}</List>
    </Content>
  );
};

const mapStateToProps = ({ coffeeshops }) => ({
  coffeeshops
});

export default connect(mapStateToProps)(CoffeeList);
