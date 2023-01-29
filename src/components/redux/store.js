import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';

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
