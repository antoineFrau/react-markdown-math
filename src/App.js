import React from 'react'
import MarkdownRender from "./MarkdownRender"

function App(props) {
  const source= `Lift($L$) can be determined by Lift Coefficient ($C_L$) like the following
  equation.
  
  $$
  L = \frac{1}{2} \rho v^2 S C_L
  $$`
  return (
    <div>
      <MarkdownRender source={source}></MarkdownRender>
    </div>
  )
}

export default App
