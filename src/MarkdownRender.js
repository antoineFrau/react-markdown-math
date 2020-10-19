import React from 'react'
import ReactMarkdown from 'react-markdown';
import MathJax from 'react-mathjax'
import RemarkMathPlugin from 'remark-math';
import gfm from 'remark-gfm'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import solarizedDark from 'react-syntax-highlighter/dist/esm/styles/hljs/solarized-dark';

SyntaxHighlighter.registerLanguage('python', python);
function MarkdownRender(props) {
    const newProps = {
        ...props,
        plugins: [
          RemarkMathPlugin,
          [gfm, {singleTilde: false}]
        ],
        renderers: {
            ...props.renderers,
            math: ({ value }) => {
                return <MathJax.Node formula={value} />
            },
            inlineMath: ({ value }) =>{
                return <MathJax.Node inline formula={value} />
            },
            code: ({language, value}) => {
              return <SyntaxHighlighter style={solarizedDark} language={language} children={value} showLineNumbers={true} />
            }
        }
      };
      return (
        <MathJax.Provider>
          <ReactMarkdown {...newProps} rawSourcePos={true}/>
        </MathJax.Provider>
      );
}

export default MarkdownRender
