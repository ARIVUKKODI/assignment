import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle } from 'reactstrap';


class StudentsInfo extends Component {


  render() {

    const info = this.props.students.map((detail) => {
      return(
        <div key={detail.id}  className="col-12 col-md-5 m-1">
        <Card onClick ={() => this.props.onClick(detail.id)}>
                  <CardImgOverlay>
                      <CardTitle>{detail.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
        </div>
      );
    });

    return(
      <div className="container">
        <div className="row">
        {info}
        </div>
        </div>

    );
  }


}
export default StudentsInfo;

const mapStateToProps = state => {
  return {
    students: state.students
  }
}
