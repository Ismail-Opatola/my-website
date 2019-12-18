import React from "react"
import PropTypes from "prop-types"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism"

const lineStyle = {
 codeLine: {
  counterIncrement: "line",
  position: "relative",
  display: "block",
  marginLeft: "1.5rem",
  "&:before": {
   content: "counter(line)",
   position: "absolute",
   marginLeft: "-1.5rem",
  },
 },
}

export default function CodeHighlighter({ code, language }) {
 const codeString = `${code}`
 return (
  <>
   <SyntaxHighlighter
    language={language}
    style={okaidia}
    lineProps={lineStyle}
    // showLineNumbers={true}
    // customStyle={{
    //  margin: 0,
    //  wordBreak: "break-all",
    //  whiteSpace: "pre-wrap",
    //  boxShadow: "0px 2px 4px rgba(50,50,93,.1)",
    // }}
    // lineNumberStyle={{
    //  color: "#5dc79e",
    //  textAlign: "right",
    //  marginLeft: "-0.5em",
    //  background: "#f2feef",
    //  padding: "0 10px 0 10px",
    // }}
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
