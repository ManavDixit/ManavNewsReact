import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import NewsBox from "./components/NewsBox/NewsBox";
import LoadingBar from './components/top-loading-bar/Loading-Bar'
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
export default class App extends Component {
  constructor(){
    super();
    this.state={
      loadingBarWidth:'0%'
    }
  }
  //variable for apikey-->when using enviornmental variable in react the variable name must be capitalized and must start with REACT_APP_Variable_Name
  apiKey=process.env.REACT_APP_NEWS_API_KEY;
  //variable for number of article
  noOfArticles=10;
  //function for setting width of loading bar
  setLoadingBarWidth=(width)=>{
    this.setState({
      loadingBarWidth:width
    })
    //ressting width to 0% after 1 sec if width is 100%
    if(width==='100%'){
      setTimeout(() => {
        this.setState(
          {
            loadingBarWidth:'0%'
          }
        )
      }, 500);
    }
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar heading="ManavNews" />
          <LoadingBar width={this.state.loadingBarWidth}/>
          <Routes>
            <Route
              path="/"
              element={
                <NewsBox apiKey={this.apiKey}  setLoadingBarWidth={this.setLoadingBarWidth} 
                  key="general"
                  noOfArticles={this.noOfArticles}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              key="general"
              path="/general"
              element={
                <NewsBox apiKey={this.apiKey} setLoadingBarWidth={this.setLoadingBarWidth}  key='general' noOfArticles={this.noOfArticles} country="in" category="general" />
              }
            />
            <Route
              path="/sports"
              element={
                <NewsBox apiKey={this.apiKey}  setLoadingBarWidth={this.setLoadingBarWidth} 
                  key="sports"
                  noOfArticles={this.noOfArticles}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route path='/science' element={
              <NewsBox apiKey={this.apiKey}  setLoadingBarWidth={this.setLoadingBarWidth}  key='science' noOfArticles={this.noOfArticles} country="in" category="science" />
            } />
            <Route path='/business' element={
              <NewsBox apiKey={this.apiKey}  setLoadingBarWidth={this.setLoadingBarWidth}  key='business' noOfArticles={this.noOfArticles} country="in" category="business" />
            } />
            <Route path='/health' element={
              <NewsBox apiKey={this.apiKey}  setLoadingBarWidth={this.setLoadingBarWidth}  key='health' noOfArticles={this.noOfArticles} country="in" category="health" />
            } />
            <Route path='/technology' element={
              <NewsBox apiKey={this.apiKey} setLoadingBarWidth={this.setLoadingBarWidth}  key='technology' noOfArticles={this.noOfArticles} country="in" category="technology" />
            } />
            <Route path='/entertainment' element={
              <NewsBox apiKey={this.apiKey}  setLoadingBarWidth={this.setLoadingBarWidth}  key='entertainment' noOfArticles={this.noOfArticles} country="in" category="entertainment" />
            } />

          </Routes>
        </Router>
      </div>
    );
  }
}
