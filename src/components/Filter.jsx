import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from '../redux/contacts/contactsSlice';

export const Filter = () => {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <div style={{ marginBottom: 15 }}>
      <label>
        Find contacts by name <br />
        <input type="text" value={value} onChange={e => dispatch(setStatusFilter(e.target.value))} />
      </label>
    </div>
  );
};