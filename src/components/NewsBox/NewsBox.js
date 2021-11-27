import React, { useState, useEffect } from "react";
import NewsItem from "../NewsItem/NewsItem";
import "./NewsBox.css";
import Spinner from "../spinner/Spinner";
//imoorting infinite-scroll-component
import InfiniteScroll from "react-infinite-scroll-component";
//importing proptypes
import PropTypes from "prop-types";

const NewsBox = (props) => {
  //intializing states
  const [articles, setarticles] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(true);
  const [totalArticles, settotalArticles] = useState(0);

  //function to fetchData from news api
  const fetchNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.noOfArticles}&page=${page}`;
    props.setLoadingBarWidth("15%");
    let data = await fetch(url);
    props.setLoadingBarWidth("55%");
    let jsonData = await data.json();
    props.setLoadingBarWidth("75%");
    console.log(jsonData);

    //setting state articles as data fetched from api
    setarticles(articles.concat(jsonData.articles));
    settotalArticles(jsonData.totalResults);
    setloading(false);
    //setting loading bar width to 100% after data is fetched and state is updatedas
    props.setLoadingBarWidth("100%");
  };
  const fetchMoreData = () => {
    //increasing state page by 1
    setpage(page + 1);
  };
  //this will call fetchNews() function every time state page in changed
  useEffect(fetchNews, [page]);
  //the below function will run after the this componemt will mount
  useEffect(fetchNews, []);

  return (
    <>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalArticles}
        loader={<Spinner />}
      >
        {/*statement after && will only run if statement before && is true*/}
        {loading && <Spinner />}{/*mounting spinner component if loading is true*/}

        <div id="newsBox">
          {/*iterating articles and displaying newsItem using for of*/}
          {/*map runs the given function for all elements of array on which it is runned */}
          {articles.map((element) => {
            return (
              <NewsItem
                title={element.title}
                description={element.description}
                newsUrl={element.url}
                imgUrl={
                  element.urlToImage ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wBx9Q1gA9RjcV4Ur4yA2kQ8ZPs7DAowcHA&usqp=CAU"
                } //USING another image if image is not avilable or is null
                key={element.url} //giving unique key to every element,
                author={element.author}
                publishedTime={element.publishedAt}
              />
            );
          })}
        </div>
        {/*showing message:-(that's all for now) if no of articles fetched are not 0 and no of articles showned on screen till now are not equal to total no of articles*/}
        {totalArticles !== 0 && articles.length === totalArticles && (
          <p style={{ color: "grey", textAlign: "center", margin: "30px" }}>
            That's All for now{" "}
          </p>
        )}
      </InfiniteScroll>
    </>
  );
};
//setting default props
NewsBox.defaultProps = { noOfArticles: 5, country: "in", category: "general" };
//setting propTypes
NewsBox.propTypes = {
  noOfArticles: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};
export default NewsBox;
