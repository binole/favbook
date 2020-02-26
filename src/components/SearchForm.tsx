import React from 'react';
import {
  InputGroup,
  Input,
  InputRightElement,
  IconButton
} from '@chakra-ui/core';

type Props = {
  onSearch: (term: string) => void;
};

export const SearchForm = ({ onSearch }: Props) => {
  const [term, setTerm] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onSearch(term.trim());
  };

  return (
    <InputGroup as='form' onSubmit={handleSubmit}>
      <Input
        placeholder='Search books'
        variant='filled'
        borderRadius={24}
        onChange={handleChange}
      />
      <InputRightElement>
        <IconButton
          type='submit'
          aria-label='Search database'
          icon='search'
          variant='ghost'
          isRound
        />
      </InputRightElement>
    </InputGroup>
  );
};
