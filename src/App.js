import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import './Styles/App.scss';
import './Styles/Fooditem.scss';
import './Styles/Header.scss';
import './Styles/Icon.scss';
import './Styles/Home.scss';
import './Styles/query.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App;