import React, { Component } from 'react';

 export class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {

            name: '',
            email: '',
            tell: ''
        };
    } 
    handleChange = e => {
        this.setState({
          [e.target.name]:e.target.value
        });
        console.log(this.state.name);
      };


      handleSubmit = e => {
        e.preventDefault();
        const newUser = {
          name:this.state.name,
          email:this.state.email,
          tell:this.state.tell
        };

       this.props.addUser(newUser)
        this.setState({
          name: "",
          email:"",
          tell:""
        });
      };
    render() {
        return (
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
          type = "text"
          name = "email"
          value = {this.state.email}
          onChange = {this.handleChange}/>

         </div>
         <div className='form-control'>
         <label>tell</label>
          <input
          type = "text"
          name = "tell"
          value = {this.state.tell}
          onChange = {this.handleChange}/>

         </div>
         <div>
           <button type = "submit">Add User</button>
         </div>
         <hr></hr>

        </form>
        );
    }
}

export default ContactForm;
