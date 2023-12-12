import React from 'react';

const Book = ({ img, title, author }) => {
  const clickHanlder = e => {
    console.log(e);
    console.log(e.target);

    alert('Sellam alejkum! :D');
  };

  const complexBtn = value => {
    console.log(value);
    alert(value);
  };

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h5>{author}</h5>
      <button type='button' onClick={clickHanlder}>
        Click me
      </button>
      <button type='button' onClick={() => complexBtn(title)}>
        complexBtn
      </button>
    </article>
  );
};

export default Book;
