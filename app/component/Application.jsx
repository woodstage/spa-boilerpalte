import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Logo from '../resource/logo.svg';

const styles = {
  application: {

  },
  logo: {
    width: '100px'
  }
};


@injectSheet(styles)
class Application extends Component {

  render() {
    const { sheet: { classes } } = this.props;
    return (
      <div>
        <img className={classes.logo} src={Logo} />
        hello world!
      </div>
    );
  }
};

export default Application;
