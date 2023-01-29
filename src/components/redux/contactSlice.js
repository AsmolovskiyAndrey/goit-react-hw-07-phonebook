import { createSlice } from '@reduxjs/toolkit';
import { fetchMyContacts, addContact } from './operations';

export const contactSlice = createSlice({
  name: 'phoneBook',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
      my: '',
    },
    filter: '',
  },
  reducers: {
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
    // addMyContact: (state, action) => {
    //   state.contacts.items.push(action.payload);
    // },
    deleteMyContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
  extraReducers: {
    [fetchMyContacts.pending]: state => {
      state.contacts.isLoading = true;
      state.contacts.error = null;
    },
    [fetchMyContacts.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = action.payload;
    },
    [fetchMyContacts.rejected]: state => {
      state.contacts.error = 'Something went wrong, reload please the page...';
    },
    [addContact.pending]: state => {
      state.contacts.isLoading = true;
      state.contacts.error = null;
    },
    [addContact.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = [...state.contacts.items, action.payload];
    },
    [addContact.rejected]: state => {
      state.contacts.error = 'Adding went wrong...';
    },
  },
});

export const { deleteMyContact, addFilter } = contactSlice.actions;

export const contactsReducer = contactSlice.reducer;
