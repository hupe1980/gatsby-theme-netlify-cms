import React from 'react';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import { create } from 'jss';

export default function CssInjector({ children }) {
  const iframe = document.querySelector('#nc-root iframe');
  const iframeHeadElem = iframe && iframe.contentDocument.head;

  if (!iframeHeadElem) {
    return null;
  }

  const jss = create({
    ...jssPreset(),
    insertionPoint: iframeHeadElem.firstChild
  });

  return <StylesProvider jss={jss}>{children}</StylesProvider>;
}
