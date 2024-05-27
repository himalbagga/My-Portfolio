/* File: Home.jsx
Student Name: Himal Bagga
Student Id: 301340155
Date: 26 May, 2024 */


import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
    return(
    <>
        <p>Hello Everyone! My name is Himal Bagga. Welcome to my Portfolio.</p>
        <p>You can always know more <Link to="/about">about me</Link>.</p>
        
    </>
    )
}