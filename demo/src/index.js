import React, { Component } from 'react'
import {render} from 'react-dom'

import { Expoundable, Expound, Link } from '../../src'


class Demo extends Component {
  render() {
    return (
      <Expoundable>
				<p>This is a demo for the Expounder <Link expound="1">concept</Link>. <Expound expound="1">A concept is an experimental model that is designed to test viability of a product. </Expound> Expounder is meant to be implemented in tutorials and other explanatory texts, where there are readers of disparate <Link expound="2">levels of experience</Link> on the topic. <Expound expound="2">Levels of experience are when someone knows more things than someone else.</Expound></p>

				<p>If a reader needs clarification on a term, clicking the link will expand a piece of text, image or <Link expound="4">other elements</Link>. Elements can also be <Link expound="5">infinitely nested</Link> <Expound expound="5">(i.e.  elements can contain <Link expound="6">other elements </Link><Expound expound="6">like this</Expound>)</Expound>.</p>

				<Expound expound="4"><div className="highlight"><pre>a_piece_of(code)</pre></div></Expound>

				<p>If required, expounder links can be collapsible, like <Link collapsible expound="7">this guy right here</Link>.</p>

				<Expound expound="7"><p>This content can be collapsed by clicking on the link again.</p></Expound>

				<Expound expound="4">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Hydrogen_Density_Plots.png/256px-Hydrogen_Density_Plots.png" />
				</Expound>

				<p>This example is adapted from the <a href="https://github.com/skorokithakis/expounder">skorokithakis/expounder</a>.</p>

      </Expoundable>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'))
