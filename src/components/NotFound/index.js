/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="notFound-container">
    <div>
      <h1 className="notFound--status">404</h1>
    </div>
    <div>
      <h2 className="notFound--message">oops! this page could not be found</h2>
      <Link className="link" to="/">Return to Home Page</Link>
    </div>
  </div>
);

export default NotFound;
