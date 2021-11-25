import React, { Component } from 'react'
import './NewsItem.css'
export default class NewsItem extends Component {
    render() {
        let {title,description,newsUrl,imgUrl,author,publishedTime}=this.props;
        return (
            <div className='newsItem'>
                <span className="title"><p>{title}</p></span>
                <img src={imgUrl} alt="News_Picture" />
                <p className="text">{description}</p>
                <a rel="noreferrer" href={newsUrl} target="_blank">read more.</a>
                <p className='info'>{`By ${author || 'Unknown'} on ${new Date(publishedTime).toGMTString()}`}</p>
            </div>
        )
    }
}
