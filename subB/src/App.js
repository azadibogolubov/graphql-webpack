import React from 'react';

import { useQuery, gql } from "@apollo/client";

const BOOKS2_QUERY = gql`
  query {
    books2 {
        author
        title
    }
  }
`;

export default () => {
  const { data, loading, error } = useQuery(BOOKS2_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
      <div>
        <h1>Sub B</h1>
        <ul>
          {data.books2.map((book) => (
              <li key={book.author}>{book.author}: {book.title}</li>
          ))}
        </ul>
      </div>
  );
}

