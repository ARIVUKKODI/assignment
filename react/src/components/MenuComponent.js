import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle } from 'reactstrap';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import DishDetail from './DishdetailComponent';

const mapStateToProps = state => {
  return {
    dishes: state.dishes
  }
}

class Menu extends Component {

  render() {

    const menu = this.props.dishes.map((dish) => {
      return(
        <div key={dish.id}  className="col-12 col-md-5 m-1">
        <Card>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
        </div>
      );
    });

    return(
      <div className="container">
        <div className="row">
        {menu}
        <DishDetail />
        </div>
        </div>

    );
  }


}
export default withRouter(connect(mapStateToProps)(Menu));
