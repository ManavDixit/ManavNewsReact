import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar=()=>{
  const showNewsCategory=()=>{
    let categoryDropDown=document.getElementById('dropDown')
    if(categoryDropDown.style.display!=='none' && categoryDropDown.style.display!==''){
      categoryDropDown.style.display='';
    }
    else{
      categoryDropDown.style.display='flex';
    }
  }
  //onclick listener for categories link to hide categories on cliick
  const hideDropDown=()=>{
    document.getElementById('dropDown').style.display='none';
  }
    return (
      <>
        <nav className='navBar'>
            <h1>ManavNews</h1>
            <h1>|</h1>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
            </ul>
            <ul>
              <li>
                <a href='/'>About</a>
              </li>
            </ul>
            {/*creating dropDown for for news category*/}
            <button onClick={showNewsCategory} >News Category</button>
        </nav>
        <div id='dropDown'>
        <Link onClick={hideDropDown} to='/General'>General</Link>
        <Link onClick={hideDropDown} to='/sports'>Sports</Link>
        <Link onClick={hideDropDown} to='/science'>Science</Link>
        <Link onClick={hideDropDown} to='/business'>Business</Link>
        <Link onClick={hideDropDown} to='/health'>Health</Link>
        <Link onClick={hideDropDown} to='/entertainment'>Entertainment</Link>
        <Link onClick={hideDropDown} to='/technology'>Technology</Link>
        
        </div>
      </>
    );
}
export default Navbar;