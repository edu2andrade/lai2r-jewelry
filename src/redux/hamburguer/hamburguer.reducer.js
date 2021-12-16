import HamburguerActionTypes from "./hamburguer.types";

const INITIAL_STATE = {
  visible: false
};

const hamburguerReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case HamburguerActionTypes.TOGGLE_HAMBURGUER_VISIBLE:
      return {
        ...state,
        visible: !state.visible
      }
      default:
        return state;
  }
}

export default hamburguerReducer;