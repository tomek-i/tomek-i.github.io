/**
 * @file Test suite for the Loading component.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import { Loading } from './Loading';

describe('Loading component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(<Loading />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});