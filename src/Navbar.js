import React from 'react';


class Navbar extends React.Component {
    render() {
        return (
            <nav
             className="navbar navbar-default" >
                <div className="container-fluid container">
                    <div className="nav-head">
                        <a className="nav-content" href="#">CONTACT MANAGER</a>
                       
                    </div>


                    <div className="collapse navbar-collapse"
                        id="bs-example-navbar-collapse-1">
                        <ul className="nav-homepage">
                            <li ><a href="#">Home Page</a></li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        )

    }
}
export default Navbar;