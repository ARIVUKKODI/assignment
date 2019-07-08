import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'


class Main extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const HomePage = () => {
      return(
          <Home />
      );
    }

    return (
      <div>
      <Header />
      <Switch>
      <Route path= "/home" Component={HomePage} />
      <Route exact path='/menu' component={() => <Menu />} />
      <Redirect to="/home" />
      </Switch>
        <Footer />
      </div>
    );
  }
}
 export default Main;
