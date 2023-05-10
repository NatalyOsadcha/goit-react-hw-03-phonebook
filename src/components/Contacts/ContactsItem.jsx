import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactsItem.module.css';

const ContactsItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li key={id} className={css.contactsItem}>
      {name}: {number}
      <button
        type="button"
        className={css.contactsBtn}
        onClick={() => onDeleteContact(id)}
      >
        Detele
      </button>
    </li>
  );
};

ContactsItem.protoTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  id: PropTypes.string,
};

export default ContactsItem;
