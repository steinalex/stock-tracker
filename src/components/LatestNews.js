import React from 'react';
import moment from 'moment';


const timeFormat = (date) => moment(date).fromNow()
const LatestNews = ({ stock }) => {
    console.log(stock)

    // const news = stock.map((data, index) =>({headline: data.headline, url : data.url}))
    // console.log(news)
    // {moment(news.datetime).fromNow()}

    return (
        <div className="latest-news">
            <h1 className="title">Latest News</h1>
            <table>
                <tbody>
                    {stock.map(data =>
                        <>
                            <tr><td><a target="_blank" className='news' href={`${data.url}`}>{data.headline}</a></td></tr>
                            <tr><td>{timeFormat(data.date)} {data.source} </td></tr>
                        </>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default LatestNews