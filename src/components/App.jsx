// import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
// import { nanoid } from 'nanoid';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getStatus, getError } from './redux/selectors';

import { fetchContacts, addContact } from './redux/operations';
import { useEffect } from 'react';

export const App = () => {
  const myContacts = useSelector(getContacts);
  const myStatus = useSelector(getStatus);
  const myError = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addContactLocal = data => {
    const { name, number } = data;
    if (checkDoubleContact(data)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = {
      // id: nanoid(), //! Добавляется на сервере
      name,
      number,
    };

    dispatch(addContact(newContact));
  };

  const checkDoubleContact = inputData => {
    return myContacts.find(contact => contact.name === inputData.name);
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContactLocal} />
        <h2>My Contacts</h2>
        {myStatus && !myError && <strong>Loading Phonebook ...</strong>}
        {myError && <strong>{myError}</strong>}
        <Filter />
        <ContactList />
      </div>
    </>
  );
};
