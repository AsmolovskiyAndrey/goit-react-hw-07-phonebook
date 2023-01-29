import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMyContacts = createAsyncThunk('contacts', async () => {
  const url = 'https://63d4075ac1ba499e54ce4b9f.mockapi.io/api/contacts';
  const { data } = await axios.get(url);
  return data;
});

export const addContact = createAsyncThunk('add', async contact => {
  const url = 'https://63d4075ac1ba499e54ce4b9f.mockapi.io/api/contacts';
  const { data } = await axios.post(url, contact);
  return data;
});

export const deleteContactServer = createAsyncThunk('add', async contact => {
  const url = 'https://63d4075ac1ba499e54ce4b9f.mockapi.io/api/contacts';
  const { data } = await axios.post(url, contact);
  return data;
});
