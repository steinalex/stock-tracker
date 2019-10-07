import React from 'react';
import moment from 'moment';

const LatestNews = ({stock}) => {
    console.log(stock)
    // const news = stock.map((data, index) =>({headline: data.headline, url : data.url}))
    // console.log(news)
    const a= 1603355187453;
    const b=moment(a).fromNow();
    console.log(b)
    const timeFormat = (date) => moment(date).fromNow()
    // {moment(news.datetime).fromNow()}

    return (
        <div className="latest-news">
            <h1 className="title">Latest News</h1>
            <table>
                <tbody>
                    <tr><td>{stock.news1}</td></tr>
                    <tr><td>{timeFormat(stock.news1Date)} {stock.news1Source} </td></tr>
                    <tr><td>{stock.news2}</td></tr>
                    <tr><td>{timeFormat(stock.news2Date)} {stock.news2Source} </td></tr>
                    <tr><td>{stock.news3}</td></tr>
                    <tr><td>{timeFormat(stock.news3Date)} {stock.news3Source}</td></tr>
                    <tr><td>{stock.news4}</td></tr>
                    <tr><td>{timeFormat(stock.news4Date)} {stock.news4Source} </td></tr>
                    <tr><td>{stock.news5}</td></tr>
                    <tr><td>{timeFormat(stock.news5Date)} {stock.news5Source}</td></tr>
                </tbody>
            </table>
        </div>
    )
}

export default LatestNews