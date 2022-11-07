import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  SearchForm,
  SubmitButton,
  SearchFormInput,
} from './SearchBar.styled';
import toast, { Toaster } from 'react-hot-toast';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error(`Please enter your query`);
      return;
    }
    onSubmit({ query });
    setQuery('');
  };

  const handleQueryChange = event => {
    setQuery(event.target.value.toLowerCase());
  };

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          value={query}
          onChange={handleQueryChange}
        />
        <SubmitButton type="submit">Search</SubmitButton>
      </SearchForm>
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
