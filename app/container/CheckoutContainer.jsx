import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bundle from '../component/Bundle';
import Checkout from 'bundle-loader?lazy!../component/Checkout';

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {

    }
  };
};

const CheckoutBundle = () => (
  <Bundle load={Checkout}>
    {(Component) => (Component ? <Component /> : <div>loading...</div>)}
  </Bundle>
);

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutBundle);