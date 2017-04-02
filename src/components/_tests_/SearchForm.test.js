import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { stub } from 'sinon';

import SearchForm from '../SearchForm';

test('SearchForm renders correctly', () => {
  const component = renderer.create(
    <SearchForm onSearch={() => {}} />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('SearchForm calls onSearch with the contents of the input when the form is submitted', () => {
  const onSearchStub = stub();

  const component = mount(
    <SearchForm onSearch={onSearchStub} />
  );

  component.find('input').simulate('change', { target: { value: 'Test' } });
  component.find('button').get(0).click();

  expect(onSearchStub.callCount).toBe(1);
  expect(onSearchStub.calledWith('Test')).toBe(true);
});