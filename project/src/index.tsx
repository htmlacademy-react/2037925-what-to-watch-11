import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Data = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  date: 2014
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      title={Data.title}
      genre={Data.genre}
      date={Data.date}
    />
  </React.StrictMode>,
);
