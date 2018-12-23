import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoApp from './TodoApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoApp/>, div);

  // ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
