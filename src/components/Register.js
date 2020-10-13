import React from 'react';
import { connect } from 'react-redux';
import { registerWithEmail, LoginWithGoogle} from '../store/authActions';




function Register(props) {
    if (!props.auth.isLoaded) return null;

    if (props.auth.uid) props.history.push('/');
const handleSubmit = (e) => {
    e.preventDefault()
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    props.registerWithEmail(email, password);
};
    return (
        <div>
           <h1>Register Here</h1> 
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
               <button type="submit">Join</button>
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

const mapDispatchToProps ={
    registerWithEmail,
    LoginWithGoogle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);