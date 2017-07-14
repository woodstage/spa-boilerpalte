import { connect } from 'react-redux';
import Header from '../component/Header';
import * as commonActions from '../action/commonActions';

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      nav: path => dispatch(commonActions.nav(path))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);