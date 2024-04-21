import search from '../../assets/svg/search.svg';
import React from 'react';
import "../../assets/style/search.css";
const Searchbar=()=>{
    return(
      <div className="group"><input className="search" type="text" placeholder='Search for JOBS' pattern='search' minLength={8}></input><button className="bt"><img className="icon" src={search}/></button></div>
    )
  }
  export default Searchbar