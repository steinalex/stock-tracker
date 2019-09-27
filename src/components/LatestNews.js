import React from 'react';

const LatestNews = ({stock}) => {

    return (
        <div class="latest-news">
            <h1 className="title">Latest News</h1>
            <table>
                <tbody>
                    <tr>{stock.news1}</tr>
                    <tr>{stock.news1Source}</tr>
                    <tr>{stock.news2}</tr>
                    <tr>{stock.news2Source}</tr>
                    <tr>{stock.news3}</tr>
                    <tr>{stock.news3Source}</tr>
                    <tr>{stock.news4}</tr>
                    <tr>{stock.news4Source}</tr>
                    <tr>{stock.news5}</tr>
                    <tr>{stock.news5Source}</tr>
                </tbody>
            </table>
        </div>
    )
}

export default LatestNews