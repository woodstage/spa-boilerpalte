import React, { Component } from 'react';
import injectSheet from 'react-jss';
import HeaderContainer from '../container/HeaderContainer';

const styles = {
  app: {

  }
};


@injectSheet(styles)
class App extends Component {

  render() {
    const { sheet: { classes } } = this.props;
    return (
      <div className={classes.app}>
        <HeaderContainer />
        {this.props.children}
      </div>
    );
  }
};

export default App;
