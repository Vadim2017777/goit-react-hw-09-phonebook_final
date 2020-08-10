import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducer from './Contact/contactsReducer';
import themeContactsReducer from './Contact/themeContactsReducer';
import authReducer from './auth/authReducer';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    themePhonebook: themeContactsReducer,
    auth: persistReducer(persistConfig, authReducer),
  },
});

export const persistor = persistStore(store);
