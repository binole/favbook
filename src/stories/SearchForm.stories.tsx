import React from 'react';
import { action } from '@storybook/addon-actions';
import SearchForm from '../components/SearchForm';

export default {
  title: 'SearchForm',
  component: SearchForm
};

export const Default = () => <SearchForm onSearch={action('onSearch')} />;
