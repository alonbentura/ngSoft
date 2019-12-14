const initialState = {
  currentPage: 0,
  deliveryDetails: {
    reciverName: "",
    ReciverAddress: "",
    driverName: "",
    reciverPhoneNumber: "",
    MoneyValue: ""
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "goNext":
      return { ...(state.currentPage = state.currentPage + 1) };
    case "goBack":
      return [...state, state.currentPage - 1];
    default:
      return state;
  }
};
