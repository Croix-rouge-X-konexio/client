import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from "axios";
import './Navbar.css'
import logo from '../../images/logo.png'
export default function NavBar() {

    const [user, setUser] = useState([])


    useEffect(() => {
        axios.get(`http://localhost:8000/profil`, { withCredentials: true })
            .then((res) => {
                setUser(res.data.data);
            })
            .catch((err) => {
                console.log("coté front   ", err);
            });
    }, []);

    const logout = () => {
        axios.get("http://localhost:8000/home", { withCredentials: true })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log("coté front   ", err);
            });
    }

    return (

        <nav className="navbar">
            <NavLink className="nav-logo" to="/home"><button>
                <img src={logo} alt="" />
            </button></NavLink>
            <div className="nav-links">
                <NavLink exact to="/home" activeClassName="active"><button className="nav-link"><i className="fas fa-home"></i></button></NavLink>
                <NavLink exact to="/profile" activeClassName="active"><button className="nav-link"><i className="fas fa-user"></i></button></NavLink>
                {user.length < 1 ? (
                    <>
                    <button disabled className="nav-link"><i className="fas fa-book"></i></button>
                    </>
                ):(
                    <div>
                    {user[0].user[0].isAdmin ?(
                    <NavLink exact to="/adminvalidateuser" activeClassName="active"><button className="nav-link"><i className="fas fa-book"></i></button></NavLink>
                    ) : (
                    <>

                    </>
                )}
                    </div>
                    
                )}
                
                <NavLink exact to="/"><button className="nav-link" onClick={logout}><i class="fas fa-sign-out-alt"></i></button></NavLink>
            
            </div>
        </nav>
    );
}
