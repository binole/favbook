import React from 'react';
import {
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  InputGroupProps
} from '@chakra-ui/core';

type Props = {
  onSearch?: (term: string) => void;
};

export function SearchForm({
  onSearch,
  ...rest
}: Props & Partial<InputGroupProps>) {
  const [term, setTerm] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onSearch && onSearch(term.trim());
  };

  return (
    <InputGroup as='form' onSubmit={handleSubmit} {...rest}>
      <Input
        placeholder='Search'
        variant='filled'
        borderRadius={24}
        onChange={handleChange}
      />
      <InputRightElement>
        <IconButton
          type='submit'
          aria-label='Search'
          icon='search'
          variant='ghost'
          isRound
        />
      </InputRightElement>
    </InputGroup>
  );
}
