import React from "react"
import '../../assets/style/header.css';
import imgg from '../../assets/images/icon.png';
const Header = (props) => {
    return(
    <div className="header">
    <div>
            <img className="logo" src={imgg} alt="Directly" />
    </div>
    {props.children}
    </div>
    )
}
export default Header