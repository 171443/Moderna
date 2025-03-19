import React from 'react';
import { NextPageContext } from 'next';

interface ErrorProps {
  statusCode: number;
}

const GlobalError: React.FC<ErrorProps> & { getInitialProps: ({ res, err }: NextPageContext) => ErrorProps } = ({ statusCode }) => {
  return (
    <div className="error-container">
      <h1>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</h1>
      <p>Sorry, something went wrong.</p>
    </div>
  );
};

GlobalError.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
  return { statusCode };
};

import './global.error.css';

export default GlobalError;