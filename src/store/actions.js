// actions.js

// Action Types
export const ADD_INVOICE = 'ADD_INVOICE';
export const EDIT_INVOICE = 'EDIT_INVOICE';
export const DELETE_INVOICE = 'DELETE_INVOICE';
export const COPY_TO_NEW_INVOICE = 'COPY_TO_NEW_INVOICE';

// Action Creators
export const addInvoice = (invoice) => ({
  type: ADD_INVOICE,
  payload: invoice,
});

export const editInvoice = (invoice) => ({
  type: EDIT_INVOICE,
  payload: invoice,
});

export const deleteInvoice = (invoiceId) => ({
  type: DELETE_INVOICE,
  payload: { id: invoiceId },
});

export const copyToNewInvoice = (invoice) => ({
  type: COPY_TO_NEW_INVOICE,
  payload: invoice,
});
