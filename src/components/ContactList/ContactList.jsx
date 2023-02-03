import css from './ContactList.module.css';
import { deleteContact } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';

export default function ContactList () {
   const contacts = useSelector(state => state.contactsReducer.items.filter(contact => contact.name.toLowerCase().includes(state.contactsReducer.filter)));
    const dispatch = useDispatch();

    const deleteContacts = data => {
        dispatch(deleteContact(data));
    };
  
    return (
    <ul className={css.contacts}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contact__list} key={id}>
          <span className={css.contact__item}>{name}: </span>
          <span className="contact__item">{number} </span>
          <button
            className={css.contacts__button}
            type="button"
            onClick={() => deleteContacts(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

