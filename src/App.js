import "./App.css";
import React, {useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import NewsBox from "./components/NewsBox/NewsBox";
import LoadingBar from './components/top-loading-bar/Loading-Bar'
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
const App=()=>{
  //initializing state for width of top loading bar
  const [loadingBarWidth, setloadingBarWidth] = useState('0%');
  //getting api key from .env file --> the name of enviornmental varialble must start with REACT_APP and must be in capital letter while using react ex:(REACT_APP_MY_VARIABLE)
  const apiKey=process.env.REACT_APP_NEWS_API_KEY;
  //creating variable for no of articles in a page
  const noOfArticles=10;
  //function for setting width of loading bar
  const setLoadingBarWidth=(width)=>{
    setloadingBarWidth(width);
    //ressting width to 0% after 1 sec if width is 100%
    if(width==='100%'){

      setTimeout(() => {
        setloadingBarWidth('0%')
      }, 500);

    }

  }
    return (
      <div>
        <Router>
          <Navbar heading="ManavNews" />
          <LoadingBar width={loadingBarWidth}/>
          <Routes>
            <Route
              path="/"
              element={
                <NewsBox apiKey={apiKey}  setLoadingBarWidth={setLoadingBarWidth} 
                  key="general"
                  noOfArticles={noOfArticles}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              key="general"
              path="/general"
              element={
                <NewsBox apiKey={apiKey} setLoadingBarWidth={setLoadingBarWidth}  key='general' noOfArticles={noOfArticles} country="in" category="general" />
              }
            />
            <Route
              path="/sports"
              element={
                <NewsBox apiKey={apiKey}  setLoadingBarWidth={setLoadingBarWidth} 
                  key="sports"
                  noOfArticles={noOfArticles}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route path='/science' element={
              <NewsBox apiKey={apiKey}  setLoadingBarWidth={setLoadingBarWidth}  key='science' noOfArticles={noOfArticles} country="in" category="science" />
            } />
            <Route path='/business' element={
              <NewsBox apiKey={apiKey}  setLoadingBarWidth={setLoadingBarWidth}  key='business' noOfArticles={noOfArticles} country="in" category="business" />
            } />
            <Route path='/health' element={
              <NewsBox apiKey={apiKey}  setLoadingBarWidth={setLoadingBarWidth}  key='health' noOfArticles={noOfArticles} country="in" category="health" />
            } />
            <Route path='/technology' element={
              <NewsBox apiKey={apiKey} setLoadingBarWidth={setLoadingBarWidth}  key='technology' noOfArticles={noOfArticles} country="in" category="technology" />
            } />
            <Route path='/entertainment' element={
              <NewsBox apiKey={apiKey}  setLoadingBarWidth={setLoadingBarWidth}  key='entertainment' noOfArticles={noOfArticles} country="in" category="entertainment" />
            } />

          </Routes>
        </Router>
      </div>
    );
}
export default App;