import React, { Component } from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes';
import DishDetail  from './components/DishdetailComponent'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      comments: DISHES

    };
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes ={this.state.dishes} />
        <DishDetail dish ={this.state.dish} comments={this.state.comments} />
      </div>
    );
  }
}
 export default App;
