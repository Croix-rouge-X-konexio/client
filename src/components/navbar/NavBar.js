import React, { useContext } from 'react'
import { NavLink, } from 'react-router-dom'

import './Navbar.css'

export default function NavBar() {
    
    

    const logout = () => {
        // setUserData({
        //     token: undefined,
        //     user: undefined
        // })
        // localStorage.setItem("auth-token","")
    }

    return ( 
        
        <nav className="navbar">
            <NavLink className="nav-logo" to="/home"><button>Croix Rouge</button></NavLink>
            <div className="nav-links">
                <NavLink exact to="/home" activeClassName="active"><button className="nav-link"><i className="fas fa-home"></i></button></NavLink>
                <NavLink exact to="/adminvalidateuser" activeClassName="active"><button className="nav-link"><i className="fas fa-book"></i></button></NavLink>
                <NavLink exact to="/profile" activeClassName="active"><button className="nav-link"><i className="fas fa-user"></i></button></NavLink>
            </div>
                {/* {userData.user.isAdmin ? (
                    <>
                        <div className="nav-links">
                            <NavLink exact to="/" activeClassName="active"><button className="nav-link"><i className="fas fa-book"></i></button></NavLink>
                        </div>
                    </>
                ) : (
                    <>
                
                    </>
                )} */}
            <div className="nav-buttons">
                <NavLink exact to="/">
                <button onClick={logout}>Se déconnecter</button>
                </NavLink>
            </div>
        </nav>
        
        
    );
    
}
 