import React from 'react';
import './App.css';
import Header from './components/Header';

const App = () => {
  const title = 'Product Survey';
  const subTitle = 'Your feedback is highly appreciated';

  return (
    <div className="container">
      <Header
        title={title}
        subTitle={subTitle}
      />
    </div>

  );
};

export default App;
