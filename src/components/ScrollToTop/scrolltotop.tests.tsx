/**
 * @file Test suite for the ScrollToTop component.
 */

import renderer from 'react-test-renderer';

import { ScrollToTop } from './ScrollToTop';

describe('ScrollToTop component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(<ScrollToTop />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
