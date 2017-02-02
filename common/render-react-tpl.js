import React from 'react';
import { renderToString } from 'react-dom/server';

export const renderReactTpl = (Component, props) => {
  const docType = '<!doctype html>';
  return `${docType}\n${renderToString(<Component { ...props } />)}`;
};
