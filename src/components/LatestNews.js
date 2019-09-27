import React from 'react';

const LatestNews = ({stock}) => {

    return (
        <div className="latest-news">
            <h1 className="title">Latest News</h1>
            <table>
                <tbody>
                    <tr><td>{stock.news1}</td></tr>
                    <tr><td>{stock.news1Source}</td></tr>
                    <tr><td>{stock.news2}</td></tr>
                    <tr><td>{stock.news2Source}</td></tr>
                    <tr><td>{stock.news3}</td></tr>
                    <tr><td>{stock.news3Source}</td></tr>
                    <tr><td>{stock.news4}</td></tr>
                    <tr><td>{stock.news4Source}</td></tr>
                    <tr><td>{stock.news5}</td></tr>
                    <tr><td>{stock.news5Source}</td></tr>
                </tbody>
            </table>
        </div>
    )
}

export default LatestNews