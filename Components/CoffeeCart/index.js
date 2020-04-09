import React, { Component } from "react";
import { Text, List, Button } from "native-base";
import { connect } from "react-redux";

import { USER, LOGIN } from "../../Navigation/screenNames";

// Component
import CartItem from "./CartItem";

import { checkoutCart } from "../../redux/actions";

const CoffeeCart = ({ cart, checkoutCart, navigation, user }) => {
  const cartItems = cart.map((item) => (
    <CartItem item={item} key={item.drink + item.option} />
  ));

  return (
    <List>
      {cartItems.length ? (
        <>
          {cartItems}
          <Button
            full
            danger
            onPress={
              user
                ? checkoutCart
                : () => navigation.navigate(USER, { screen: LOGIN })
            }
          >
            <Text>Checkout</Text>
          </Button>
        </>
      ) : (
        <Text style={{ textAlign: "center" }}>Buy something</Text>
      )}
    </List>
  );
};

const mapStateToProps = ({ cart, user }) => ({ cart, user });

const mapDispatchToProps = (dispatch) => ({
  checkoutCart: () => dispatch(checkoutCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeCart);
