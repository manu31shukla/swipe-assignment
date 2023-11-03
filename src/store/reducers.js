// reducers.js

import { combineReducers } from 'redux';

const invoicesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INVOICE':
      return [...state, action.payload];
    case 'EDIT_INVOICE':
      // Handle editing an invoice
      return state;
    case 'DELETE_INVOICE':
      // Handle deleting an invoice
      return state.filter((invoice) => invoice.id !== action.payload.id);
    case 'COPY_TO_NEW_INVOICE':
      // Handle copying an existing invoice to a new one
      return [...state, action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  invoices: invoicesReducer,
  // Add other reducers here if needed
});

export default rootReducer;
