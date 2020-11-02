import React from 'react';
import Header from './Header';

function Theme(props) {
  const themeSelect = (color) => {
    const newTheme = async (url = '', data = {}) => {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      let date = await response.json();
      props.updateStyle(date);
    };

    newTheme(`http://frontappapi.dock7.66bit.ru/api/theme/get?name=${color}`);
  };

  return (
    <div>
      <Header style={props.style}>Темы</Header>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: 'calc(100vh - 6rem)',
          justifyContent: 'center',
          backgroundColor: `${props.style.secondColor}`,
        }}>
        <button
          style={{
            margin: '1rem 0',
            padding: '1rem 2rem',
            background: '#fff',
            border: '1px solid red',
          }}
          onClick={() => themeSelect('dark')}>
          Тема 1
        </button>
        <button
          style={{
            margin: '1rem 0',
            padding: '1rem 2rem',
            background: '#fff',
            border: '1px solid red',
          }}
          onClick={() => themeSelect('light')}>
          Тема 2
        </button>
        <button
          style={{
            margin: '1rem 0',
            padding: '1rem 2rem',
            background: '#fff',
            border: '1px solid red',
          }}
          onClick={() => themeSelect('blue')}>
          Тема 3
        </button>
      </div>
    </div>
  );
}

export default Theme;
