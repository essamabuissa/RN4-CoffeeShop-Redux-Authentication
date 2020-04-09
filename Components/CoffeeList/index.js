import React from "react";
import { List, Content, Spinner } from "native-base";
import { connect } from "react-redux";

// Component
import CoffeeItem from "./CoffeeItem";

const CoffeeList = ({ coffeeshops, loading, navigation }) => {
  if (loading) return <Spinner color="rgb(20,90,100)" />;

  const shopList = coffeeshops.map((coffeeshop) => (
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
  coffeeshops,
  loading: !coffeeshops.length,
});

export default connect(mapStateToProps)(CoffeeList);
