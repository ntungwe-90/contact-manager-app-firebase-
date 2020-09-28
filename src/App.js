import './App.css';
import Navbar from './Navbar';
import React, { Component } from 'react';
import {addUser, deleteUser} from './store/UsersAction';
import { connect } from 'react-redux';
import ContactForm from  './components/ContactForm';
import UsersInfo from './components/UsersInfo';

export class App extends Component {
  addNewUser = newUser => {
    this.props.addUser(newUser)
  };

  deleteUser = user_id =>{
    this.props.deleteUser(user_id);
  }
   
render(){
  return (
    <div className = "App">
      <Navbar />
     <ContactForm addUser = {this.addNewUser}/>
      
      <div className = "app-info">
        {this.props.users.map((item)  => {
          return(
          
             <UsersInfo
            key={item.id} 
            id={item.id}
            name={item.name}
            email={item.email}
            tell={item.tell}
            removeUser={this.deleteUser}
                                />
             );
        
        })}
      </div>
      </div>
      
      
   
  );
}
}
 


  const mapStateToProps = (state) => (
    {
      users: state.users
    } );

    const mapDispatchToProps = {
      addUser:addUser,
      deleteUser:deleteUser
    }
 
 
export default connect(mapStateToProps, mapDispatchToProps)(App);






