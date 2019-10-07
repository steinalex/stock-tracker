import React from 'react';
import moment from 'moment';


const timeFormat = (date) => moment(date).fromNow()
const LatestNews = ({stock}) => {
    console.log(stock)
    // const news = stock.map((data, index) =>({headline: data.headline, url : data.url}))
    // console.log(news)
    // {moment(news.datetime).fromNow()}

    return (
        <div className="latest-news">
            <h1 className="title">Latest News</h1>
            <table>
                <tbody>
                    <tr><td><a href={`${stock.news1url}`}>{stock.news1}</a></td></tr>
                    <tr><td>{timeFormat(stock.news1Date)} {stock.news1Source} </td></tr>
                    <tr><td><a href={`${stock.news2url}`}>{stock.news2}</a></td></tr>
                    <tr><td>{timeFormat(stock.news2Date)} {stock.news2Source} </td></tr>
                    <tr><td><a href={`${stock.news3url}`}>{stock.news3}</a></td></tr>
                    <tr><td>{timeFormat(stock.news3Date)} {stock.news3Source}</td></tr>
                    <tr><td><a href={`${stock.news4url}`}>{stock.news4}</a></td></tr>
                    <tr><td>{timeFormat(stock.news4Date)} {stock.news4Source} </td></tr>
                    <tr><td><a href={`${stock.news5url}`}>{stock.news5}</a></td></tr>
                    <tr><td>{timeFormat(stock.news5Date)} {stock.news5Source}</td></tr>
                </tbody>
            </table>
        </div>
    )
}

export default LatestNews