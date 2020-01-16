import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './composition/Card';
import List from './composition/List';



describe("Card component", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const card = renderer
      .create(<Card name="Card" />)
      .toJSON();
    expect(card).toMatchSnapshot();
  });


})

describe("List component", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const list = renderer
      .create(<List name="List" card={cards.map()} />)
      .toJSON();
    expect(list).toMatchSnapshot();
  });


})
