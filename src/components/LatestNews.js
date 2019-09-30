import React from 'react';
import { useSelector } from 'react-redux';

const state = useSelector((state) => state)
const latestNews=state.selectedLatestNews
const LatestNews = () => {

    return (
        <div className="latest-news">
            <h1 className="title">Latest News</h1>
            <table>
                <tbody>
                    <tr><td>{latestNews.news1}</td></tr>
                    <tr><td>{latestNews.news1Source}</td></tr>
                    <tr><td>{latestNews.news2}</td></tr>
                    <tr><td>{latestNews.news2Source}</td></tr>
                    <tr><td>{latestNews.news3}</td></tr>
                    <tr><td>{latestNews.news3Source}</td></tr>
                    <tr><td>{latestNews.news4}</td></tr>
                    <tr><td>{latestNews.news4Source}</td></tr>
                    <tr><td>{latestNews.news5}</td></tr>
                    <tr><td>{latestNews.news5Source}</td></tr>
                </tbody>
            </table>
        </div>
    )
}

export default LatestNews