import produce from 'immer';

export const Types = {
  ADD_REQUEST: '@cart/ADD_REQUEST',
  ADD_SUCCESS: '@cart/ADD_SUCCESS',
  REMOVE: '@cart/REMOVE',
  UPDATE_AMOUNT_REQUEST: '@cart/UPDATE_AMOUNT_REQUEST',
  UPDATE_AMOUNT_SUCCESS: '@cart/UPDATE_AMOUNT_SUCCESS',
};

export function addToCartRequest(id) {
  return {
    type: Types.ADD_REQUEST,
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: Types.ADD_SUCCESS,
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: Types.REMOVE,
    id,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: Types.UPDATE_AMOUNT_REQUEST,
    id,
    amount,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: Types.UPDATE_AMOUNT_SUCCESS,
    id,
    amount,
  };
}

const INITIAL_STATE = [];

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_SUCCESS:
      return produce(state, draft => {
        const { product } = action;
        draft.push(product);
      });
    case Types.REMOVE:
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) draft.splice(productIndex, 1);
      });
    case Types.UPDATE_AMOUNT_SUCCESS:
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    default:
      return state;
  }
}
