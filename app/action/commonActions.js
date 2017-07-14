import { push } from 'react-router-redux';

export function nav(path) {
  return (dispatch, getState) => {
    dispatch(push(path));
  };
}