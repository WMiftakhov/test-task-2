import React from 'react';

function Header(props) {
  return (
    <div
      style={{
        textAlign: 'center',
        minHeight: '3rem',
        backgroundColor: `${props.style.mainColor}`,
      }}>
      <h1 style={{ margin: 0, color: `${props.style.textColor}` }}>{props.children}</h1>
    </div>
  );
}

export default Header;
