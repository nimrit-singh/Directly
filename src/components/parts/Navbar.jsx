import '../../assets/style/navbar.css'
import React from 'react';
const Navbar = (props) => {
    return (<>
        <div className="navbar">

            <a className='first' href='#top'> &#9650;  {props.children}</a>

            <a className='second' href='#home'>Home</a>

            <a className='third' href='#hero'>What we do</a>

            <a className='fourth' href="#test">Testimonials</a>

            <a className='fourth' href="#footer">Contact Us</a>
            <a className='fifth' href="#register">Register Now</a>
        </div>
    </>)
}

export default Navbar;