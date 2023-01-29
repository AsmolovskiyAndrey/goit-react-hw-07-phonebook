import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'phoneBook',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
    addMyContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    deleteMyContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addMyContact, deleteMyContact, addFilter } =
  contactSlice.actions;

export const contactsReducer = contactSlice.reducer;

//! ==========SELECTORS ==============
export const getContacts = state => state.phoneBook.contacts.items;
export const getFilter = state => state.phoneBook.filter;
