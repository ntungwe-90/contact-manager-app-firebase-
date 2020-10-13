import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import  App  from './App';
import EditForm from './components/EditForm';
import Register from './components/Register';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectRoute';


const Router = () => {
    return (
        <BrowserRouter>
        {/*if user is not login, redirect user to homepage or load this url*/}
            <ProtectedRoute exact path="/" component={App} />
            <Route path="/edit/:id" component={EditForm} />
            <Route path="/Register" component={Register} />
            <Route path="/Login" component={Login} />
        </BrowserRouter>
    );
}

export default Router;