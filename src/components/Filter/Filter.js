import { useDispatch } from 'react-redux';
import { setFilterStatus } from '../../redux/filterSlice';

 const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChange = event => {
    dispatch(setFilterStatus(event.target.value.toLowerCase()));
  };

  return (
    <label>
      Find contacts by name
      <input
        name="filterName"
        type="text"
        placeholder="Search contacts..."
        onChange={onFilterChange}
      />
    </label>
  );
};
export default Filter