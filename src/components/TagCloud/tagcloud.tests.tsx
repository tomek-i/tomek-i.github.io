/**
 * @file Test suite for the TagCloud component.
 */

import renderer from 'react-test-renderer';

import { TagCloud } from './TagCloud';

describe('TagCloud component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(<TagCloud tags={[]} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
