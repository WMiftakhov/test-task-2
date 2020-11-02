import React, { useState, useEffect } from 'react';
import Header from './Header';

function News(props) {
  const [newsList, setNewsList] = useState('');

  useEffect(() => {
    getNews(`http://frontappapi.dock7.66bit.ru/api/news/get?page=${props.pageNews}&count=10`);
  }, [props.pageNews]);

  const getNews = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    let date = await response.json();
    setNewsList([...newsList, ...date]);
  };

  //   const onScrollList = (event) => {

  //     let scrollHeight = document.documentElement.scrollHeight;
  //     let clientHeight = document.documentElement.clientHeight;
  //     let height = scrollHeight + clientHeight;

  //     let scrollTop =
  //       window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

  //     if (scrollTop > 360 * props.pageNews) {
  //       props.nextPage();
  //     }
  //   };

  return (
    <div>
      <Header style={props.style}>Новости</Header>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: 'calc(100vh - 6rem)',
          justifyContent: 'center',
        }}>
        <ul
          //   onWheel={(event) => onScrollList(event)}
          style={{
            color: `${props.style.textColor}`,
            backgroundColor: `${props.style.secondColor}`,
            listStyleType: 'none',
            margin: 0,
          }}>
          {!!newsList ? (
            newsList.map(({ title, content, id, createdAt, updatedAt }) => {
              return (
                <li key={id} style={{ padding: '1rem' }}>
                  <b>{title}</b>
                  <p>{content}</p>
                </li>
              );
            })
          ) : (
            <li>"Нет новостей"</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default News;
