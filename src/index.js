import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';

import { data } from './data';
import Book from './Book';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function Booklist() {
  return (
    <section className='booklist'>
      {data.map((data, index) => {
        return <Book key={data.id} {...data} />;
      })}
    </section>
  );
}

root.render(<Booklist />);
