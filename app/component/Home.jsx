import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  home: {

  }
};


@injectSheet(styles)
class Home extends Component {

  render() {
    const { actions, sheet: { classes } } = this.props;
    return (
      <div className={classes.home}>
        Home
      </div>
    );
  }
};

export default Home;
