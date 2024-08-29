/**
 * @file Test suite for the TagCloud component.
 */

import renderer from 'react-test-renderer';

import { TagCloud } from './TagCloud';

import { render, screen } from '@testing-library/react';

describe('TagCloud component', () => {
  it('should render snapshot with empty tags', () => {
    const component = renderer.create();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render tags correctly', () => {
    const tags = [
      { tag: 'React', count: 5 },
      { tag: 'TypeScript', count: 3 },
    ];
    render();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });
});
});
