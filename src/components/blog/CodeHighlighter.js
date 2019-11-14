import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai, tomorrow, okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
