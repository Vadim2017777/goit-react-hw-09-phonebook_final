import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './Contact/contactsReducer';
import themeContactsReducer from './Contact/themeContactsReducer';
import authReducer from './auth/authReducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    themePhonebook: themeContactsReducer,
    auth: authReducer,
  },
});

export default store;
