import React from 'react';
import logo from './logo.svg';
import './App.css';

export const App = () => {
  const currentYear = new Date().getFullYear();  // Получаем текущий год

  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement(
      'header',
      { className: 'App-header' },
      React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
      React.createElement(
        'p',
        null,
        'Edit ',
        React.createElement('code', null, 'src/App.js'),
        ' and save to reload 3015.'
      ),
      React.createElement(
        'a',
        {
          className: 'App-link',
          href: 'https://reactjs.org',
          target: '_blank',
          rel: 'noopener noreferrer'
        },
        'Learn React'
      ),
      React.createElement(
        'div',
        null,
        React.createElement('p', null, `© ${currentYear}`)
      )
    )
  );
};
