import React from 'react';
import { RichText } from 'prismic-reactjs';

export const Text = ({ text }) => {
  return <RichText render={text} />;
};
