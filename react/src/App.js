import React from 'react';

class Myapp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      class:'',
      tamilmark:'',
      englishmark:'',
      mathsmark:'',
      sciencemark:'',
      socialmark:'',
    }
  }



  onChangeName = (e: React.ChangeEvent < HTMLInputElement > ) => {
    this.setState({
      name: e.target.value
    });
  };

  onChangeClass = (e: React.ChangeEvent < HTMLInputElement > ) => {
    this.setState({
      class: e.target.value
    });
  };

  onChangeTamilmark = (e: React.ChangeEvent < HTMLInputElement > ) => {
    this.setState({
      tamilmark: e.target.value
    });
  };

  onChangeEnglishmark = (e: React.ChangeEvent < HTMLInputElement > ) => {
    this.setState({
      englishmark: e.target.value
    });
  };

  onChangeMathsmark = (e: React.ChangeEvent < HTMLInputElement > ) => {
    this.setState({
      mathsmark: e.target.value
    });
  };

  onChangeSciencemark = (e: React.ChangeEvent < HTMLInputElement > ) => {
    this.setState({
      sciencemark: e.target.value
    });
  };

  onChangeSocialmark = (e: React.ChangeEvent < HTMLInputElement > ) => {
    this.setState({
      socialmark: e.target.value
    });
  };


  handleSubmit = () => {
    const {
      name
    } = this.state;
    push("/find");
  };

  render() {

    return (

      <fieldset>
               <legend><b>Student Input Section:</b></legend>
               Name:<input type="text" value = {this.state.name} onChange = {this.onChangeName}/>
               Class:<input type="text" value = {this.state.class} onChange = {this.onChangeClass}/> <br/><br/>
               <table border="1">
                   <tr><td>Tamil</td><td><input type="text" value = {this.state.tamilmark} onChange = {this.onChangeTamilmark}/></td></tr>
                   <tr><td>English</td><td><input type="text" value = {this.state.englishmark} onChange = {this.onChangeEnglishmark}/></td></tr>
                   <tr><td>Maths</td><td><input type="text" value = {this.state.mathsmark} onChange = {this.onChangeMathsmark}/></td></tr>
                   <tr><td>Science</td><td><input type="text" value = {this.state.sciencemark} onChange = {this.onChangeSciencemark}/></td></tr>
                   <tr><td>Socialscience</td><td><input type="text" value = {this.state.socialmark} onChange = {this.onChangeSocialmark}/></td></tr>
               </table><br/><br/>
               <input type="button" onclick= {this.handleSubmit } value="Get Result"/>
               </fieldset>

    );
  }
}



export default Myapp;
