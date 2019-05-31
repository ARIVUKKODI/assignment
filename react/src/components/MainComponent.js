import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail  from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    dishes: state.dishes
  }
}

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
      <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
      <Redirect to="/home" />
      </Switch>
        <Footer />
      </div>
    );
  }
}
 export default withRouter(connect(mapStateToProps)(Main));
