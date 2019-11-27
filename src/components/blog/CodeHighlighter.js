import React from 'react';
import PropTypes from 'prop-types'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeHighlighter ({code, language}) {
  const codeString = `${code}`
    return (
      <>
        <SyntaxHighlighter
          language={language}
          style={okaidia}

        >
          {codeString}
        </SyntaxHighlighter>
      </>
    );
}

CodeHighlighter.propTypes = {
  code: PropTypes.any,
  language: PropTypes.string.isRequired
}