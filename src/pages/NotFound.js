import React from 'react';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import Willis from '../img/gary-coleman.png';

class NotFound extends React.Component {
//  constructor() {
 //   super();
 // }

  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <div className="not-found">
            <h1>Whatcha looking for, Willis?</h1>
            <img src={Willis} alt="Whatcha looking for, Willis?" className="willis-photo" />
            <h3>Try again.</h3>
            <SearchBar />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default NotFound;
