import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
describe('App component testing', function() {
  it('renders welcome message', function() {
    const wrapper = shallow(<App />); 
    const welcome = <h1 className='App-title'>Welcome to React</h1>;
    expect(wrapper.contains(welcome)).equal(true);
  });
});

/**
 * Tools for tesing react applications
 * 1. Chai + Mocha
 * 2. Jest
 * 3. Enzyme
 */