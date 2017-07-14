import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bundle from '../component/Bundle';
import Home from 'bundle-loader?lazy!../component/Home';

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      
    }
  };
};

const HomeBundle = () => (
  <Bundle load={Home}>
    {(Component) => (Component ? <Component /> : <div>loading...</div>)}
  </Bundle>
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeBundle);