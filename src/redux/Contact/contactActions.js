import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequest = createAction('contact/contactFetchRequest');
const fetchContactsSuccess = createAction('contact/contactFetchSuccess');
const fetchContactsError = createAction('contact/contactFetchSucces');

const addContactRequest = createAction('contact/contactAddRequest');
const addContactSuccess = createAction('contact/contactAddSuccess');
const addContactError = createAction('contact/contactAddSucces');

const removeContactRequest = createAction('contact/contactRemoveAddRequest');
const removeContactSuccess = createAction('contact/contactRemoveAddSuccess');
const removeContactError = createAction('contact/contactRemoveAddSucces');

const onChangeFilter = createAction('contact/changeFilter');

const onChangeTheme = createAction('contact/changeTheme');

const overlapToggle = createAction('contact/overlapToggle');

export {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  onChangeFilter,
  onChangeTheme,
  overlapToggle,
};
