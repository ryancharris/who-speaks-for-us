import React from 'react';

class NotFound extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <h1>404 Error</h1>
          <h3>Whatcha lookin' for, Willis?</h3>
        </div>
      </div>
    );
  }
}

export default NotFound;
