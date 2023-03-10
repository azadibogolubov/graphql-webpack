import React from 'react';

import { useQuery, gql } from "@apollo/client";

const BOOKS_QUERY = gql`
  query {
    books {
        author
        title
    }
  }
`;

export default () => {
  const { data, loading, error } = useQuery(BOOKS_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
      <div>
        <h1>Sub A</h1>
        <ul>
          {data.books.map((book) => (
              <li key={book.author}>{book.author}: {book.title}</li>
          ))}
        </ul>
      </div>
  );
}

