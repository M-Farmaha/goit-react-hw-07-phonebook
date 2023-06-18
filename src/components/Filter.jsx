import { ContactFeature, Input } from './styled';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/slice';
import { getFilter } from 'redux/selectors';
import { useEffect, useState } from 'react';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(filter);

  useEffect(() => {
    const debounce = setTimeout(() => {
      dispatch(setFilter(inputValue));
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [dispatch, inputValue]);

  return (
    <>
      <ContactFeature>Find contacts by name</ContactFeature>
      <Input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
    </>
  );
};
