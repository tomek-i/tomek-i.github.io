/**
 * @file Test suite for the Error404 component.
 */
import renderer from 'react-test-renderer';

import { Error404 } from './Error404';

describe('Error404 component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(<Error404 />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
