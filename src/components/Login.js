import React from 'react';
import { connect } from 'react-redux';
import { LoginWithEmail,LoginWithGoogle } from '../store/authActions';




  function Login(props) {
      if (!props.auth.isLoaded) return null;

      if (props.auth.uid) props.history.push('/');
const handleSubmit = (e) => {
    e.preventDefault()
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    props.LoginWithEmail(email, password);
    
};

    return (
        <div>
           <h1>Login</h1> 
           <form onSubmit={handleSubmit}>
               <div>
                   <label>Email</label>
                   <input name="email"  type="email" placeholder="Email"></input>
               </div>

               <div>
                   <label>Password</label>
                   <input name="password"  type="password" placeholder="password"></input>
               </div>

               <hr />
               <button type="submit">Login</button>

               <hr />
               <button onClick={props.LoginWithGoogle}>
                <img
                src="https://openthread.google.cn/images/ot-contrib-google.png"
                width="100"
                alt="google button" />
               </button>
           </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        auth:state.firebase.auth
    }
};

const mapDispatchToProps = {
    LoginWithEmail,
    LoginWithGoogle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);