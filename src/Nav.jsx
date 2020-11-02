import React from 'react';

function Nav(props) {
  return (
    <div
      style={{
        textAlign: 'center',
        minHeight: '3rem',
        backgroundColor: `${props.style.mainColor}`,
      }}>
      <button
        style={{ margin: '1rem', backgroundColor: '#fff', border: '1px solid green' }}
        onClick={(e) => props.nextPage()}>
        Далее
      </button>
      <button
        style={{ margin: '1rem', backgroundColor: '#fff', border: '1px solid green' }}
        onClick={(e) => props.setPage(0)}>
        Новости
      </button>
      <button
        style={{ margin: '1rem', backgroundColor: '#fff', border: '1px solid green' }}
        onClick={(e) => props.setPage(1)}>
        Темы
      </button>
    </div>
  );
}

export default Nav;
