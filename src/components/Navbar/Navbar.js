import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
export default class Navbar extends Component {
  showNewsCategory=()=>{
    let categoryDropDown=document.getElementById('dropDown')
    if(categoryDropDown.style.display!=='none' && categoryDropDown.style.display!==''){
      categoryDropDown.style.display='';
    }
    else{
      categoryDropDown.style.display='flex';
    }
  }
  //onclick listener for categories link to hide categories on cliick
  hideDropDown=()=>{
    document.getElementById('dropDown').style.display='none';
  }
  render() {
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
            <button onClick={this.showNewsCategory} >News Category</button>
        </nav>
        <div id='dropDown'>
        <Link onClick={this.hideDropDown} to='/general'>General</Link>
        <Link onClick={this.hideDropDown} to='/entertainment'>Entertainment</Link>
        <Link onClick={this.hideDropDown} to='/sports'>Sports</Link>
        <Link onClick={this.hideDropDown} to='/science'>Science</Link>
        <Link onClick={this.hideDropDown} to='/business'>Business</Link>
        <Link onClick={this.hideDropDown} to='/health'>Health</Link>
        <Link onClick={this.hideDropDown} to='/technology'>Technology</Link>
        
        </div>
      </>
    );
  }
}
