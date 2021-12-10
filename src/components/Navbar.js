import React, { Component } from 'react'
import Logo from '../images/logovisual-min.png';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";


export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            openLinks : false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState(prevState => ({
            openLinks : !prevState.openLinks
        }));
    }

    render() {
        return (
            <div className="navbar">
                
                    <img className="logo" src={Logo} alt="pic"/>

                <div className="navtabs">
                    <Link to='/'>Home</Link>
                    <Link to='/Blogs'>Blogs</Link>
                    <Link to='/Artworks'>Artworks</Link>
                    <Link to='/Wireframes'>Wireframes</Link>
                    
                </div>
            </div>
        )
    }
}
