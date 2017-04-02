/**
 * Created by mukadder on 3/31/17.
 */
import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../Header';

test('Header renders tt qcorrectly', () => {
    const component = renderer.create(
        <Header src='http://test.com/test.jpg' />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});