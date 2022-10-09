import React from 'react';
import renderer from 'react-test-renderer';

import Summary from '../../src/components/Summary';

describe('<Summary />', () => {
  it('Has 1 child', () => {
    const tree = renderer.create(<Summary />).toJSON();
    expect(tree?.children?.length).toBeGreaterThan(0);
  });
});