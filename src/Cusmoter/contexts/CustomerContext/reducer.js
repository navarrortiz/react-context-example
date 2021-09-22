export const reducer = (state, {action, payload}) => {
  switch (action) {
    case 'SELECT_CUSTOMER':
      return {
        ...state,
        selectedCustomer: payload
      };
    case 'DESELECT_CUSTOMER':
      return {
        ...state,
        selectedCustomer: null
      };
    default:
      return state;
  }
};
