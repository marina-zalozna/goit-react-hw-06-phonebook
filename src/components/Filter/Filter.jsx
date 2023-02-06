import css from './Filter.module.css';
import { filterContact } from "../redux/contactsSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Filter() {

    const filter = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch(); 

    const changeFilter = data => {
        dispatch(filterContact(data));
    };
  return (
    <>
      <label className={css.title}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={e => changeFilter(e.target.value)}
        />
      </label>
    </>
  );
};