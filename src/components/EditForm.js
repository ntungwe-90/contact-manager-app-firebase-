import React, { Component } from "react";
import { connect } from 'react-redux';
import { editUser } from '../store/UsersAction';


export class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:props.user.name,
            email:props.user.email,
            tell:props.user.tell
        };
        this.id = props.match.params.id
    }

    handleChange = e => {
this.setState({
    [e.target.name]:e.target.value
});
    };

    handleSubmit = e => {
        e.preventDefault();
        const updatedInfo = {
            name: this.state.name,
            email: this.state.email,
            tell: this.state.tell
        };

     this.props.editUser(this.id, updatedInfo);
     this.setState({
         name:"",
         email:"",
         tell: ""
     });
     this.props.history.push('/');
 };
 render(){
     return(
        <form onSubmit = {this.handleSubmit} className = "user-info">
        <div className = "form-control">
        <label>name</label>
        <input
        type = "text"
        name = "name"
        value = {this.state.name}
        onChange = {this.handleChange}/>

       </div>

       <div className='form-control'>
       <label>email</label>
        <input
        type = "email"
        name = "email"
        value = {this.state.email}
        onChange = {this.handleChange}/>

       </div>
       <div className='form-control'>
       <label>tell</label>
        <input
        type = "number"
        name = "tell"
        value = {this.state.tell}
        onChange = {this.handleChange}/>

       </div>
       <div><button type = "submit">Add User</button>
       </div>
       <hr></hr>

      </form>
      );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find(user => user.id === ownProps.match.params.id)
});

const mapDispatchToProps = {
  editUser: editUser
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
