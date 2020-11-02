import React, { useState, useEffect } from 'react';
import Theme from './Theme';
import News from './News';
import Nav from './Nav';

function App() {
  const defaultTheme = {
    id: 1,
    name: 'dark',
    mainColor: 'rgb(25, 25, 25)',
    secondColor: 'rgb(111, 103, 120)',
    title: 'Тёмная тема',
    textColor: 'rgb(209, 187, 46)',
  };

  const [pageNews, setPageNews] = useState(1);
  const [page, setPage] = useState(0);
  const [style, setStyle] = useState(JSON.parse(localStorage.getItem('theme')) || defaultTheme);

  const nextPage = () => {
    let newNewsPage = pageNews + 1;
    setPageNews(newNewsPage);
  };

  const updateStyle = (newStyle) => {
    setStyle(newStyle);
  };

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(style));
  }, [style]);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {!!page ? (
          <Theme updateStyle={updateStyle} setStyle={setStyle} style={style}></Theme>
        ) : (
          <News
            nextPage={nextPage}
            pageNews={pageNews}
            setPageNews={setPageNews}
            style={style}></News>
        )}

        <Nav
          pageNews={pageNews}
          setPageNews={setPageNews}
          alignSelf
          page={page}
          style={style}
          setPage={setPage}
          nextPage={nextPage}
        />
      </div>
    </>
  );
}

export default App;
