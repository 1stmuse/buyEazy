import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_ITEM_QUANTITY,
  DECREASE_ITEM_QUANTITY,
} from "./actions";

const initialState = {
  cartItems: [],
  numberOfItems: 0,
};

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART: {
      const index = state.cartItems.findIndex(
        (ob) => ob.id === payload.item.id
      );

      if (index !== -1) {
        const items = [...state.cartItems];
        const added = state.cartItems[index];
        added.quantity++;
        items[index] = added;
        return {
          ...state,
          cartItems: items,
        };
      } else {
        return {
          ...state,
          numberOfItems: state.numberOfItems + 1,
          cartItems: [...state.cartItems, payload.item],
        };
      }
    }

    case REMOVE_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter((ob) => ob.id !== payload.id),
        numberOfItems: state.numberOfItems--,
      };
    }

    case INCREASE_ITEM_QUANTITY: {
      const newItems = state.cartItems.map((ob) => {
        if (ob.id === payload.id) {
          ob.quantity += 1;
        }
        return ob;
      });

      return {
        ...state,
        cartItems: newItems,
      };
    }

    case DECREASE_ITEM_QUANTITY: {
      const newItems = state.cartItems.map((ob) => {
        if (ob.id === payload.id) {
          ob.quantity -= 1;
        }
        return ob;
      });

      return {
        ...state,
        cartItems: newItems,
      };
    }

    default:
      return state;
  }
};
