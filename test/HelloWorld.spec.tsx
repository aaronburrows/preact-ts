import { h } from 'preact'; /** @jsx h */

import chai, { expect } from 'chai';
import assertJsx from 'preact-jsx-chai';
import HelloWorld from '../src/HelloWorld';
chai.use(assertJsx);

// check if two JSX DOMs are deeply equal:
expect(
	<div id="1">a</div>
).to.deep.equal(
	<div id="1">a</div>
);

// check if a given JSX DOM contains the given fragment:
expect(<HelloWorld name="World" />).to.contain(<p>My number is:</p>);