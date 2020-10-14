import React from 'react'
import ReactMarkdown from 'react-markdown';
import MathJax from 'react-mathjax'
import RemarkMathPlugin from 'remark-math';

function MarkdownRender(props) {
    const newProps = {
        ...props,
        plugins: [
          RemarkMathPlugin,
        ],
        renderers: {
            ...props.renderers,
            math: ({ value }) => {
                console.log("math equation")
                return <MathJax.Node formula={props.value} />
            },
            inlineMath: ({ value }) =>{
                console.log("azeaz")
                return <MathJax.Node inline formula={props.value} />
            }
        }
      };
      return (
        <ReactMarkdown {...newProps}/>
      );
}

export default MarkdownRender
