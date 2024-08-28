/**
 * @file Test suite for the Overlay component.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import { Overlay } from './Overlay';

describe('Overlay component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(<Overlay />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});