import React, { Component } from 'react';
import injectSheet from 'react-jss';

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
        hello world!
      </div>
    );
  }
};

export default App;
