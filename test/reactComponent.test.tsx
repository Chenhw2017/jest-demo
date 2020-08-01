import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import renderer from 'react-test-renderer';
// import reactDom from 'react-dom';
import glob from "glob";

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import CheckboxWithLabel from '../src/CheckboxWithLabel';

describe('learn Enzyme', () => {
  // console.log(glob.sync('./src/*.tsx'))
  it('CheckboxWithLabel changes the text after click', () => {
    // Render a checkbox with label in the document
    const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);
    const wrapper = render(<CheckboxWithLabel labelOn="On" labelOff="Off" />);
    expect(wrapper).toMatchSnapshot();
    expect(checkbox.text()).toEqual('Off');

    checkbox.find('input').simulate('change');

    expect(checkbox.text()).toEqual('On');
  });


  it('react-test-renderer CheckboxWithLabel changes the text after click', () => {
    const tree = renderer
      .create(<CheckboxWithLabel labelOn="On" labelOff="Off" />)
      .toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
})