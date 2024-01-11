/**
 * @file Test suite for the CodeStats component.
 */

import renderer from 'react-test-renderer';

import { CodeStats } from './CodeStats';

describe('CodeStats component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(<CodeStats />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
