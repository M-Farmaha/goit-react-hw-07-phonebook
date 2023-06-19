import { Input, Label } from './styled';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { useEffect, useState } from 'react';

export const Filter = () => {
  const [isFilterFocused, setIsFilterFocused] = useState(false);

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(filter);

  useEffect(() => {
    const debounce = setTimeout(() => {
      dispatch(setFilter(inputValue));
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [dispatch, inputValue]);

  return (
    <>
      <Label
        htmlFor={'filterInput'}
        style={{
          fontSize: 16,
          fontWeight: 400,
          color: isFilterFocused && 'rgb(87, 88, 134)',
        }}
      >
        Find contacts by name
      </Label>
      <Input
        type="text"
        id={'filterInput'}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onFocus={() => setIsFilterFocused(true)}
        onBlur={() => setIsFilterFocused(false)}
      />
    </>
  );
};
