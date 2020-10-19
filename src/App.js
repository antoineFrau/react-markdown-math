import React from 'react'
import "./App.css"
import MarkdownRender from "./MarkdownRender"

function App(props) {
  const source= `Lift($L$) can be determined by Lift Coefficient ($C_L$) like the following
equation.
$\\sin(2\\pi)$
$$
L = \\frac{1}{2} \\rho v^2 $S C_L
$$\n

# Live demo

$\\sum_{i=0}^{10} x^{2}$

# Live demo

Changes are automatically rendered as you type.

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## How about some code?

\`\`\`py
import math

def pow(v):
    return v**2
\`\`\`

Pretty neat, eh?

## Tables?

|Feature|Support|
|-------|-------|
|tables| ✔ |
|alignment| ✔ |
|wewt| ✔ |

## More info?

Read usage information and more on [GitHub](https://github.com/remarkjs/react-markdown)

---------------

A component by [Espen Hovlandsdal](https://espen.codes/)
`;

  return (
    // <div className="markdown-body">

    // </div>
    // {result}
    <div className="markdown-body">
      <MarkdownRender source={source}></MarkdownRender>
    </div>
  )
}

export default App
