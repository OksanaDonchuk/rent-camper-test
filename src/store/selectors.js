import { createSelector } from '@reduxjs/toolkit';

export const selectFilteredContacts = state => state.contacts.items;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.loading;
export const selectFilter = state => state.filter;

export const selectContacts = createSelector(
  [selectFilteredContacts, selectFilter],
  (items, filter) => {
    const filteredContacts = items.filter(contact =>
      contact.name.toLowerCase().includes(filter?.toLowerCase())
    );
    return filteredContacts;
  }
);
