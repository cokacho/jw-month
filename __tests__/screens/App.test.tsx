import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../App';

describe('<App />', () => {
  
  // it('Renders correctly', () => {
  //   const tree = renderer.create(<App />).toJSON();
  //   expect(tree).toBe();
  // });
  
  it('Has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree?.children?.length).toBeGreaterThan(0);
  });

  it('Renders correctly SaveArea', () => {
    const tree = renderer.create(<App />).toJSON()
    const treeChild = Array.from(tree.children);
    expect(treeChild.some(child => child.type == 'RCTScrollView')).toBe(true)
  });

});