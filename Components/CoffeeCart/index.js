import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import CartItem from "./CartItem";

import * as actionCreators from "../../store/actions/cartActions";

class CoffeeCart extends Component {
  handlePress = () => {
    this.props.checkoutCart();
  };
  render() {
    if (!this.props.user) {
      this.props.navigation.navigate("Login");
    }
    let items = this.props.items;
    let cartItems;
    if (items) {
      cartItems = items.map((item, index) => (
        <CartItem
          item={item}
          key={index}
          removeItemFromCart={this.props.removeItemFromCart}
        />
      ));
    }

    return (
      <List>
        {cartItems}
        <Button full danger onPress={this.handlePress}>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartReducer.items,
  user: state.authReducer.user
});

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: item => dispatch(actionCreators.removeItemFromCart(item)),
  checkoutCart: () => dispatch(actionCreators.checkoutCart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeeCart);
