/**
 * @file Test suite for the ThemeModeToggle component.
 */

import renderer from 'react-test-renderer';

import { ThemeModeToggle } from './ThemeModeToggle';

describe('ThemeModeToggle component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(<ThemeModeToggle />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
