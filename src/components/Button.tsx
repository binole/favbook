import React from 'react';
import { Button as BaseButton, ButtonProps } from '@chakra-ui/core';

export function Button(props: ButtonProps) {
  return <BaseButton borderRadius={24} {...props} />;
}
