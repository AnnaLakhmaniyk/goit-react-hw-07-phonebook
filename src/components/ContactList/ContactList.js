import { useDeleteContactMutation } from 'redux/contactsApi';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';

import s from './ContactList.module.css';

function ContactList({ contacts }) {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id} className={s.item}>
          <p className={s.text}>
            {name}:{phone}
          </p>
          <button
            type="button"
            className={s.button}
            onClick={() => deleteContact(id)}
          >
            Delete <FaTrashAlt size="15" fill="rgb(25, 22, 22)" />
          </button>
        </li>
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
