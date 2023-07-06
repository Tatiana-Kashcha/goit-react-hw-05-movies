import { useState } from 'react';
import * as s from './Searchbar.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function Searchbar({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleChange = evt => setValue(evt.currentTarget.value);

  const handleSubmit = evt => {
    evt.preventDefault();

    if (value.trim() === '') {
      Notify.failure('Enter text to search!');
      return;
    }

    onSubmit(value.trim());
    setValue('');
  };

  return (
    <s.Form onSubmit={handleSubmit}>
      <s.Input type="text" value={value} onChange={handleChange} />

      <button type="submit" aria-label="Search">
        Search
      </button>
    </s.Form>
  );
}
