import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  checkout: {

  }
};


@injectSheet(styles)
class Checkout extends Component {

  render() {
    const { sheet: { classes } } = this.props;
    return (
      <div className={classes.checkout}>
        Checkout
      </div>
    );
  }
};

export default Checkout;
