import React, { Component } from "react";
import NewsItem from "../NewsItem/NewsItem";
import "./NewsBox.css";
import Spinner from "../spinner/Spinner";
//imoorting infinite-scroll-component
import InfiniteScroll from "react-infinite-scroll-component";
//importing proptypes
import PropTypes from "prop-types";
export default class NewsBox extends Component {
  constructor(props) {
    super(props); //calling constructor of parent class
    this.state = {
      articles: [],
      page: 1,
      loading: true,
      totalArticles: 0, //setting totalArticle as zero intially ,it will be updated when data is fetched
    };
  }

  //default props-->we use static for setting default props and props types by using static we can use the variable of class outside it without creating in's instance/object
  static defaultProps = {
    noOfArticles: 5,
    country: "in",
    category: "general",
  };
  //setting propType
  static propTypes = {
    noOfArticles: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };
  //function to fetchData from news api
  fetchNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.noOfArticles}&page=${this.state.page}`;
    this.props.setLoadingBarWidth('15%');
    let data = await fetch(url);
    this.props.setLoadingBarWidth('55%')
    let jsonData = await data.json();
    this.props.setLoadingBarWidth('75%')
    console.log(jsonData);
    //setting state articles as data fetched from api
    this.setState({
      articles: this.state.articles.concat(jsonData.articles),
      totalArticles: jsonData.totalResults,
      loading: false,
    },()=>{
      this.props.setLoadingBarWidth('100%');
    });
  };
  fetchMoreData = () => {
    this.setState(
      {
        page: this.state.page + 1,
      },
      () => {
        this.fetchNews();
      }
    );
  };
  //the below function will run after render() function
  componentDidMount() {
    this.fetchNews();
  }
  render() {
    return (
      <>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalArticles}
          loader={<Spinner />}
	    /*endMessage={
            <p style={{ color: "grey", textAlign: "center", margin: "30px" }}>
              That's All for now
            </p>
          }*/
        >
	    {/*alert(this.state.articles.length !== this.state.totalArticles && this.state.totalArticles!==0)*/}
          {this.state.loading && <Spinner />}
          {/*statement after && will only run if statement before && is true*/}
          <div id="newsBox">
            {/*iterating this.state.articles and displaying newsItem using for of*/}
            {this.state.articles.map((element) => {
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
	    {
		    this.state.totalArticles!==0 && this.state.articles.length === this.state.totalArticles && <p style={{ color: "grey", textAlign: "center", margin: "30px" }}>That's All for now </p> 
	    }
        </InfiniteScroll>
      </>
    );
  }
}
