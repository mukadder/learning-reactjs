import React from 'react';
import { shallow } from 'enzyme';

import Thumbnails from '../Thumbnails';

import { MOCK_500PX_PHOTOS_RESPONSE } from '../../testls/mocks';

test('Thumbnails renders correctly', () => {
  const component = shallow(
    <Thumbnails photos={JSON.parse(MOCK_500PX_PHOTOS_RESPONSE).photos} />
  );
  const tree = component.getNode();

  expect(tree).toMatchSnapshot();
});