import css from './ContactsList.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'components/redux/operations';
import { getContacts, getFilter } from 'components/redux/selectors';

export const ContactList = () => {
  const myContacts = useSelector(getContacts);
  const myFilter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalized = myFilter.toLowerCase();
    return myContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
  };

  return (
    <ul>
      {getVisibleContacts().length === 0 && myContacts.length > 0 && (
        <strong>Sorry, your search did not find any contacts.</strong>
      )}

      {myContacts.length > 0 &&
        getVisibleContacts().map(({ id, name, number }) => (
          <li className={css.list} key={id}>
            {name}: {number}
            <button
              className={css.btn}
              onClick={() => dispatch(deleteContact(id))}
            >
              Удалить
            </button>
          </li>
        ))}
    </ul>
  );
};
