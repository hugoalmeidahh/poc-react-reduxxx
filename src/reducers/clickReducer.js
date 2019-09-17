import { CLICK_UPDATE_VALUE } from '../actions/actionTypes';

const initialState = {
  inputName: 'Redux!',
  user:'hugo',
  pass:'1234',
};

export const clickReducer = (state = initialState, action) => {
  console.log("reducer")

  if(action.type == CLICK_UPDATE_VALUE){
    console.log(action)
    return {...state, ...action.newValue, inputName:'Atualizado via Reduxxx'}
  }
  return state
  // switch (action.type) {
  //   case CLICK_UPDATE_VALUE:
  //     return {
  //       ...state,
  //       inputName: action.newValue
  //     };
  //   default:
  //     return state;
  // }
}
