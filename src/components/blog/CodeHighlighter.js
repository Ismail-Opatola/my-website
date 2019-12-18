import React from "react"
import PropTypes from "prop-types"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function CodeHighlighter({ code, language }) {
 const codeString = `${code}`
 return (
  <>
   <SyntaxHighlighter
    language={language}
    style={okaidia}
    lineProps={{ className: "code-line" }}
    // customStyle={{}}
    // useInlineStyles
    // showLineNumbers={isBlock}
   >
    {codeString}
   </SyntaxHighlighter>
  </>
 )
}

CodeHighlighter.defaultProps = {
 isBlock: false,
}

CodeHighlighter.propTypes = {
 code: PropTypes.any,
 language: PropTypes.string.isRequired,
 isBlock: PropTypes.bool,
}
