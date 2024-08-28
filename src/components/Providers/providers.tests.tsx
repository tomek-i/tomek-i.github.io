/**
 * @file Test suite for the Providers component.
 */

import renderer from 'react-test-renderer';

import { Providers } from './Providers';

describe('Providers component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(<Providers />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
