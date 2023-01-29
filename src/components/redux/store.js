import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

import axios from 'axios';

// const persistConfig = {
//   key: 'phoneBook',
//   storage,
//   whitelist: ['contacts'],
// };

// const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    phoneBook: contactsReducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store);

export const getPostAction = async dispatch => {
  dispatch({ type: 'LOADING' });
  try {
    const url = 'https://63d4075ac1ba499e54ce4b9f.mockapi.io/api/contacts';
    const { data } = await axios.get(url);
    console.log(data);
    dispatch({ type: 'SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'ERROR' });
  }
};
