import * as firebase from 'firebase';
import * as ActionTypes from './ActionTypes';

export const dataFetch = () => {
  return (dispatch) => {
    firebase.database().ref(`/MyData/blogs`)
      .on('value', snapshot => {
        console.log('***data from firebase '+snapshot.val());
        dispatch({ type: ActionTypes.FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};