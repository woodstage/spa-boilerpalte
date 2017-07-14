import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  header: {
    backgroundColor: 'grey',
    width: '100%'
  }
};


@injectSheet(styles)
class Header extends Component {

  render() {
    const { actions, sheet: { classes } } = this.props;
    return (
      <div className={classes.home}>
        <div onClick={() => actions.nav('/')}>Go to Home</div>
        <div onClick={() => actions.nav('/checkout')}>Go to Checkout</div>
      </div>
    );
  }
};

export default Header;
