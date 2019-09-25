import React from 'react';
import { useSelector } from 'react-redux';

const LatestNews = () => {

    const response = useSelector((state) => state.response)

    return (
        <>
            <h1>LatestNews</h1>
            <table>
                <tbody>
                    <tr>{response.news1}</tr>
                    <tr>{response.news1Source}</tr>
                    <tr>{response.news2}</tr>
                    <tr>{response.news2Source}</tr>
                    <tr>{response.news3}</tr>
                    <tr>{response.news3Source}</tr>
                    <tr>{response.news4}</tr>
                    <tr>{response.news4Source}</tr>
                    <tr>{response.news5}</tr>
                    <tr>{response.news5Source}</tr>
                </tbody>
            </table>
        </>
    )
}

export default LatestNews